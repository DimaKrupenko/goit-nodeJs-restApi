const { User } = require('../../models/users');

const getcurrent = async (res, req, next) => {
  try {
    console.log(req.user);
  } catch (error) {
    next(error);
  }
};

module.exports = getcurrent;
