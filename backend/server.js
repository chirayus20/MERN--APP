const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const userRoute = require("./routes/userRoute");

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);
      console.log(" running successfully at", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("error", err);
  });

app.use(userRoute);






// chirayushrivastava59
// 5O9fWfx5Ti5PCUql
