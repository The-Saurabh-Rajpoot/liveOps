const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOURl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
