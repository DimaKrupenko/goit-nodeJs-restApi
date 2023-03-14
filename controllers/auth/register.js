const { Users } = require('../../models/users');
const { Conflict } = require('http-errors');
const { joiSchema } = require('../../models/users');

const register = async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body);
    if (error) {
      const error = new Error('Field filled incorrectly');
      error.status = 400;
      throw error;
    }
    const { email, password, subscription } = req.body;

    const user = await Users.findOne({ email });
    if (user) {
      throw new Conflict('Email in use');
    }
    const result = await Users.create({ email, password, subscription });
    console.log(result);

    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        user: {
          email,
          subscription,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
