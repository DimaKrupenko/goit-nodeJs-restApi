const { Contacts } = require('../../models/index');

const updateStatusContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { favorite } = req.body;
    const result = await Contacts.findByIdAndUpdate(
      contactId,
      { favorite },
      { new: true }
    );
    if (!result) {
      const error = new Error('Not found');
      error.status = 404;
      throw error;
    }
    res.json({
      status: 'success',
      code: 201,
      message: 'fields updated',
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusContact;
