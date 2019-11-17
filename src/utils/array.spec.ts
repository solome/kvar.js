import { max, min, arrayToXYZ, XYZToArray } from './array'

describe('array utils', () => {
  const array: number[] = [32, 34, 12, 43, 63, 11, 99, 13]

  test('max & min', () => {
    expect(max(array, (item) => 2 * item, true)).toEqual([99, 198])
    expect(min(array, (item) => 2 * item, true)).toEqual([11, 22])
  })

  test('xyz <=> array', () => {
    expect(arrayToXYZ([1, 2, 4])).toEqual({ x: 1, y: 2, z: 4 })
    expect(XYZToArray({ x: 0.434, y: 2.4343, z: 3.14 })).toEqual([
      0.434,
      2.4343,
      3.14,
    ])
  })
})
