const bodyParser = require("body-parser");
const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const dbConnect = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const authRouter = require("./routes/authRoute");

dbConnect();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running at PORT ${PORT} `);
});
