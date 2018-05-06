import Runner from './Runner';
import Trex, { checkForCollision } from './Trex';

export default class TrexGroup {
    onReset = noop;
    onRunning = noop;
    onCrash = noop;

    constructor(count, canvas, spriteDef) {
        this.canvas = canvas;
        this.spriteDef = spriteDef;
        this.spawn(count);
    }

    spawn(count) {
        this.tRexes = [];
        for (let i = 0; i < count; i += 1) {
            const tRex = new Trex(this.canvas, this.spriteDef);
            tRex.id = i;
            this.tRexes.push(tRex);
        }
    }

    update(deltaTime, status) {
        this.tRexes.forEach(tRex => {
            if (!tRex.crashed) {
                tRex.update(deltaTime, status);
            }
        });
    }

    draw(x, y) {
        this.tRexes.forEach(tRex => {
            if (!tRex.crashed) {
                tRex.draw(x, y);
            }
        });
    }

    updateJump(deltaTime, speed) {
        this.tRexes.forEach(tRex => {
            if (tRex.jumping) {
                tRex.updateJump(deltaTime, speed);
            }
        });
    }

    reset() {
        this.tRexes.forEach(tRex => {
            tRex.reset();
            this.onReset({ tRex });
        });
    }

    lives() {
        return this.tRexes.reduce(
            (count, tRex) => (tRex.crashed ? count : count + 1),
            0
        );
    }

    set playingIntro(value) {
        this.tRexes.forEach(tRex => {
            tRex.playingIntro = value;
        });
    }

    checkForCollision(obstacle) {
        let crashes = 0;
        this.tRexes.forEach(async tRex => {
            const state = {
                distance: obstacle.xPos - tRex.xPos,
                obstacleX: obstacle.xPos,
                obstacleY: obstacle.yPos,
                obstacleWidth: obstacle.width,
                obstacleHeight: obstacle.height,
                speed: Runner.instance_.currentSpeed
            };
            if (!tRex.crashed) {
                const result = checkForCollision(obstacle, tRex);
                if (result) {
                    crashes += 1;
                    tRex.crashed = true;
                    this.onCrash({ tRex, state, collision: result });
                } else {
                    const [jump, duck] = await this.onRunning({ tRex, state });

                    if (jump) {
                        if (!tRex.jumping && !tRex.ducking) {
                            if (tRex.ducking) tRex.setDuck(false);
                            tRex.startJump(state.speed);
                        }
                    } else if (duck) {
                        if (tRex.jumping) {
                            // Speed drop, activated only when jump key is not pressed.
                            tRex.setSpeedDrop();
                        } else if (!tRex.jumping && !tRex.ducking) {
                            // Duck.
                            tRex.setDuck(true);
                        }
                    } else {
                        if (tRex.ducking) {
                            tRex.speedDrop = false;
                            tRex.setDuck(false);
                        }
                        if (tRex.jumping) tRex.endJump();
                    }
                }
            } else {
                crashes += 1;
            }
        });
        return crashes === this.tRexes.length;
    }
}

function noop() {}
