import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    tuit: String,
    postedBy: {
      username: String,
    },
    stats: {
      retuits: Number,
      likes: Number,
      dislikes: Number,
      replies: Number,
    },
    handle: String,
    liked: Boolean,
    logoImage: String,
    avatarImage: String,
  },
  { collection: "tuits" }
);
export default schema;
