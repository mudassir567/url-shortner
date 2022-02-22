const mongoose = require("mongoose");

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect('mongodb+srv://mudassir:pasha123123@cluster0.lq2yr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', connectionParams)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });