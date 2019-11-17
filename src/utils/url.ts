export function isAbsoluteURL (url: string): boolean {
  return (
    url.startsWith('https://') ||
    url.startsWith('http://') ||
    url.startsWith('//')
  )
}
