import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    marginTop: "10px",
  },
  buttonSubmit: {
    margin: "10px 0",
  },
  warning: {
    color: "red",
    fontSize: ".7rem",
  },
}));
