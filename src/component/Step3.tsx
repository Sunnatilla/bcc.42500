import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppContext } from "../App";
import { TextField, Button, DatePicker } from ".";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const Step3 = () => {
  const classes = useStyles();

  const onSubmit = (e: any, setStep: (step: number) => void) => {
    e.preventDefault();
    ReactGA.event({
      category: "Socialcard_continue_3",
      action: "continue_3",
    });
    setStep(3);
  };

  return (
    <AppContext.Consumer>
      {({ model, changeModel, setStep }) => (
        <form onSubmit={(e: any) => onSubmit(e, setStep)}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                variant="filled"
                fullWidth={true}
                label="Фамилия"
                value={model.lastName?.toUpperCase()}
                onChange={(e: any) =>
                  changeModel(
                    (g) => g.lastName,
                    (s) => e.target.value.toUpperCase()
                  )
                }
                required
                inputProps={{
                  pattern: "[a-zA-Z\u0400-\u04ff]{2,30}",
                  title:
                    "Формат должен состоят только из букв Кириллицы или Латиницы длиной не менее 2 букв",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                variant="filled"
                fullWidth={true}
                label="Имя"
                value={model.firstName?.toUpperCase()}
                onChange={(e: any) =>
                  changeModel(
                    (g) => g.firstName,
                    (s) => e.target.value.toUpperCase()
                  )
                }
                required
                inputProps={{
                  pattern: "[a-zA-Z\u0400-\u04ff]{2,30}",
                  title:
                    "Формат должен состоят только из букв Кириллицы или Латиницы длиной не менее 2 букв",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                variant="filled"
                fullWidth={true}
                label="Отчество"
                value={model.middleName?.toUpperCase()}
                onChange={(e: any) =>
                  changeModel(
                    (g) => g.middleName,
                    (s) => e.target.value.toUpperCase()
                  )
                }
                inputProps={{
                  pattern: "[a-zA-Z\u0400-\u04ff]{2,30}",
                  title:
                    "Формат должен состоят только из букв Кириллицы или Латиницы длиной не менее 2 букв",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                variant="filled"
                fullWidth={true}
                label="Имя и фамилия на латинице"
                value={model.fullNameLat?.toUpperCase()}
                helperText="Укажите точно так же, как и у вас в удостоверении личности на обратной стороне"
                onChange={(e: any) =>
                  changeModel(
                    (g) => g.fullNameLat,
                    (s) => e.target.value.toUpperCase()
                  )
                }
                inputProps={{
                  pattern: "[a-zA-Z/ ]{2,30}",
                  title: "Формат должен состоят только из букв Латиницы",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <DatePicker
                value={model.birthDate || null}
                required
                inputProps={{
                  pattern:
                    "(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}",
                  title: "Дата должна быть в формате дд.мм.гггг",
                }}
                onChange={(date) =>
                  changeModel(
                    (g) => g.birthDate,
                    (s) => date?.format("MM/DD/YYYY")
                  )
                }
                label="Дата рождения"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Button style={{ marginTop: 24 }} fullWidth={true} type="submit">
                Продолжить
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </AppContext.Consumer>
  );
};

export default Step3;
