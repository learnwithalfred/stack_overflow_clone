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

const CONNECTION_URL = process.env.DATABASE_URL;
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
