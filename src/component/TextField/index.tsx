import React from "react";
import { withStyles, TextField } from "@material-ui/core";

const BccTextField = withStyles({
  root: {
    marginTop: 24,
  },
})(TextField);

export default BccTextField;
