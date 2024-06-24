import mongoose from "mongoose";

const connectDB = async () => {
  return await mongoose
    .connect("mongodb://localhost:27017/taggi")
    .then(() => console.log("database connected successfuly"))
    .catch((err) => console.log({ msg: "failed to connect to database", err }));
};

export default connectDB;
