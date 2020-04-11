import React from "react";
import { Grid, Typography } from "@material-ui/core";
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
    percent: {
      backgroundColor: "#E0E0E0",
      borderRadius: 4,
      textAlign: "center",
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

  return (
    <AppContext.Consumer>
      {({ setStep }) => (
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography className={classes.title}>{title}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography className={classes.percent}>{`${percent}%`}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {children}
          </Grid>
          {step !== 1 && (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Button
                style={{ marginTop: 24 }}
                fullWidth={true}
                onClick={() => setStep(step)}
              >
                Подтвердить
              </Button>
            </Grid>
          )}
        </Grid>
      )}
    </AppContext.Consumer>
  );
};

export default Stepper;
