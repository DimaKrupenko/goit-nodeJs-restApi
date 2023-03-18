const { Contacts } = require('../../models/index');

const filterFavorite = async (req, res, next) => {
  try {
    // const { favorite } = req.body;

    const result = await Contacts.find({ favorite: true });
    if (result) {
      res.json({
        status: 'success',
        code: 200,
        data: {
          result,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = filterFavorite;
