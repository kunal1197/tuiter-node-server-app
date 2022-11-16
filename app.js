import express from "express";
import cors from "cors";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/user-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

app.use(cors());
const app = express();
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(4000);
