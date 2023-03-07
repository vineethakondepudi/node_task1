var joi = require('joi');
const createSchemaGet = joi.object({
    carname:joi.string().valid('Benz','Audi','lamborghini').required().messages({
      'string.empty': 'carname display name cannot be empty',
      'string.min': 'carname min 6 characters',
      'string.max': 'carname max 29 characters',
      'string.required': 'carname required'
    })
})
const createSchemaPost = joi.object({
    carname:joi.string().valid('Benz','Audi','lamborghini').allow(null).required().messages({
      'string.empty': 'carname display name cannot be empty',
      'string.min': 'carname min 6 characters',
      'string.max': 'carname max 29 characters',
      'string.required': 'carname required'
    }),
    car_price:joi.when('carname',{is: joi.string().valid( 'Benz'),then:joi.valid('Rs. 42.25 Lakh'),otherwise:joi.valid('others')}).required(),
    car_price:joi.when('carname',{is: joi.string().valid( 'Audi'),then:joi.valid('Rs. 43.85 Lakh'),otherwise:joi.valid('others')}).required(),
    car_price:joi.when('carname',{is: joi.string().valid('lamborghini'),then:joi.valid('Rs 3.22 Crore'),otherwise:joi.valid('others')}).required(),
})

module.exports = {createSchemaGet,createSchemaPost}