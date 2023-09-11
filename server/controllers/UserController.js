import bcrypt from "bcrypt";
import { myModel } from "../models/UserModel.js";
export const signUp = async (req, res) => {
  const { email, password, name } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  try {
    const data = await new myModel({
      email,
      password: hashPassword,
      name,
    });
    await data.save();
    res.json({
      msg: "data created",
    });
  } catch (err) {
    res.json({
      error: err.message,
    });
    console.log(err);
  }
};
export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await myModel.findOne({ email });
    if (data) {
      const check = bcrypt.compareSync(password, data.password);
      if (check) {
        res.json({
          msg: "login successful",
        });
      } else {
        res.json({
          msg: "wrong password",
        });
      }
    } else {
      res.json({
        msg: "email id doesnt exists",
      });
    }
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};
