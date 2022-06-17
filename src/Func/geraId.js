export function geraId() {
  return Math.floor(Date.now() * Math.random()).toString(36)
}