//
// 数学相关操作函数。
//

/**
 * 将字符串转换成数字类型
 * @param maybeNumber 预转换的对象
 */
export function toNumber (maybeNumber: any): number {
  const num: number = parseFloat(maybeNumber)
  return isNaN(num) ? 0 : num
}
