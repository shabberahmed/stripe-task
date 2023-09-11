import mongoose from "mongoose";
const mySchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  mobile: Number,
  subscriber: {
    type: Boolean,
    default: false,
  }
});
export  const myModel = mongoose.model("userdata", mySchema);