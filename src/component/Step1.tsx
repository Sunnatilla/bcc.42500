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
import { api } from "./../api/Api";
import { BaseModel } from "../api/model/BaseModel";

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
      marginBottom: 24,
    },
  })
);

export const Step1 = () => {
  const classes = useStyles();

  const [agreement, setAgreement] = useState(false);

  const onSubmit = (
    e: any,
    model: BaseModel,
    setStep: (step: number) => void,
    showError: (open: boolean) => void,
    setLoading: (loading: boolean) => void
  ) => {
    e.preventDefault();
    setLoading(true);
    api.authOtp
      .sendOtp({ iin: model.iin, phone: model.phoneNumber })
      .then(() => {
        localStorage.removeItem("userContext");
        setLoading(false);
        setStep(1);
      })
      .catch((e: any) => {
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
                fullWidth={true}
                label="ИИН"
                maxLength={12}
                isNumeric={true}
                value={model.iin}
                onChange={(e: any) =>
                  changeModel(
                    (g) => g.iin,
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
                value={model.phoneNumber}
                onChangeValue={(value: string) =>
                  changeModel(
                    (g) => g.phoneNumber,
                    (s) => value
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
                  <Checkbox
                    value={agreement}
                    onChange={() => setAgreement(!agreement)}
                    color="primary"
                    required
                  />
                }
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
