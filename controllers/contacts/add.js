const { Contacts } = require('../../models/index');
const { joiSchema } = require('../../models/contact');

// const Joi = require('joi');

// const joiSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.number().required(),
// });

const add = async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body);
    if (error) {
      const error = new Error('missing required name field');
      error.status = 400;
      throw error;
    }
    const newContact = await Contacts.create(req.body);
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        newContact,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
