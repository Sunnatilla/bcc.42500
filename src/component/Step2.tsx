import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppContext } from "../App";
import { TextField, Button } from ".";
import { api } from "../api/Api";
import { BaseModel } from "../api/model/BaseModel";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    timer: {
      fontSize: 16,
      color: "#000D1A",
      marginTop: 24,
    },
    linkReSendSms: {
      marginTop: 24,
      color: "#536dfe",
      textDecoration: "underline",
      fontSize: 18,
      fontWeight: "bold",
      cursor: "pointer",
      "&:hover, &:active": {
        color: "#536dfe",
        opacity: 0.8,
      },
    },
  })
);

const Step2 = () => {
  const classes = useStyles();

  const [timer, setTimer] = useState(90);
  const [otp, setOtp] = useState("");

  React.useEffect(() => {
    let timeOut = setInterval(() => {
      if (timer !== 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  const onSubmit = (
    e: any,
    model: BaseModel,
    setStep: (step: number) => void,
    showError: (open: boolean) => void,
    setLoading: (loading: boolean) => void
  ) => {
    e.preventDefault();
    ReactGA.event({
      category: "Socialcard_continue_2",
      action: "continue_2",
    });
    setLoading(true);
    api.authOtp
      .confirmOtp({
        iin: model.iin,
        phone: model.phoneNumber,
        otp,
      })
      .then((userContext) => {
        setLoading(false);
        localStorage.setItem("userContext", JSON.stringify(userContext));
        setStep(2);
      })
      .catch((e: any) => {
        setLoading(false);
        showError(true);
      });
  };

  const onReSend = (
    model: BaseModel,
    showError: (open: boolean) => void,
    setLoading: (loading: boolean) => void
  ) => {
    setLoading(true);
    api.authOtp
      .sendOtp({ iin: model.iin, phone: model.phoneNumber })
      .then(() => {
        setLoading(false);
        setTimer(90);
        setOtp("");
      })
      .catch((e) => {
        setLoading(false);
        showError(true);
      });
  };

  return (
    <AppContext.Consumer>
      {({ model, setStep, changeModel, setOpenError, setLoading }) => (
        <form
          onSubmit={(e: any) =>
            onSubmit(e, model, setStep, setOpenError, setLoading)
          }
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                variant="filled"
                isNumeric={true}
                maxLength={6}
                fullWidth={true}
                label="Код подтверждения"
                required
                inputProps={{
                  pattern: "\\d{6}",
                  title: "Формат должен состоят из 6 цифр",
                }}
                value={otp}
                onChange={(e: any) => setOtp(e.target.value)}
              />
            </Grid>
            {timer !== 0 ? (
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography className={classes.timer}>
                  Отправить повторно СМС через: {timer}
                </Typography>
              </Grid>
            ) : (
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography
                  className={classes.linkReSendSms}
                  onClick={() => onReSend(model, setOpenError, setLoading)}
                >
                  Отправить повторно СМС
                </Typography>
              </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Button style={{ marginTop: 24 }} fullWidth={true} type="submit">
                Подтвердить
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </AppContext.Consumer>
  );
};

export default Step2;
