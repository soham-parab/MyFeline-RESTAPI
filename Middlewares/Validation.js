const Joi = require("joi");

const registerValidation = (data) => {
   const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required(),
   });
   return schema.validate(data);
};

module.exports.registerValidation = registerValidation;

const loginValidation = (data) => {
   const schema = Joi.object({
      email: Joi.string().min(6).required(),
      password: Joi.string().min(6).required(),
   });
   return schema.validate(data);
};

module.exports.loginValidation = loginValidation;