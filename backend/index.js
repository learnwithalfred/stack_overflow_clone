const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const companyRoutes = require("./routes/company");
const questionRoutes = require("./routes/question");
const jobRoutes = require("./routes/job");

require("dotenv").config();
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());


app.use("/company", companyRoutes);
app.use("/questions", questionRoutes);
app.use("/jobs", jobRoutes);

const CONNECTION_URL =
  "mongodb+srv://properalfred:CmzDl5m5X9UISm5J@cluster0.6nii1.mongodb.net/stack_clone_db?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
