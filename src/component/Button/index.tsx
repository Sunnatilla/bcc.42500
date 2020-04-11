import React from "react";
import { withStyles, Button } from "@material-ui/core";

export const BccButton = withStyles({
  root: {
    fontSize: 18,
    color: "white",
    height: 60,
    backgroundColor: "#27AE60",
    textTransform: "none",
    "&:hover, &:active": {
      backgroundColor: "#27AE60",
      opacity: 0.8,
    },
  },
})(Button);

export default BccButton;
