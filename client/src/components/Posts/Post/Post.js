import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { ThumbUp, Delete, LocationOn } from "@material-ui/icons";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";

import { deletePost, likeCount } from "../../../actions/posts";

const Post = ({ post, setCurrentId, setShowModal }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
      />
      <div className={classes.overlay1}>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => {
            setCurrentId(post._id);
            setShowModal(true);
          }}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.margin}>
        <div className={classes.description}>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.location}
          >
            {post.location && <LocationOn color="primary" />}
            {post.location}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {post.tags.map((tag) => `#${tag}`)}
          </Typography>
          <CardContent>
            <Typography className={classes.title} variant="h6" gutterBottom>
              {post.description}
            </Typography>
          </CardContent>
        </div>
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(likeCount(post._id))}
          >
            <ThumbUp fontSize="small" />
            &nbsp;Like &nbsp;
            {post.likeCount}
          </Button>
          <Button
            size="small"
            color="secondary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <Delete fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default Post;
