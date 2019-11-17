import { Vector3, Matrix4 } from 'three'

const __ = (type, value) => ({ type, value })

export default {
  map:               __('t',  null),
  modelAlpha:        __('f',  0),
  opacity:           __('f',  1),
  progress:          __('f',  0),
  blackProgress:     __('f',  0),
  blackTransition:   __('i',  0),
  pano0Map:          __('t',  null),
  pano0Position:     __('v3', new Vector3()),
  pano0Matrix:       __('m4', new Matrix4()),
  pano1Map:          __('t',  null),
  pano1Position:     __('v3', new Vector3()),
  pano1Matrix:       __('m4', new Matrix4())
}