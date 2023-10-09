import React, { useState, useEffect } from "react";
import { Paper, TextField, Typography, Button } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";
const Form = ({ currentId, setCurrentId, setShowModal }) => {
  const [postData, setPostData] = useState({
    description: "",
    location: "",
    tags: "",
    selectedFile: "",
    likeCount: 0,
  });
  const [showError, setShowError] = useState(false);
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (postData.description === "" || postData.selectedFile === "") {
      setShowError(true);
    } else if (currentId) {
      setShowModal(false);

      dispatch(updatePost(currentId, postData));
      clear();
    } else {
      setShowModal(false);

      dispatch(createPost(postData));
      clear();
    }
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      description: "",
      location: "",
      tags: "",
      selectedFile: "",
      likeCount: 0,
      createdAt: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Updating" : "Creating"} a Post
        </Typography>

        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          value={postData.description}
          onChange={(e) =>
            setPostData({ ...postData, description: e.target.value })
          }
        />
        {showError && postData.description.length<=0&& (
          <div style={{ width: "90%" }}>
            <Typography className={classes.warning}>
              {" "}
              Please enter valid description.
            </Typography>
          </div>
        )}
        <TextField
          name="location"
          variant="outlined"
          label="Location"
          fullWidth
          value={postData.location}
          onChange={(e) =>
            setPostData({ ...postData, location: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={(e) => setPostData({ ...postData, selectedFile: e.base64 })}
          />
        </div>
        {showError && postData.selectedFile.length<=0&& (
          <div style={{ width: "90%" }}>
            <Typography className={classes.warning}>
              {" "}
              Please select a file.
            </Typography>
          </div>
        )}

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
