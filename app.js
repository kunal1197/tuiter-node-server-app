import express from "express";
import cors from "cors";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/user-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING ||
  "mongodb+srv://kunal:fse123456@cluster0.wuwbxi4.mongodb.net/tuiter-web?retryWrites=true&w=majority" ||
  "mongodb://localhost:27017/tuiter-web";
mongoose.connect(CONNECTION_STRING).then(() => {
  console.log("Connected to MongoDB", CONNECTION_STRING);
});

TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);
