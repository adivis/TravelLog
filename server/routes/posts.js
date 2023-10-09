import express from "express";

import { getPosts, createPosts,updatePost, likeCount, deletePost } from "../controllers/posts.js";
const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likeCount", likeCount);

export default router;
