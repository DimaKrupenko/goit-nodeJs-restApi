const { User } = require('../../models/users');

const logout = async (req, res, next) => {
  try {
    const { _id } = req.user;
    User.findByIdAndUpdate(_id, { token: null });
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

module.exports = logout;
