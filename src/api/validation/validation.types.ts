export type Schema = Record<string, Validator>

export type Validator = {
  (value: unknown): boolean
  required?: boolean
}

export type Types = 'string' | 'number' | 'boolean'
export type TypeValidators = Record<Types, Validator>

export type ValidationItem = [string, boolean, ...boolean[]]
export type SchemaEntry = [string, Validator]
