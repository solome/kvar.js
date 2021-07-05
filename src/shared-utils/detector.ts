/**
 * 检测浏览器特性(HTML5)的支持程度
 */

/* tslint:disable: no-string-literal */
export const canWebGL: boolean = (() => {
  const canvas = document.createElement('canvas')
  try {
    return !!(
      window['WebGLRenderingContext'] &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch (error) {
    return false
  }
})()
/* tslint:enable: no-string-literal */

export const checkPushState = (history: History) =>
  typeof history !== 'undefined' &&
  'pushState' in history &&
  'replaceState' in history &&
  'state' in history

export const canPushState: boolean = checkPushState(window.history)

export const checkMobile = (ua: string) =>
  !!(
    ua.match(/android/i) ||
    ua.match(/webos/i) ||
    ua.match(/ipad|iphone|ipod/i) ||
    ua.match(/iemobile/i) ||
    ua.match(/opera mini/i) ||
    ua.match(/blackberry/i) ||
    ua.match(/windows phone/i)
  )

export const isMobile: boolean = checkMobile(navigator.userAgent.toLowerCase())
