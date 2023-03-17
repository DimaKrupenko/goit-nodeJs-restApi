const { Contacts } = require('../../models/index');
const { joiSchema } = require('../../models/contacts');

const add = async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body);
    if (error) {
      const error = new Error('missing required name field');
      error.status = 400;
      throw error;
    }
    const { _id } = req.user;
    const newContact = await Contacts.create({ ...req.body, owner: _id });
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
