import { DEFAULT_WIDTH, IS_HIDPI, IS_IOS, FPS, IS_MOBILE } from './constants';
import { getTimeStamp, noop, decodeBase64ToArrayBuffer } from './utils';
import DistanceMeter from './DistanceMeter';
import Horizon from './Horizon';
import Trex from './Trex';
import TrexGroup from './TrexGroup';

/**
 * Create canvas element.
 * @param {HTMLElement} container Element to append canvas to.
 * @param {number} width
 * @param {number} height
 * @param {string} className
 * @return {HTMLCanvasElement}
 */
function createCanvas(container, width, height, className) {
    const canvas = document.createElement('canvas');
    canvas.className = className
        ? `${Runner.classes.CANVAS} ${className}`
        : Runner.classes.CANVAS;
    canvas.width = width;
    canvas.height = height;
    container.appendChild(canvas);

    return canvas;
}

/**
 * T-Rex runner.
 * @param {string} outerContainerId Outer containing element id.
 * @param {Object} opt_config
 * @constructor
 * @export
 */
export default class Runner {
    constructor(outerContainerId, opt_config) {
        // Singleton
        if (Runner.instance_) {
            return Runner.instance_;
        }
        Runner.instance_ = this;
        this.outerContainerEl = document.querySelector(outerContainerId);
        this.generationEl = document.querySelector('.generation');
        this.generation = 0;
        this.containerEl = null;
        this.snackbarEl = null;
        // A div to intercept touch events. Only set while (playing && useTouch).
        this.touchController = null;
        this.config = {
            ...Runner.config,
            ...opt_config
        };
        // Logical dimensions of the container.
        this.dimensions = Runner.defaultDimensions;
        this.canvas = null;
        this.canvasCtx = null;
        this.tRex = null;
        this.distanceMeter = null;
        this.distanceRan = 0;
        this.highestScore = 0;
        this.syncHighestScore = false;
        this.time = 0;
        this.runningTime = 0;
        this.msPerFrame = 1000 / FPS;
        this.currentSpeed = this.config.SPEED;
        this.obstacles = [];
        this.activated = false; // Whether the easter egg has been activated.
        this.playing = false; // Whether the game is currently in play state.
        this.crashed = false;
        this.paused = false;
        this.inverted = false;
        this.invertTimer = 0;
        this.resizeTimerId_ = null;
        this.playCount = 0;
        this.generation = 0;
        // Sound FX.
        this.audioBuffer = null;
        this.soundFx = {};
        // Global web audio context for playing sounds.
        this.audioContext = null;
        // Images.
        this.images = {};
        this.imagesLoaded = 0;

        this.loadImages();
        window['initializeEasterEggHighScore'] = this.initializeHighScore.bind(
            this
        );
    }

    /**
     * For disabled instances, set up a snackbar with the disabled message.
     */
    setupDisabledRunner() {
        this.containerEl = document.createElement('div');
        this.containerEl.className = Runner.classes.SNACKBAR;
        this.containerEl.textContent = loadTimeData.getValue(
            'disabledEasterEgg'
        );
        this.outerContainerEl.appendChild(this.containerEl);
        // Show notification when the activation key is pressed.
        document.addEventListener(Runner.events.KEYDOWN, ({ keyCode }) => {
            if (Runner.keycodes.JUMP[keyCode]) {
                this.containerEl.classList.add(Runner.classes.SNACKBAR_SHOW);
                document.querySelector('.icon').classList.add('icon-disabled');
            }
        });
    }

    /**
     * Setting individual settings for debugging.
     * @param {string} setting
     * @param {*} value
     */
    updateConfigSetting(setting, value) {
        if (setting in this.config && value != undefined) {
            this.config[setting] = value;
            switch (setting) {
                case 'GRAVITY':
                case 'MIN_JUMP_HEIGHT':
                case 'SPEED_DROP_COEFFICIENT':
                    this.tRex.config[setting] = value;
                    break;
                case 'INITIAL_JUMP_VELOCITY':
                    this.tRex.setJumpVelocity(value);
                    break;
                case 'SPEED':
                    this.setSpeed(value);
                    break;
            }
        }
    }

    /**
     * Cache the appropriate image sprite from the page and get the sprite sheet
     * definition.
     */
    loadImages() {
        if (IS_HIDPI) {
            Runner.imageSprite = document.getElementById(
                'offline-resources-2x'
            );
            this.spriteDef = Runner.spriteDefinition.HDPI;
        } else {
            Runner.imageSprite = document.getElementById(
                'offline-resources-1x'
            );
            this.spriteDef = Runner.spriteDefinition.LDPI;
        }
        if (Runner.imageSprite.complete) {
            this.init();
        } else {
            // If the images are not yet loaded, add a listener.
            Runner.imageSprite.addEventListener(
                Runner.events.LOAD,
                this.init.bind(this)
            );
        }
    }

    /**
     * Load and decode base 64 encoded sounds.
     */
    loadSounds() {
        if (!IS_IOS) {
            this.audioContext = new AudioContext();
            const resourceTemplate = document.getElementById(
                this.config.RESOURCE_TEMPLATE_ID
            ).content;
            for (const sound in Runner.sounds) {
                let soundSrc = resourceTemplate.getElementById(
                    Runner.sounds[sound]
                ).src;
                soundSrc = soundSrc.substr(soundSrc.indexOf(',') + 1);
                const buffer = decodeBase64ToArrayBuffer(soundSrc);
                // Async, so no guarantee of order in array.
                this.audioContext.decodeAudioData(
                    buffer,
                    function(index, audioData) {
                        this.soundFx[index] = audioData;
                    }.bind(this, sound)
                );
            }
        }
    }

    /**
     * Sets the game speed. Adjust the speed accordingly if on a smaller screen.
     * @param {number} opt_speed
     */
    setSpeed(opt_speed) {
        const speed = opt_speed || this.currentSpeed;
        // Reduce the speed on smaller mobile screens.
        if (this.dimensions.WIDTH < DEFAULT_WIDTH) {
            const mobileSpeed =
                ((speed * this.dimensions.WIDTH) / DEFAULT_WIDTH) *
                this.config.MOBILE_SPEED_COEFFICIENT;
            this.currentSpeed = mobileSpeed > speed ? speed : mobileSpeed;
        } else if (opt_speed) {
            this.currentSpeed = opt_speed;
        }
    }

    /**
     * Game initialiser.
     */
    init() {
        // Hide the static icon.
        document.querySelector(`.${Runner.classes.ICON}`).style.visibility =
            'hidden';
        this.containerEl = document.createElement('div');
        this.containerEl.className = Runner.classes.CONTAINER;

        this.adjustDimensions();
        this.setSpeed();

        // Player canvas container.
        this.canvas = createCanvas(
            this.containerEl,
            this.dimensions.WIDTH,
            this.dimensions.HEIGHT,
            Runner.classes.PLAYER
        );
        this.canvasCtx = this.canvas.getContext('2d');
        this.canvasCtx.fillStyle = '#f7f7f7';
        this.canvasCtx.fill();

        Runner.updateCanvasScaling(this.canvas);
        // Horizon contains clouds, obstacles and the ground.
        this.horizon = new Horizon(
            this.canvas,
            this.spriteDef,
            this.dimensions,
            this.config.GAP_COEFFICIENT
        );
        // Distance meter
        this.distanceMeter = new DistanceMeter(
            this.canvas,
            this.spriteDef.TEXT_SPRITE,
            this.dimensions.WIDTH
        );

        // Draw t-rex
        this.tRexGroup = new TrexGroup(
            this.config.T_REX_COUNT,
            this.canvas,
            this.spriteDef.TREX
        );
        this.tRexGroup.onRunning = this.config.onRunning;
        this.tRexGroup.onCrash = this.config.onCrash;
        this.tRex = this.tRexGroup.tRexes[0];

        this.outerContainerEl.appendChild(this.containerEl);

        this.startListening();
        this.update();

        window.addEventListener(
            Runner.events.RESIZE,
            this.debounceResize.bind(this)
        );

        this.config.onReset({ tRexes: this.tRexGroup });
        this.tRex = this.tRexGroup.tRexes[0];

        // this.activated = true;
        // this.restart();
    }

    /**
     * Create the touch controller. A div that covers whole screen.
     */
    createTouchController() {
        this.touchController = document.createElement('div');
        this.touchController.className = Runner.classes.TOUCH_CONTROLLER;
        this.touchController.addEventListener(Runner.events.TOUCHSTART, this);
        this.touchController.addEventListener(Runner.events.TOUCHEND, this);
        this.outerContainerEl.appendChild(this.touchController);
    }

    /**
     * Debounce the resize event.
     */
    debounceResize() {
        if (!this.resizeTimerId_) {
            this.resizeTimerId_ = setInterval(
                this.adjustDimensions.bind(this),
                250
            );
        }
    }

    /**
     * Adjust game space dimensions on resize.
     */
    adjustDimensions() {
        clearInterval(this.resizeTimerId_);
        this.resizeTimerId_ = null;
        const boxStyles = window.getComputedStyle(this.outerContainerEl);
        const padding = Number(
            boxStyles.paddingLeft.substr(0, boxStyles.paddingLeft.length - 2)
        );
        this.dimensions.WIDTH = this.outerContainerEl.offsetWidth - padding * 2;
        if (this.isArcadeMode()) {
            this.dimensions.WIDTH = Math.min(
                DEFAULT_WIDTH,
                this.dimensions.WIDTH
            );
            if (this.activated) {
                this.setArcadeModeContainerScale();
            }
        }
        // Redraw the elements back onto the canvas.
        if (this.canvas) {
            this.canvas.width = this.dimensions.WIDTH;
            this.canvas.height = this.dimensions.HEIGHT;

            Runner.updateCanvasScaling(this.canvas);

            this.distanceMeter.calcXPos(this.dimensions.WIDTH);
            this.clearCanvas();
            this.horizon.update(0, 0, true);
            this.tRexGroup.update(0);
            // Outer container and distance meter.
            if (this.playing || this.crashed || this.paused) {
                this.containerEl.style.width = `${this.dimensions.WIDTH}px`;
                this.containerEl.style.height = `${this.dimensions.HEIGHT}px`;
                this.distanceMeter.update(0, Math.ceil(this.distanceRan));
                this.stop();
            } else {
                this.tRexGroup.draw(0, 0);
            }
            // Game over panel.
            if (this.crashed && this.gameOverPanel) {
                this.gameOverPanel.updateDimensions(this.dimensions.WIDTH);
                this.gameOverPanel.draw();
            }
        }
    }

    /**
     * Play the game intro.
     * Canvas container width expands out to the full width.
     */
    playIntro() {
        if (!this.activated && !this.crashed) {
            this.playingIntro = true;
            this.tRexGroup.playingIntro = true;
            // CSS animation definition.
            const keyframes = `@-webkit-keyframes intro { from { width:${
                Trex.config.WIDTH
            }px }to { width: ${this.dimensions.WIDTH}px }}`;
            document.styleSheets[0].insertRule(keyframes, 0);
            this.containerEl.addEventListener(
                Runner.events.ANIM_END,
                this.startGame.bind(this)
            );
            this.containerEl.style.webkitAnimation =
                'intro .4s ease-out 1 both';
            this.containerEl.style.width = `${this.dimensions.WIDTH}px`;
            this.setPlayStatus(true);
            this.activated = true;
        } else if (this.crashed) {
            this.restart();
        }
    }

    /**
     * Update the game status to started.
     */
    startGame() {
        if (this.isArcadeMode()) {
            this.setArcadeMode();
        }
        this.runningTime = 0;
        this.playingIntro = false;
        this.tRexGroup.playingIntro = false;
        this.containerEl.style.webkitAnimation = '';
        this.playCount++;
        // Handle tabbing off the page. Pause the current game.
        //   document.addEventListener(Runner.events.VISIBILITY,
        //         this.onVisibilityChange.bind(this));
        //   window.addEventListener(Runner.events.BLUR,
        //         this.onVisibilityChange.bind(this));
        //   window.addEventListener(Runner.events.FOCUS,
        //         this.onVisibilityChange.bind(this));
    }

    clearCanvas() {
        this.canvasCtx.clearRect(
            0,
            0,
            this.dimensions.WIDTH,
            this.dimensions.HEIGHT
        );
    }

    /**
     * Checks whether the canvas area is in the viewport of the browser
     * through the current scroll position.
     * @return boolean.
     */
    isCanvasInView() {
        return (
            this.containerEl.getBoundingClientRect().top >
            Runner.config.CANVAS_IN_VIEW_OFFSET
        );
    }

    /**
     * Update the game frame and schedules the next one.
     */
    update() {
        this.updatePending = false;
        const now = getTimeStamp();
        let deltaTime = now - (this.time || now);
        this.time = now;
        if (this.playing) {
            this.clearCanvas();

            this.tRexGroup.updateJump(deltaTime);

            this.runningTime += deltaTime;
            const hasObstacles = this.runningTime > this.config.CLEAR_TIME;

            // First jump triggers the intro.
            if (this.tRex.jumpCount == 1 && !this.playingIntro) {
                this.playIntro();
            }

            deltaTime = !this.activated ? 0 : deltaTime;
            this.horizon.update(
                deltaTime,
                this.currentSpeed,
                hasObstacles,
                this.inverted
            );

            let gameOver = false;
            // Check for collisions.
            if (hasObstacles) {
                gameOver = this.tRexGroup.checkForCollision(
                    this.horizon.obstacles[0]
                );
            }

            if (!gameOver) {
                this.distanceRan +=
                    (this.currentSpeed * deltaTime) / this.msPerFrame;

                if (this.currentSpeed < this.config.MAX_SPEED) {
                    this.currentSpeed += this.config.ACCELERATION;
                }
            } else {
                this.gameOver();
            }

            const playAchievementSound = this.distanceMeter.update(
                deltaTime,
                Math.ceil(this.distanceRan)
            );
            if (playAchievementSound) {
                this.playSound(this.soundFx.SCORE);
            }
            // Night mode.
            if (this.invertTimer > this.config.INVERT_FADE_DURATION) {
                this.invertTimer = 0;
                this.invertTrigger = false;
                this.invert();
            } else if (this.invertTimer) {
                this.invertTimer += deltaTime;
            } else {
                const actualDistance = this.distanceMeter.getActualDistance(
                    Math.ceil(this.distanceRan)
                );
                if (actualDistance > 0) {
                    this.invertTrigger = !(
                        actualDistance % this.config.INVERT_DISTANCE
                    );
                    if (this.invertTrigger && this.invertTimer === 0) {
                        this.invertTimer += deltaTime;
                        this.invert();
                    }
                }
            }
        }
        if (this.playing || !this.activated) {
            this.tRexGroup.update(deltaTime);
            this.scheduleNextUpdate();
        }

        const lives = this.tRexGroup.lives();
        if (lives > 0) {
            this.generationEl.innerText = `GENERATION #${
                this.generation
            } | LIVE x ${this.tRexGroup.lives()}`;
        } else {
            this.generationEl.innerHTML = `<div style="color: red;">GENERATION #${
                this.generation
            }  |  GAME OVER</div>`;
        }
    }

    /**
     * Event handler.
     */
    handleEvent(e) {
        return ((evtType, events) => {
            switch (evtType) {
                case events.KEYDOWN:
                case events.TOUCHSTART:
                case events.POINTERDOWN:
                    this.onKeyDown(e);
                    break;
                case events.KEYUP:
                case events.TOUCHEND:
                case events.POINTERUP:
                    this.onKeyUp(e);
                    break;
            }
        })(e.type, Runner.events);
    }

    /**
     * Bind relevant key / mouse / touch listeners.
     */
    startListening() {
        //   // Keys.
        document.addEventListener(Runner.events.KEYDOWN, this);
        document.addEventListener(Runner.events.KEYUP, this);
        // Touch / pointer.
        this.containerEl.addEventListener(Runner.events.TOUCHSTART, this);
        document.addEventListener(Runner.events.POINTERDOWN, this);
        document.addEventListener(Runner.events.POINTERUP, this);
    }

    /**
     * Remove all listeners.
     */
    stopListening() {
        //   document.removeEventListener(Runner.events.KEYDOWN, this);
        //   document.removeEventListener(Runner.events.KEYUP, this);
        //   if (this.touchController) {
        //     this.touchController.removeEventListener(Runner.events.TOUCHSTART, this);
        //     this.touchController.removeEventListener(Runner.events.TOUCHEND, this);
        //   }
        //   this.containerEl.removeEventListener(Runner.events.TOUCHSTART, this);
        //   document.removeEventListener(Runner.events.POINTERDOWN, this);
        //   document.removeEventListener(Runner.events.POINTERUP, this);
    }

    /**
     * Process keydown.
     * @param {Event} e
     */
    onKeyDown(e) {
        // Prevent native page scrolling whilst tapping on mobile.
        if (IS_MOBILE && this.playing) {
            e.preventDefault();
        }
        if (this.isCanvasInView()) {
            if (!this.crashed && !this.paused) {
                if (
                    Runner.keycodes.JUMP[e.keyCode] ||
                    e.type == Runner.events.TOUCHSTART
                ) {
                    e.preventDefault();
                    // Starting the game for the first time.
                    if (!this.playing) {
                        // Started by touch so create a touch controller.
                        if (
                            !this.touchController &&
                            e.type == Runner.events.TOUCHSTART
                        ) {
                            this.createTouchController();
                        }
                        this.loadSounds();
                        this.setPlayStatus(true);
                        this.update();
                        if (window.errorPageController) {
                            errorPageController.trackEasterEgg();
                        }
                    }
                    // Start jump.
                    if (!this.tRex.jumping && !this.tRex.ducking) {
                        this.playSound(this.soundFx.BUTTON_PRESS);
                        this.tRex.startJump(this.currentSpeed);
                    }
                } else if (this.playing && Runner.keycodes.DUCK[e.keyCode]) {
                    e.preventDefault();
                    if (this.tRex.jumping) {
                        // Speed drop, activated only when jump key is not pressed.
                        this.tRex.setSpeedDrop();
                    } else if (!this.tRex.jumping && !this.tRex.ducking) {
                        // Duck.
                        this.tRex.setDuck(true);
                    }
                }
                // iOS only triggers touchstart and no pointer events.
            } else if (
                IS_IOS &&
                this.crashed &&
                e.type == Runner.events.TOUCHSTART &&
                e.currentTarget == this.containerEl
            ) {
                this.handleGameOverClicks(e);
            }
        }
    }

    /**
     * Process key up.
     * @param {Event} e
     */
    onKeyUp(e) {
        const keyCode = String(e.keyCode);
        const isjumpKey =
            Runner.keycodes.JUMP[keyCode] ||
            e.type == Runner.events.TOUCHEND ||
            e.type == Runner.events.POINTERUP;
        if (this.isRunning() && isjumpKey) {
            this.tRex.endJump();
        } else if (Runner.keycodes.DUCK[keyCode]) {
            this.tRex.speedDrop = false;
            this.tRex.setDuck(false);
        } else if (this.crashed) {
            // Check that enough time has elapsed before allowing jump key to restart.
            const deltaTime = getTimeStamp() - this.time;
            if (
                this.isCanvasInView() &&
                (Runner.keycodes.RESTART[keyCode] ||
                    this.isLeftClickOnCanvas(e) ||
                    (deltaTime >= this.config.GAMEOVER_CLEAR_TIME &&
                        Runner.keycodes.JUMP[keyCode]))
            ) {
                this.handleGameOverClicks(e);
            }
        } else if (this.paused && isjumpKey) {
            // Reset the jump state
            this.tRex.reset();
            this.play();
        }
    }

    /**
     * Handle interactions on the game over screen state.
     * A user is able to tap the high score twice to reset it.
     * @param {Event} e
     */
    handleGameOverClicks(e) {
        e.preventDefault();
        if (this.distanceMeter.hasClickedOnHighScore(e) && this.highestScore) {
            if (this.distanceMeter.isHighScoreFlashing()) {
                // Subsequent click, reset the high score.
                this.saveHighScore(0, true);
                this.distanceMeter.resetHighScore();
            } else {
                // First click, flash the high score.
                this.distanceMeter.startHighScoreFlashing();
            }
        } else {
            this.distanceMeter.cancelHighScoreFlashing();
            this.restart();
        }
    }

    /**
     * Returns whether the event was a left click on canvas.
     * On Windows right click is registered as a click.
     * @param {Event} e
     * @return {boolean}
     */
    isLeftClickOnCanvas({ button, type, target }) {
        return (
            button != null &&
            button < 2 &&
            type == Runner.events.POINTERUP &&
            target == this.canvas
        );
    }

    /**
     * RequestAnimationFrame wrapper.
     */
    scheduleNextUpdate() {
        if (!this.updatePending) {
            this.updatePending = true;
            this.raqId = requestAnimationFrame(this.update.bind(this));
        }
    }

    /**
     * Whether the game is running.
     * @return {boolean}
     */
    isRunning() {
        return !!this.raqId;
    }

    /**
     * Set the initial high score as stored in the user's profile.
     * @param {integer} highScore
     */
    initializeHighScore(highScore) {
        this.syncHighestScore = true;
        highScore = Math.ceil(highScore);
        if (highScore < this.highestScore) {
            if (window.errorPageController) {
                errorPageController.updateEasterEggHighScore(this.highestScore);
            }
            return;
        }
        this.highestScore = highScore;
        this.distanceMeter.setHighScore(this.highestScore);
    }

    /**
     * Sets the current high score and saves to the profile if available.
     * @param {number} distanceRan Total distance ran.
     * @param {boolean} opt_resetScore Whether to reset the score.
     */
    saveHighScore(distanceRan, opt_resetScore) {
        this.highestScore = Math.ceil(distanceRan);
        this.distanceMeter.setHighScore(this.highestScore);
        // Store the new high score in the profile.
        if (this.syncHighestScore && window.errorPageController) {
            if (opt_resetScore) {
                errorPageController.resetEasterEggHighScore();
            } else {
                errorPageController.updateEasterEggHighScore(this.highestScore);
            }
        }
    }

    /**
     * Game over state.
     */
    gameOver() {
        this.playSound(this.soundFx.HIT);
        //   vibrate(200);
        this.stop();
        this.crashed = true;
        this.distanceMeter.achievement = false;

        this.tRexGroup.update(100, Trex.status.CRASHED);

        // Game over panel.
        //   if (!this.gameOverPanel) {
        //     this.gameOverPanel = new GameOverPanel(this.canvas,
        //         this.spriteDef.TEXT_SPRITE, this.spriteDef.RESTART,
        //         this.dimensions);
        //   } else {
        //     this.gameOverPanel.draw();
        //   }
        // Update the high score.
        if (this.distanceRan > this.highestScore) {
            this.saveHighScore(this.distanceRan);
        }
        // Reset the time clock.
        this.time = getTimeStamp();

        setTimeout(() => {
            this.restart();
            // this.play();
        }, 500);
    }

    stop() {
        this.setPlayStatus(false);
        this.paused = true;
        cancelAnimationFrame(this.raqId);
        this.raqId = 0;
    }

    play() {
        if (!this.crashed) {
            this.setPlayStatus(true);
            this.paused = false;
            this.tRexGroup.update(0, Trex.status.RUNNING);
            this.time = getTimeStamp();
            this.update();
        }
    }

    restart() {
        this.generation++;

        if (!this.raqId) {
            this.playCount++;
            this.runningTime = 0;
            this.setPlayStatus(true);
            this.paused = false;
            this.crashed = false;
            this.distanceRan = 0;
            this.setSpeed(this.config.SPEED);
            this.time = getTimeStamp();
            this.containerEl.classList.remove(Runner.classes.CRASHED);
            this.clearCanvas();
            this.distanceMeter.reset(this.highestScore);
            this.horizon.reset();
            this.tRexGroup.reset();
            this.config.onReset({ tRexes: this.tRexGroup });

            this.playSound(this.soundFx.BUTTON_PRESS);
            this.invert(true);
            this.bdayFlashTimer = null;
            this.update();
        }
    }

    setPlayStatus(isPlaying) {
        if (this.touchController)
            this.touchController.classList.toggle('hidden', !isPlaying);
        this.playing = isPlaying;
    }

    /**
     * Whether the game should go into arcade mode.
     * @return {boolean}
     */
    isArcadeMode() {
        return false;
    }

    /**
     * Hides offline messaging for a fullscreen game only experience.
     */
    setArcadeMode() {
        document.body.classList.add(Runner.classes.ARCADE_MODE);
        this.setArcadeModeContainerScale();
    }

    /**
     * Sets the scaling for arcade mode.
     */
    setArcadeModeContainerScale() {
        const windowHeight = window.innerHeight;
        const scaleHeight = windowHeight / this.dimensions.HEIGHT;
        const scaleWidth = window.innerWidth / this.dimensions.WIDTH;
        const scale = Math.max(1, Math.min(scaleHeight, scaleWidth));
        const scaledCanvasHeight = this.dimensions.HEIGHT * scale;
        // Positions the game container at 10% of the available vertical window
        // height minus the game container height.
        const translateY =
            Math.ceil(
                Math.max(
                    0,
                    (windowHeight -
                        scaledCanvasHeight -
                        Runner.config.ARCADE_MODE_INITIAL_TOP_POSITION) *
                        Runner.config.ARCADE_MODE_TOP_POSITION_PERCENT
                )
            ) * window.devicePixelRatio;
        this.containerEl.style.transform = `scale(${scale}) translateY(${translateY}px)`;
    }

    /**
     * Pause the game if the tab is not in focus.
     */
    onVisibilityChange({ type }) {
        if (
            document.hidden ||
            document.webkitHidden ||
            type == 'blur' ||
            document.visibilityState != 'visible'
        ) {
            this.stop();
        } else if (!this.crashed) {
            this.tRexGroup.reset();
            this.play();
        }
    }

    /**
     * Play a sound.
     * @param {SoundBuffer} soundBuffer
     */
    playSound(soundBuffer) {
        if (soundBuffer) {
            const sourceNode = this.audioContext.createBufferSource();
            sourceNode.buffer = soundBuffer;
            sourceNode.connect(this.audioContext.destination);
            sourceNode.start(0);
        }
    }

    /**
     * Inverts the current page / canvas colors.
     * @param {boolean} Whether to reset colors.
     */
    invert(reset) {
        if (reset) {
            document.body.classList.toggle(Runner.classes.INVERTED, false);
            this.invertTimer = 0;
            this.inverted = false;
        } else {
            this.inverted = document.body.classList.toggle(
                Runner.classes.INVERTED,
                this.invertTrigger
            );
        }
    }

    /**
     * Default game configuration.
     * @enum {number}
     */
    static config = {
        ACCELERATION: 0.005,
        BG_CLOUD_SPEED: 0.2,
        BOTTOM_PAD: 10,
        // Scroll Y threshold at which the game can be activated.
        CANVAS_IN_VIEW_OFFSET: -10,
        CLEAR_TIME: 100,
        CLOUD_FREQUENCY: 0.5,
        GAMEOVER_CLEAR_TIME: 750,
        GAP_COEFFICIENT: 0.6,
        GRAVITY: 0.6,
        INITIAL_JUMP_VELOCITY: 12,
        INVERT_FADE_DURATION: 12000,
        INVERT_DISTANCE: 700,
        MAX_BLINK_COUNT: 3,
        MAX_CLOUDS: 6,
        MAX_OBSTACLE_LENGTH: 3,
        MAX_OBSTACLE_DUPLICATION: 2,
        MAX_SPEED: 13,
        MIN_JUMP_HEIGHT: 35,
        MOBILE_SPEED_COEFFICIENT: 1.2,
        RESOURCE_TEMPLATE_ID: 'audio-resources',
        SPEED: 6,
        SPEED_DROP_COEFFICIENT: 3,
        ARCADE_MODE_INITIAL_TOP_POSITION: 35,
        ARCADE_MODE_TOP_POSITION_PERCENT: 0.1,
        // Events
        onReset: noop,
        onRunning: noop,
        onCrash: noop
    };
    /**
     * Default dimensions.
     * @enum {string}
     */
    static defaultDimensions = {
        WIDTH: DEFAULT_WIDTH,
        HEIGHT: 150
    };
    /**
     * CSS class names.
     * @enum {string}
     */
    static classes = {
        ARCADE_MODE: 'arcade-mode',
        CANVAS: 'runner-canvas',
        CONTAINER: 'runner-container',
        CRASHED: 'crashed',
        ICON: 'icon-offline',
        INVERTED: 'inverted',
        SNACKBAR: 'snackbar',
        SNACKBAR_SHOW: 'snackbar-show',
        TOUCH_CONTROLLER: 'controller'
    };
    /**
     * Sprite definition layout of the spritesheet.
     * @enum {Object}
     */
    static spriteDefinition = {
        LDPI: {
            CACTUS_LARGE: { x: 332, y: 2 },
            CACTUS_SMALL: { x: 228, y: 2 },
            CLOUD: { x: 86, y: 2 },
            HORIZON: { x: 2, y: 54 },
            MOON: { x: 484, y: 2 },
            PTERODACTYL: { x: 134, y: 2 },
            RESTART: { x: 2, y: 2 },
            TEXT_SPRITE: { x: 655, y: 2 },
            TREX: { x: 848, y: 2 },
            STAR: { x: 645, y: 2 }
        },
        HDPI: {
            CACTUS_LARGE: { x: 652, y: 2 },
            CACTUS_SMALL: { x: 446, y: 2 },
            CLOUD: { x: 166, y: 2 },
            HORIZON: { x: 2, y: 104 },
            MOON: { x: 954, y: 2 },
            PTERODACTYL: { x: 260, y: 2 },
            RESTART: { x: 2, y: 2 },
            TEXT_SPRITE: { x: 1294, y: 2 },
            TREX: { x: 1678, y: 2 },
            STAR: { x: 1276, y: 2 }
        }
    };
    /**
     * Sound FX. Reference to the ID of the audio tag on interstitial page.
     * @enum {string}
     */
    static sounds = {
        BUTTON_PRESS: 'offline-sound-press',
        HIT: 'offline-sound-hit',
        SCORE: 'offline-sound-reached'
    };
    /**
     * Key code mapping.
     * @enum {Object}
     */
    static keycodes = {
        JUMP: { '38': 1, '32': 1 }, // Up, spacebar
        DUCK: { '40': 1 }, // Down
        RESTART: { '13': 1 } // Enter
    };
    /**
     * Runner event names.
     * @enum {string}
     */
    static events = {
        ANIM_END: 'webkitAnimationEnd',
        CLICK: 'click',
        KEYDOWN: 'keydown',
        KEYUP: 'keyup',
        POINTERDOWN: 'pointerdown',
        POINTERUP: 'pointerup',
        RESIZE: 'resize',
        TOUCHEND: 'touchend',
        TOUCHSTART: 'touchstart',
        VISIBILITY: 'visibilitychange',
        BLUR: 'blur',
        FOCUS: 'focus',
        LOAD: 'load'
    };
    /**
     * Updates the canvas size taking into
     * account the backing store pixel ratio and
     * the device pixel ratio.
     *
     * See article by Paul Lewis:
     * http://www.html5rocks.com/en/tutorials/canvas/hidpi/
     *
     * @param {HTMLCanvasElement} canvas
     * @param {number} opt_width
     * @param {number} opt_height
     * @return {boolean} Whether the canvas was scaled.
     */
    static updateCanvasScaling = (canvas, opt_width, opt_height) => {
        const context = canvas.getContext('2d');
        // Query the various pixel ratios
        const devicePixelRatio = Math.floor(window.devicePixelRatio) || 1;
        const backingStoreRatio =
            Math.floor(context.webkitBackingStorePixelRatio) || 1;
        const ratio = devicePixelRatio / backingStoreRatio;
        // Upscale the canvas if the two ratios don't match
        if (devicePixelRatio !== backingStoreRatio) {
            const oldWidth = opt_width || canvas.width;
            const oldHeight = opt_height || canvas.height;
            canvas.width = oldWidth * ratio;
            canvas.height = oldHeight * ratio;
            canvas.style.width = `${oldWidth}px`;
            canvas.style.height = `${oldHeight}px`;
            // Scale the context to counter the fact that we've manually scaled
            // our canvas element.
            context.scale(ratio, ratio);
            return true;
        } else if (devicePixelRatio == 1) {
            // Reset the canvas width / height. Fixes scaling bug when the page is
            // zoomed and the devicePixelRatio changes accordingly.
            canvas.style.width = `${canvas.width}px`;
            canvas.style.height = `${canvas.height}px`;
        }
        return false;
    };
}
