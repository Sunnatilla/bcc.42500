import React from "react";
import { Grid, Typography, LinearProgress } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Swipe from "react-swipeable-views";
import { AppContext } from "../App";
import { Button } from ".";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 16,
      color: "#4D565F",
    },
    divProgress: {
      position: "relative",
    },
    progress: {
      top: 0,
      left: 0,
      height: 22,
      width: "100%",
      borderRadius: 2,
      position: "absolute",
      zIndex: 1569,
    },
    progressCount: {
      top: 0,
      left: 0,
      width: "100%",
      textAlign: "center",
      color: "black",
      zIndex: 1600,
      fontSize: 15,
    },
  })
);
const Stepper = (props: {
  title: string;
  percent: number;
  step: number;
  children: React.ReactNode;
}) => {
  const classes = useStyles();

  const { title, children, percent, step } = props;

  const onSubmit = () => {};

  return (
    <AppContext.Consumer>
      {({ setStep }) => (
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography className={classes.title}>{title}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={classes.divProgress}>
              <LinearProgress
                className={classes.progress}
                variant="determinate"
                color="primary"
                value={percent}
              />
              <Typography
                className={classes.progressCount}
              >{`${percent}%`}</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {children}
          </Grid>
        </Grid>
      )}
    </AppContext.Consumer>
  );
};

export default Stepper;
