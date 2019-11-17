import noop from '../utils/noop'

const empty = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
const imageTypeArray = [ 'right', 'left', 'up', 'down', 'front', 'back' ]
const imagePool = []

function prepareImage (image) {
  image.onload = image.onerror = noop
  image.crossOrigin = ''
  image.removeAttribute('src')
  return image
}

function getImage () {
  if (imagePool.length) {
    return prepareImage(imagePool.shift())
  } else {
    return prepareImage(new Image())
  }
}

function disposeImage (image) {
  imagePool.push(prepareImage(image))
}
