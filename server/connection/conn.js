import mongoose from "mongoose";
export async function myConnection(){
    await mongoose.connect(process.env.MYLINK)
    .then(()=>console.log("connected to mongoose "))
    .catch((err)=>console.log("mongoose error ",err))
}
