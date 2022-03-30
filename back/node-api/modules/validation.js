const Joi = require('joi');


const schema = Joi.object({
    placa: Joi.string()
        .alphanum()
        .min(7)
        .max(7)
        .required(),
    chassi: Joi.string()
        .alphanum()
        .min(17)
        .max(17)
        .required(),
    renavam: Joi.number()
        .integer()
        .min(0)
        .max(100000000000)
        .required(),    
    marca: Joi.string()
        .alphanum()
        .min(3)
        .max(15)
        .required(),  
    modelo: Joi.string()
        .alphanum()
        .min(3)
        .max(25)
        .required(),  
    ano: Joi.number()
        .min(1950)
        .max(new Date().getFullYear() + 1)
        .required(),
});
class ValidationModule {
    constructor() {}

    isValid(data) {
        try {
            return schema.validate(data);
        } catch (e) {
            console.log(e);
        }
        
    }

  }
  module.exports = ValidationModule; 