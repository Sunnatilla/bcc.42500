import React, { useState, useEffect } from "react";
import { Grid, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppContext } from "../App";
import { TextField, Button } from ".";
import { BaseModel } from "../api/model/BaseModel";
import { api } from "./../api/Api";
import { KatoModel } from "../api/KatoController";
import { CodeValue } from "../api/ReferenceController";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const Step5 = () => {
  const classes = useStyles();

  const onSubmit = (
    e: any,
    model: BaseModel,
    setStep: (step: number) => void,
    showError: (open: boolean) => void
  ) => {
    e.preventDefault();
    api.camunda
      .start(model)
      .then(() => {
        setStep(5);
      })
      .catch((e: any) => {
        showError(true);
      });
  };

  const [regions, setRegions] = useState([] as KatoModel[]);
  const [districts, setDistricts] = useState([] as KatoModel[]);
  const [villages, setVillages] = useState([] as KatoModel[]);

  useEffect(() => {
    api.kato.getRegions().then((m) => setRegions(m));
  }, []);

  const changeRegion = (
    e: any,
    changeModel: (
      getProp: (g: BaseModel) => any,
      setProp: (s: any) => any
    ) => void
  ) => {
    const r = regions?.find((m) => m.te === e.target.value);

    changeModel(
      (g) => g.address?.region,
      (s) => r
    );

    api.kato
      .getKatoChildren(e.target.value)
      .then((m) => {
        setDistricts(m.districts || []);
        setVillages([...(m.cities || []), ...(m.villages || [])]);
      })
      .catch((e) => {});
  };

  const changeDistrict = (
    e: any,
    changeModel: (
      getProp: (g: BaseModel) => any,
      setProp: (s: any) => any
    ) => void
  ) => {
    const r = districts?.find((m) => m.te === e.target.value);

    changeModel(
      (g) => g.address?.district,
      (s) => r
    );

    api.kato.getKatoChildren(e.target.value).then((m) => {
      setVillages([...(m.cities || []), ...(m.villages || [])]);
    });
  };

  return (
    <AppContext.Consumer>
      {({ model, changeModel, setStep, setOpenError }) => (
        <form onSubmit={(e: any) => onSubmit(e, model, setStep, setOpenError)}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                placeholder="Область"
                variant="filled"
                fullWidth={true}
                select
                SelectProps={{
                  native: true,
                }}
                value={model.address?.region?.value}
                onChange={(e: any) => changeRegion(e, changeModel)}
                required
              >
                {regions?.map((m) => (
                  <option value={m.te}>{m.rus_name}</option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                placeholder="Регион"
                variant="filled"
                fullWidth={true}
                select
                SelectProps={{
                  native: true,
                }}
                value={model.address?.district?.value}
                onChange={(e: any) => changeDistrict(e, changeModel)}
                required
              >
                {districts?.map((m) => (
                  <option value={m.te}>{m.rus_name}</option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                placeholder="Город/Село"
                variant="filled"
                fullWidth={true}
                select
                SelectProps={{
                  native: true,
                }}
                value={model.address?.village}
                onChange={(e: any) =>
                  changeModel(
                    (g) => g.address?.village,
                    (s) => e.target.value
                  )
                }
                required
              >
                {villages?.map((m) => (
                  <option value={m.rus_name}>{m.rus_name}</option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <TextField
                    placeholder="Улица"
                    variant="outlined"
                    fullWidth={true}
                    value={model.address?.street}
                    onChange={(e: any) =>
                      changeModel(
                        (g) => g.address?.street,
                        (s) => e.target.value
                      )
                    }
                    required
                  />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <TextField
                    placeholder="Дом"
                    variant="outlined"
                    fullWidth={true}
                    value={model.address?.house}
                    onChange={(e: any) =>
                      changeModel(
                        (g) => g.address?.house,
                        (s) => e.target.value
                      )
                    }
                    required
                  />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <TextField
                    placeholder="Квартира"
                    variant="outlined"
                    fullWidth={true}
                    value={model.address?.flat}
                    onChange={(e: any) =>
                      changeModel(
                        (g) => g.address?.flat,
                        (s) => e.target.value
                      )
                    }
                    required
                  />
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

export default Step5;
