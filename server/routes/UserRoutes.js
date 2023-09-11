import {Router} from "express";
import { Login, signUp } from "../controllers/UserController.js";
const router = Router();
router.post("/signup", signUp);
router.post('/login',Login)
export default router;
