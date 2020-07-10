export class NotStringError extends Error {
  constructor (message) {
    super(message)
    this.name = 'NotStringError'
  }
}
