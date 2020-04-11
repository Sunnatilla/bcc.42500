import React from "react";
import { Grid, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppContext } from "../App";
import { TextField } from ".";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const Step5 = () => {
  const classes = useStyles();

  return (
    <AppContext.Consumer>
      {({ setStep }) => (
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              placeholder="Область"
              variant="outlined"
              fullWidth={true}
              select
            >
              <MenuItem></MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              placeholder="Город/Село"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <TextField
                  placeholder="Улица"
                  variant="outlined"
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                <TextField
                  placeholder="Дом"
                  variant="outlined"
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                <TextField
                  placeholder="Квартира"
                  variant="outlined"
                  fullWidth={true}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </AppContext.Consumer>
  );
};

export default Step5;
