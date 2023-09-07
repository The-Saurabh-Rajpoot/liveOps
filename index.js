const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./config/db");

const offersRoutes = require("./routes/offers");
const usersRoutes = require("./routes/users");

app.use("/offers", offersRoutes);
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
