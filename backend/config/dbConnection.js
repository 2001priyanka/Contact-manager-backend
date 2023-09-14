import mongoose from "mongoose";

// const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      // `MongoDB connected: ${conn.connection.host}`
      "MongoDB connected:",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.error(`Error:${err.message}`);
    process.exit(1);
  }
};

export default connectDb;
// const connectDB = async () => {
//   console.log("connect db");
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     });
//     console.log(
//       `MongoDB connected: ${conn.connection.host}`.cyan.bold.underline
//     );
//   } catch (error) {
//     console.error(`Error:${error.message}`.red.bold);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
