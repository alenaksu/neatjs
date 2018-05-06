/**
 * Default game canvas size.
 */
export const CANVAS_WIDTH = 600;
export const CANVAS_HEIGHT = 150;

/**
 * Runner configs
 */
export const RUNNER_BOTTOM_PAD = 10;
export const RUNNER_MAX_OBSTACLE_DUPLICATION = 2;

/** @const */
export const IS_HIDPI = window.devicePixelRatio > 1;
/** @const */
export const IS_IOS = /iPad|iPhone|iPod/.test(window.navigator.platform);
/** @const */
export const IS_MOBILE = /Android/.test(window.navigator.userAgent) || IS_IOS;

/**
 * Default game width.
 * @const
 */
export const DEFAULT_WIDTH = 600;
/**
 * Frames per second.
 * @const
 */
export const FPS = 60;
/** @const */
export const ARCADE_MODE_URL = 'chrome://dino/';
