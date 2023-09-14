import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    user_id:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:'User'
    }, 
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:[true, "email is already taken"]
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", UserSchema);
export default User;
