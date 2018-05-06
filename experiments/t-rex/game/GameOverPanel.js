/**
 * Game over panel.
 * @param {!HTMLCanvasElement} canvas
 * @param {Object} textImgPos
 * @param {Object} restartImgPos
 * @param {!Object} dimensions Canvas dimensions.
 * @constructor
 */
export default class GameOverPanel {
    constructor(canvas, textImgPos, restartImgPos, dimensions) {
        this.canvas = canvas;
        this.canvasCtx = canvas.getContext('2d');
        this.canvasDimensions = dimensions;
        this.textImgPos = textImgPos;
        this.restartImgPos = restartImgPos;
        this.draw();
    }
    /**
     * Dimensions used in the panel.
     * @enum {number}
     */
    static dimensions = {
        TEXT_X: 0,
        TEXT_Y: 13,
        TEXT_WIDTH: 191,
        TEXT_HEIGHT: 11,
        RESTART_WIDTH: 36,
        RESTART_HEIGHT: 32
    };

    /**
     * Update the panel dimensions.
     * @param {number} width New canvas width.
     * @param {number} opt_height Optional new canvas height.
     */
    updateDimensions(width, opt_height) {
        this.canvasDimensions.WIDTH = width;
        if (opt_height) {
            this.canvasDimensions.HEIGHT = opt_height;
        }
    }

    /**
     * Draw the panel.
     */
    draw() {
        const dimensions = GameOverPanel.dimensions;
        const centerX = this.canvasDimensions.WIDTH / 2;
        // Game over text.
        let textSourceX = dimensions.TEXT_X;
        let textSourceY = dimensions.TEXT_Y;
        let textSourceWidth = dimensions.TEXT_WIDTH;
        let textSourceHeight = dimensions.TEXT_HEIGHT;
        const textTargetX = Math.round(centerX - dimensions.TEXT_WIDTH / 2);
        const textTargetY = Math.round((this.canvasDimensions.HEIGHT - 25) / 3);
        const textTargetWidth = dimensions.TEXT_WIDTH;
        const textTargetHeight = dimensions.TEXT_HEIGHT;
        let restartSourceWidth = dimensions.RESTART_WIDTH;
        let restartSourceHeight = dimensions.RESTART_HEIGHT;
        const restartTargetX = centerX - dimensions.RESTART_WIDTH / 2;
        const restartTargetY = this.canvasDimensions.HEIGHT / 2;
        if (IS_HIDPI) {
            textSourceY *= 2;
            textSourceX *= 2;
            textSourceWidth *= 2;
            textSourceHeight *= 2;
            restartSourceWidth *= 2;
            restartSourceHeight *= 2;
        }
        textSourceX += this.textImgPos.x;
        textSourceY += this.textImgPos.y;
        // Game over text from sprite.
        this.canvasCtx.drawImage(
            Runner.imageSprite,
            textSourceX,
            textSourceY,
            textSourceWidth,
            textSourceHeight,
            textTargetX,
            textTargetY,
            textTargetWidth,
            textTargetHeight
        );
        // Restart button.
        this.canvasCtx.drawImage(
            Runner.imageSprite,
            this.restartImgPos.x,
            this.restartImgPos.y,
            restartSourceWidth,
            restartSourceHeight,
            restartTargetX,
            restartTargetY,
            dimensions.RESTART_WIDTH,
            dimensions.RESTART_HEIGHT
        );
    }
}
