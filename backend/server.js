const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri , ({ useNewUrlParser: true, useUnifiedTopology: true }));

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo DB Connection established Succesfully");
});

const exerciseRouter = require("./routes/exercise")
const userRouter = require("./routes/user")

app.use("/exercise" , exerciseRouter)
app.use("/users" , userRouter)

app.listen(port, () => {
  console.log(`Server Running on Port : ${port}`);
});
