var joi = require('joi');

const createSchema = joi.object({
    username:joi.string().email().min(6).max(29).required().messages({
      'string.empty': 'username display name cannot be empty',
      'string.min': 'username min 6 characters',
      'string.max': 'username max 29 characters',
      'string.required': 'username required',
      'any.only': 'username must be a valid email address'
    }),
    password:joi.string().min(6).max(29).regex(/^[a-z]/).required().messages({
        'string.empty': 'password display name cannot be empty',
        'string.min': 'password min 6 characters',
        'string.max': 'password max 29 characters',
        'string.required': 'password required'
      })
    })

module.exports = {createSchema}