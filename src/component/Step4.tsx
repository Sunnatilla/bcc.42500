import React, { useState, useEffect } from "react";
import { Grid, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppContext } from "../App";
import { TextField, Button, DatePicker } from ".";
import { api } from "./../api/Api";
import { CodeName } from "./../api/ReferenceController";

const Step4 = () => {
  const onSubmit = (e: any, setStep: (step: number) => void) => {
    e.preventDefault();
    setStep(4);
  };

  const [identityTypes, setIdentityTypes] = useState([] as CodeName[]);

  useEffect(() => {
    api.reference.getIdentityTypes().then((m) => setIdentityTypes(m));
  }, []);

  return (
    <AppContext.Consumer>
      {({ model, changeModel, setStep }) => (
        <form onSubmit={(e: any) => onSubmit(e, setStep)}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                variant="filled"
                fullWidth={true}
                label="Тип документа"
                select
                SelectProps={{
                  native: true,
                }}
                value={model.identity?.type || ""}
                onChange={(e: any) =>
                  changeModel(
                    (g) => g.identity?.type,
                    (s) => e.target.value
                  )
                }
                required
              >
                <option></option>
                {identityTypes?.map((m) => (
                  <option value={m.name}>{m.name}</option>
                ))}
              </TextField>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  label="Номер документа"
                  variant="filled"
                  fullWidth={true}
                  isNumeric={true}
                  value={model.identity?.number}
                  onChange={(e: any) =>
                    changeModel(
                      (g) => g.identity?.number,
                      (s) => e.target.value
                    )
                  }
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  variant="filled"
                  fullWidth={true}
                  label="Кем выдан"
                  value={model.identity?.issue?.toUpperCase()}
                  onChange={(e: any) =>
                    changeModel(
                      (g) => g.identity?.issue,
                      (s) => e.target.value?.toUpperCase()
                    )
                  }
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <DatePicker
                      value={model.identity?.issueDate || null}
                      required
                      inputProps={{
                        pattern:
                          "(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}",
                        title: "Дата должна быть в формате дд.мм.гггг",
                      }}
                      onChange={(date) =>
                        changeModel(
                          (g) => g.identity?.issueDate,
                          (s) => date?.format("MM/DD/YYYY")
                        )
                      }
                      label="Дата выдачи"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <DatePicker
                      value={model.identity?.expireDate || null}
                      required
                      inputProps={{
                        pattern:
                          "(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}",
                        title: "Дата должна быть в формате дд.мм.гггг",
                      }}
                      onChange={(date) =>
                        changeModel(
                          (g) => g.identity?.expireDate,
                          (s) => date?.format("MM/DD/YYYY")
                        )
                      }
                      label="Дата истечение"
                    />
                  </Grid>
                </Grid>
              </Grid>
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

export default Step4;
