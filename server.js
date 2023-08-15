const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// ruteo de api
const filmRouter = require("./routers/films.route");
app.use(`${process.env.URI_API}/films`, filmRouter);

const authRouter = require("./routers/auth.route");
app.use(`${process.env.URI_API}/auth`, authRouter);


app.listen(process.env.PORT, () => {
  console.log(`Server running in port ${process.env.PORT}`);
})
