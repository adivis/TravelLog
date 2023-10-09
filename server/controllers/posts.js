import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;
  if(post.tags === ""){
    delete post.tags;
  }
  const newPost = new PostMessage(post);
  console.log(newPost.createdAt);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const { description, location, tags, selectedFile } = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No post with that id");
    var updatedPost = { description, location, tags, selectedFile, _id };

    updatedPost = await PostMessage.findByIdAndUpdate(_id, updatedPost, {
      new: true,
    });

    res.json(updatedPost);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
};
export const deletePost = async (req, res) => {
  try {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No post with that id");

    await PostMessage.findByIdAndRemove(_id);

    res.json({ message: "Post deleted successfully." });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
};
export const likeCount = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with this id");

  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );
  res.json(updatedPost);
};
