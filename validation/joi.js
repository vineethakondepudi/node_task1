let Joi = require('joi')


let createUserSchema = Joi.object().keys({
  Firstname: Joi.string().min(3).max(10).required(true),
  Lastname: Joi.string().min(3).max(10).required(),
  Email: Joi.string().email().required(),
  Mobile_num: Joi.number().integer().min(100000000).required()
}) 

// .pattern(internals.nameRx)

module.exports = {
  createUserSchema
}
