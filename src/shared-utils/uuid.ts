// uuid
function S4 (): string {
  /* tslint:disable: no-bitwise */
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  /* tslint:enable: no-bitwise */
}

export default function createUuid (): string {
  // then to call it, plus stitch in '4' in the third group
  return (S4() + S4() + '-' + S4() + '-4' + S4().substr(0, 3) +
    '-' + S4() + '-' + S4() + S4() + S4()).toLowerCase()
}

export function timestamp (): string {
  return performance.now().toString(16).toUpperCase()
}
