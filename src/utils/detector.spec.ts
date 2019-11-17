/**
 * @jest-environment jsdom
 */

import { checkMobile, canWebGL, canPushState } from './detector'

describe('Browser detector', () => {
  test('webGL', () => {
    expect(canWebGL).toBe(false)
  })
  test('pushState', () => {
    expect(canPushState).toBe(true)
  })
})

test('check Mobile browser user by `userAgent` string', () => {
  expect(
    checkMobile(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
    ),
  ).toBe(false)
})
