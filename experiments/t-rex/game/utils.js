import { IS_MOBILE, IS_IOS } from './constants';

/**
 * Get random number.
 * @param {number} min
 * @param {number} max
 * @param {number}
 */
export function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Vibrate on mobile devices.
 * @param {number} duration Duration of the vibration in milliseconds.
 */
export function vibrate(duration) {
    if (IS_MOBILE && window.navigator.vibrate) {
        window.navigator.vibrate(duration);
    }
}
/**
 * Create canvas element.
 * @param {HTMLElement} container Element to append canvas to.
 * @param {number} width
 * @param {number} height
 * @param {string} opt_classname
 * @return {HTMLCanvasElement}
 */
export function createCanvas(container, width, height, opt_classname) {
    const canvas = document.createElement('canvas');
    canvas.className = opt_classname
        ? `${Runner.classes.CANVAS} ${opt_classname}`
        : Runner.classes.CANVAS;
    canvas.width = width;
    canvas.height = height;
    container.appendChild(canvas);
    return canvas;
}
/**
 * Decodes the base 64 audio to ArrayBuffer used by Web Audio.
 * @param {string} base64String
 */
export function decodeBase64ToArrayBuffer(base64String) {
    const len = (base64String.length / 4) * 3;
    const str = atob(base64String);
    const arrayBuffer = new ArrayBuffer(len);
    const bytes = new Uint8Array(arrayBuffer);
    for (let i = 0; i < len; i++) {
        bytes[i] = str.charCodeAt(i);
    }
    return bytes.buffer;
}
/**
 * Return the current timestamp.
 * @return {number}
 */
export function getTimeStamp() {
    return IS_IOS ? new Date().getTime() : performance.now();
}

export const noop = () => {};
