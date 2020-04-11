import React from "react";
import {
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppContext } from "../App";
import { Button, TextField } from ".";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    checkBoxBlock: {
      marginTop: 34,
    },
    checkbox: {
      fontSize: 16,
      color: "#000000",
    },
    protectionContinueBlock: {
      marginTop: 45,
    },
    garantProtection: {
      fontSize: 14,
      color: "#000000",
    },
  })
);

export const Step1 = () => {
  const classes = useStyles();

  return (
    <AppContext.Consumer>
      {({ setStep }) => (
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField variant="outlined" fullWidth={true} placeholder="ИИН" />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              variant="outlined"
              fullWidth={true}
              placeholder="Номер телефона"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <FormControlLabel
              className={classes.checkBoxBlock}
              control={<Checkbox color="primary" />}
              label={
                <Typography className={classes.checkbox}>
                  Я согласен(а) на сбор и обработку персональных данных
                </Typography>
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid container className={classes.protectionContinueBlock}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={false}
                    sm={false}
                    md={false}
                    lg={false}
                    xl={false}
                  >
                    <img src="protection.svg" alt="protection" />
                  </Grid>
                  <Grid item xs={true} sm={true} md={true} lg={true} xl={true}>
                    <Typography className={classes.garantProtection}>
                      Мы гарантируем безопасность и сохранность ваших данных
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Button fullWidth={true} onClick={() => setStep(1)}>
                  Продолжить
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </AppContext.Consumer>
  );
};

export default Step1;
