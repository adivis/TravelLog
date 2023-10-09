import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  description: { type: String, required: true },
  location: String,
  tags: { type: [String] },
  selectedFile: { type: String, required: true },
  likeCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: new Date() },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
