import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: {
      type: String,
      default:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fbeforeigosolutions.com%2Fwp-content%2Fuploads%2F2021%2F12%2Fdummy-profile-pic-300x300-1.png&tbnid=lwajYrMcLkqoMM&vet=12ahUKEwi304PGhKOEAxVaVqQEHTAlANIQMygHegUIARCAAQ..i&imgrefurl=https%3A%2F%2Fbeforeigosolutions.com%2Fpascale-atkinson%2Fattachment%2Fdummy-profile-pic-300x300-1%2F&docid=-be1M6COtQJYCM&w=300&h=300&q=img%20dumy&ved=2ahUKEwi304PGhKOEAxVaVqQEHTAlANIQMygHegUIARCAAQ",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
