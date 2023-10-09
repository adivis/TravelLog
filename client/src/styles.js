import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#330033",
    fontWeight: "700",
  },
  image: {
    margin: "10px",
  },
  button:{
    background:"white",
    color:"#330033",
    fontWeight: "700",
  },
}));
