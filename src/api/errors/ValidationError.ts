export class ValidationError extends Error {
  readonly errors: string[];

  constructor (
    message: string,
    errors: string[],
  ) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errors = errors;
  }

  toString () {
    return `${this.name}: ${this.message}\n• ${this.errors.join('\n• ')}`;
  }
}
