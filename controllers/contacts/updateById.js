const { Contacts } = require('../../models/index');
const { joiSchema } = require('../../models/contacts');

const updateById = async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body);
    if (error) {
      error.status = 400;
      throw error;
    }
    const { contactId } = req.params;
    const result = await Contacts.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });
    if (!result) {
      const error = new Error('missing fields');
      error.status = 404;
      throw error;
    }
    res.json({
      status: 'success',
      code: 201,
      message: 'fields update',
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
