//
// 常用的数组操作。
// 其实
//  - https://underscorejs.org/
//  - https://lodash.com/
// 等开源领域均有类似实现、具体业务场景需要可以进行参考。
//

const defaultIterator = (item: any) => item
const compare4Max = (left: number, right: number) => left < right
const compare4Min = (left: number, right: number) => left > right

const find = (
  array: any[],
  iterator = defaultIterator,
  compare = compare4Max,
  needResult = false,
) => {
  if (array.length === 0) {
    return [null, null]
  }
  if (array.length === 1) {
    return [array[0], iterator(array[0])]
  }

  const [item, result, p] = array.reduce((acc: any[], cur: any) => {
    const newResult = iterator(cur)
    if (acc && !acc.length) {
      return [cur, newResult]
    }
    const oldResult = acc[1]
    return compare(oldResult, newResult) ? [cur, newResult] : acc
  })

  return needResult ? [item, result] : item
}

/**
 * 获取数组中的计算后的最小值
 * @param  {array}    array
 * @param  {function} iterator 计算方法
 * @param  {boolean}  needResult 是否需要计算结果
 */
export const min = (
  array: any[],
  iterator = defaultIterator,
  needResult: boolean = false,
) => find(array, iterator, compare4Min, needResult)

/**
 * 获取数组中的计算后的最大值
 * @param  {array}    array
 * @param  {function} iterator 计算方法
 * @param  {boolean}  needResult 是否需要计算结果
 */
export const max = (
  array: any[],
  iterator = defaultIterator,
  needResult: boolean = false,
) => find(array, iterator, compare4Max, needResult)

export interface XYZ {
  x: number
  y: number
  z: number
}

/**
 * 数组转 xyz 坐标
 * @param array 数组(至少3个元素)
 */
export const arrayToXYZ = (array: any[]): XYZ => {
  if (!array || !array.length || array.length < 3) {
    throw new Error('IllegalArgumentException')
  }
  return { x: array[0], y: array[1], z: array[2] }
}

/**
 * xyz坐标转数组
 * @param xyz 坐标值
 */
export const XYZToArray = (xyz: XYZ) => [xyz.x, xyz.y, xyz.z]
