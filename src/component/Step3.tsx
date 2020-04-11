import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppContext } from "../App";
import { TextField } from ".";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const Step3 = () => {
  const classes = useStyles();

  return (
    <AppContext.Consumer>
      {({ setStep }) => (
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField variant="outlined" fullWidth={true} placeholder="ФИО" />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField variant="outlined" fullWidth={true} placeholder="Имя" />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              variant="outlined"
              fullWidth={true}
              placeholder="Отчество"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              variant="outlined"
              fullWidth={true}
              placeholder="Дата рождения"
            />
          </Grid>
        </Grid>
      )}
    </AppContext.Consumer>
  );
};

export default Step3;
