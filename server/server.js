import Express from "express";
import dotenv from "dotenv";
import { myConnection } from "./connection/conn.js";
import router from "./routes/UserRoutes.js";
const app = new Express();
app.use(Express.json());
dotenv.config();
myConnection();
app.use(router)
const port = 1010;
app.listen(port, () => console.log("port starting on 1010"));
