const mongoose = require('mongoose');
const app = require('./app');

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    })
  )
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });

module.exports = app.listen(3001, () => {
  console.log('Server running. Use our API on port: 3001');
});
