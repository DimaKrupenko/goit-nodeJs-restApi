const { Contacts } = require('../../models/index');

const getAll = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { page = 1, limit = 20, favorite } = req.query;
    const skip = (page - 1) * limit;
    const contacts = await Contacts.find({ owner: _id }, '', {
      favorite,
      skip,
      limit: Number(limit),
    }).populate('owner', '_id email subscription');
    // if (favorite) {
    //   const result = await Contacts.find({ favorite });
    //   res.json({
    //     status: 'success',
    //     code: 200,
    //     data: {
    //       result: result,
    //     },
    //   });
    // }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
