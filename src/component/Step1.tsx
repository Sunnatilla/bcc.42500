import React, { useState } from "react";
import {
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppContext } from "../App";
import { Button, TextField, PhoneNumber } from ".";
import { api } from "../api/ApiRest";
import { BaseModel } from "../api/model/BaseModel";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    checkBoxBlock: {
      marginTop: 34,
    },
    checkbox: {
      fontSize: 16,
      color: "#000000",
      "& > a": {
        color: "#27AE60",
      },
    },
    protectionContinueBlock: {
      marginTop: 45,
    },
    garantProtection: {
      fontSize: 14,
      color: "#000000",
      marginBottom: 24,
    },
  })
);

export const Step1 = () => {
  const classes = useStyles();

  const [agreement, setAgreement] = useState(true);

  const onSubmit = (
    e: any,
    model: BaseModel,
    setStep: (step: number) => void,
    setOpenError: (open: boolean) => void,
    setLoading: (loading: boolean) => void,
    sended: boolean,
    setSended: (sended: boolean) => void
  ) => {
    e.preventDefault();
    ReactGA.event({
      category: "Socialcard_continue_1",
      action: "continue_1",
    });
    setLoading(true);
    if (sended) {
      localStorage.removeItem("userContext");
      setLoading(false);
      setStep(1);
    } else {
      api.authOtp
        .sendOtp({
          iin: model.taxIdentificationNumber?.code,
          phone: model.contactData?.[0].phoneNumber,
        })
        .then(() => {
          setSended(true);
          localStorage.removeItem("userContext");
          setLoading(false);
          setStep(1);
        })
        .catch((e: any) => {
          setLoading(false);
          setOpenError(true);
        });
    }
  };

  return (
    <AppContext.Consumer>
      {({
        model,
        setStep,
        changeModel,
        setOpenError,
        setLoading,
        sended,
        setSended,
      }) => (
        <form
          onSubmit={(e: any) =>
            onSubmit(
              e,
              model,
              setStep,
              setOpenError,
              setLoading,
              sended,
              setSended
            )
          }
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                variant="filled"
                fullWidth={true}
                label="Выберите тип карты"
                maxLength={12}
                value={model.cardType}
                onChange={(e: any) =>
                  changeModel(
                    (g) => g.cardType,
                    (s) => e.target.value
                  )
                }
                required
                select
                SelectProps={{
                  native: true,
                }}
              >
                <option></option>
                <option value="0.300.114">Социальная карта</option>
                <option value="0.300.012">Дебетная карта</option>
                <option value="0.300.113">Пенсионная карта</option>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                variant="filled"
                fullWidth={true}
                label="ИИН"
                maxLength={12}
                isNumeric={true}
                value={model.taxIdentificationNumber?.code}
                onChange={(e: any) =>
                  changeModel(
                    (g) => g.taxIdentificationNumber?.code,
                    (s) => e.target.value
                  )
                }
                required
                inputProps={{
                  pattern: "\\d{12}",
                  title: "Формат должен состоят из 12 цифр",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <PhoneNumber
                variant="filled"
                fullWidth={true}
                label="Номер телефона"
                value={model.contactData?.[0].phoneNumber}
                onChangeValue={(value: string, provider: string) =>
                  changeModel(
                    (g) => g.contactData?.[0],
                    (s) => {
                      s.phoneNumber = value;
                      s.provider = provider;
                      return s;
                    }
                  )
                }
                required
                inputProps={{
                  pattern: "^[+][7]\\s[(]\\d{3}[)]\\s\\d{3}\\s\\d{2}\\s\\d{2}$",
                  title: "Поле должно быть формата +7 (111) 111 11 11",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <FormControlLabel
                className={classes.checkBoxBlock}
                control={
                  <Checkbox checked={agreement} color="primary" required />
                }
                label={
                  <Typography className={classes.checkbox}>
                    Я согласен(а) на сбор и обработку{" "}
                    <a href="agreement.pdf" target="_blank">
                      персональных данных
                    </a>
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
                    <Grid
                      item
                      xs={true}
                      sm={true}
                      md={true}
                      lg={true}
                      xl={true}
                    >
                      <Typography className={classes.garantProtection}>
                        Мы гарантируем безопасность и сохранность ваших данных
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Button fullWidth={true} type="submit">
                    Продолжить
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      )}
    </AppContext.Consumer>
  );
};

export default Step1;
