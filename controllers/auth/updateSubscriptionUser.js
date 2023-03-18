const User = require('../../models/index');

const updateSubscriptionUser = async (req, res, next) => {
  try {
    const { _id, subscription } = req.user;
    // console.log(subscription, _id);

    const result = await User.findByIdAndUpdate(
      _id,
      { subscription },
      { new: true }
    );

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

module.exports = updateSubscriptionUser;
