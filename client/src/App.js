import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import { AddBoxOutlined } from "@material-ui/icons";
import { getPosts } from "./actions/posts";
import logo from "./images/logo.png";
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import useStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h4" align="center">
          Travel Log
        </Typography>

        <img className={classes.image} src={logo} alt="logo" height="60"></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="center" alignItems="stretch" spacing={3}>
            <Grid container justify="center" item xs={12} sm={4}>
              {!showModal && (
                <Button
                  className={classes.button}
                  onClick={() => setShowModal(true)}
                >
                  Add
                </Button>
              )}
              {showModal && (
                <Form
                  currentId={currentId}
                  setCurrentId={setCurrentId}
                  setShowModal={setShowModal}
                />
              )}
            </Grid>
            <Posts setCurrentId={setCurrentId} setShowModal={setShowModal} />
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
