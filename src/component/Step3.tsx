import React, { useEffect, useContext } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppContext } from "../App";
import { TextField, Button, DatePicker } from ".";
import ReactGA from "react-ga";
import { BaseModel } from "../api/model/BaseModel";
import { kz2lt } from "../utils";
import moment from "moment";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const Step3 = () => {
  const classes = useStyles();

  var context = useContext(AppContext);

  useEffect(() => {
    context.changeModel(
      (g) => g,
      (s: BaseModel) => {
        const iin = s.taxIdentificationNumber?.code || "";
        const year = iin.substr(0, 2);
        const month = iin.substr(2, 2);
        const day = iin.substr(4, 2);
        if (year.substr(0, 1) == "0") {
          s = { ...s, birthDate: `${month}/${day}/20${year}` };
        } else {
          s = { ...s, birthDate: `${month}/${day}/19${year}` };
        }
        console.log("sssssss - ", s);
        return s;
      }
    );
  }, []);

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
                    (g) => g,
                    (s: BaseModel) => {
                      s = {
                        ...s,
                        lastName: e.target.value.toUpperCase(),
                        lastNameLat: kz2lt(e.target.value.toUpperCase()),
                      };
                      return s;
                    }
                  )
                }
                required
                inputProps={{
                  pattern: "[a-zA-Z\u0400-\u04ff-]{2,30}",
                  title:
                    "Формат должен состоят только из букв Кириллицы или Латиницы длиной не менее 2 букв и дэфис",
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
                    (g) => g,
                    (s: BaseModel) => {
                      s = {
                        ...s,
                        firstName: e.target.value.toUpperCase(),
                        firstNameLat: kz2lt(e.target.value.toUpperCase()),
                      };
                      return s;
                    }
                  )
                }
                required
                inputProps={{
                  pattern: "[a-zA-Z\u0400-\u04ff-]{2,30}",
                  title:
                    "Формат должен состоят только из букв Кириллицы или Латиницы длиной не менее 2 букв и дэфис",
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
                  pattern: "[a-zA-Z\u0400-\u04ff-]{2,30}",
                  title:
                    "Формат должен состоят только из букв Кириллицы или Латиницы длиной не менее 2 букв и дэфис",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                variant="filled"
                fullWidth={true}
                label="Имя и фамилия на латинице"
                value={`${model.firstNameLat} ${model.lastNameLat}`}
                helperText="Укажите точно так же, как и у вас в удостоверении личности на обратной стороне"
                onChange={(e: any) =>
                  changeModel(
                    (g) => g,
                    (s: BaseModel) => {
                      let fl = e.target.value
                        .toUpperCase()
                        .replace(/\s+/g, " ");
                      let arr = fl.split(" ");
                      if (arr.length > 1) {
                        s = {
                          ...s,
                          firstNameLat: arr[0],
                          lastNameLat: arr[1],
                        };
                      } else if (arr.length > 0) {
                        s = {
                          ...s,
                          firstNameLat: arr[0],
                        };
                      }
                      return s;
                    }
                  )
                }
                inputProps={{
                  pattern: "[a-zA-Z/ ]{2,30} [a-zA-Z/ ]{2,30}",
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
