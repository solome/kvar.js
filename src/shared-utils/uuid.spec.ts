import uuid from './uuid'

test('uuid', () => {
  expect(uuid().length).toEqual(36)
})
