import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppContext } from "../App";
import { TextField, Button, DatePicker } from ".";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const Step3 = () => {
  const classes = useStyles();

  const onSubmit = (e: any, setStep: (step: number) => void) => {
    e.preventDefault();
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
                value={model.lastName}
                onChange={(e: any) =>
                  changeModel(
                    (g) => g.lastName,
                    (s) => e.target.value
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
                value={model.firstName}
                onChange={(e: any) =>
                  changeModel(
                    (g) => g.firstName,
                    (s) => e.target.value
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
                value={model.middleName}
                onChange={(e: any) =>
                  changeModel(
                    (g) => g.middleName,
                    (s) => e.target.value
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
                label="Дата выдачи"
              />
            </Grid>
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

export default Step3;
