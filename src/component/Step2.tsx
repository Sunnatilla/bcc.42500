import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppContext } from "../App";
import { TextField } from ".";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    timer: {
      fontSize: 16,
      color: "#000D1A",
      marginTop: 24,
    },
  })
);

const Step2 = () => {
  const classes = useStyles();

  return (
    <AppContext.Consumer>
      {({ setStep }) => (
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              variant="outlined"
              fullWidth={true}
              placeholder="Код подтверждения"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography className={classes.timer}>
              Отправить повторно СМС через 00:44
            </Typography>
          </Grid>
        </Grid>
      )}
    </AppContext.Consumer>
  );
};

export default Step2;
