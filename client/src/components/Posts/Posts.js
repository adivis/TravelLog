import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

import Post from "./Post/Post.js";
import useStyles from "./styles";

const Posts = ({ setCurrentId, setShowModal }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={4}>
          <Post
            post={post}
            setCurrentId={setCurrentId}
            setShowModal={setShowModal}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
