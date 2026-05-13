import { describe, it, expect } from 'bun:test'
import {
  ValidationError,
  EmailError,
  testValidationError,
  testEmailError,
} from './index.js'

describe('Custom Error Classes', () => {
  it('should create a ValidationError with correct name and message', () => {
    const error = new ValidationError('Test validation error')
    expect(error.name).toBe('ValidationError')
    expect(error.message).toBe('Test validation error')
    expect(error instanceof Error).toBe(true)
    expect(error instanceof ValidationError).toBe(true)
  })

  it('should create an EmailError with correct name and message', () => {
    const error = new EmailError('Invalid email')
    expect(error.name).toBe('EmailError')
    expect(error.message).toBe('Invalid email')
    expect(error instanceof Error).toBe(true)
    expect(error instanceof EmailError).toBe(true)
  })

  it('should throw ValidationError from testValidationError function', () => {
    expect(() => testValidationError()).toThrow(ValidationError)
    expect(() => testValidationError()).toThrow('Whoops!')
  })

  it('should throw EmailError from testEmailError function', () => {
    expect(() => testEmailError()).toThrow(EmailError)
    expect(() => testEmailError()).toThrow('Invalid email format')
  })

  it('should catch ValidationError correctly', () => {
    let caught = false
    let errorDetails = {}

    try {
      testValidationError()
    } catch (error) {
      caught = true
      errorDetails = { name: error.name, message: error.message }
    }

    expect(caught).toBe(true)
    expect(errorDetails.name).toBe('ValidationError')
    expect(errorDetails.message).toBe('Whoops!')
  })

  it('should catch EmailError correctly', () => {
    let caught = false
    let errorDetails = {}
    let finallyRan = false

    try {
      testEmailError()
    } catch (error) {
      caught = true
      errorDetails = { name: error.name, message: error.message }
    } finally {
      finallyRan = true
    }

    expect(caught).toBe(true)
    expect(errorDetails.name).toBe('EmailError')
    expect(errorDetails.message).toBe('Invalid email format')
    expect(finallyRan).toBe(true)
  })
})
