import React, { useState, useEffect } from "react";
import { Grid, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppContext } from "../App";
import { TextField, Button } from ".";
import { BaseModel, Address } from "../api/model/BaseModel";
import { api } from "./../api/Api";
import { KatoModel } from "../api/KatoController";
import { CodeName } from "../api/ReferenceController";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const Step5 = () => {
  const classes = useStyles();

  const onSubmit = (
    e: any,
    model: BaseModel,
    setStep: (step: number) => void,
    showError: (open: boolean) => void,
    setLoading: (loading: boolean) => void
  ) => {
    e.preventDefault();
    setLoading(true);
    api.camunda
      .start({ client: model })
      .then(() => {
        setLoading(false);
        setStep(5);
      })
      .catch((e: any) => {
        setLoading(false);
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
      (g) => g.address,
      (s: Address) => {
        s.region = { code: r?.te, name: r?.rus_name };
        s.district = { code: "", name: "" };
        s.village = "";
        return s;
      }
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
      (g) => g.address,
      (s: Address) => {
        s.district = { code: r?.te, name: r?.rus_name };
        s.village = "";
        return s;
      }
    );

    api.kato.getKatoChildren(e.target.value).then((m) => {
      setVillages([...(m.cities || []), ...(m.villages || [])]);
    });
  };

  return (
    <AppContext.Consumer>
      {({ model, changeModel, setStep, setOpenError, setLoading }) => (
        <form
          onSubmit={(e: any) =>
            onSubmit(e, model, setStep, setOpenError, setLoading)
          }
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                label="Область"
                variant="filled"
                fullWidth={true}
                select
                SelectProps={{
                  native: true,
                }}
                value={model.address?.region?.code}
                onChange={(e: any) => changeRegion(e, changeModel)}
                required
              >
                <option></option>
                {regions?.map((m) => (
                  <option value={m.te}>{m.rus_name}</option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                label="Район"
                variant="filled"
                fullWidth={true}
                select
                SelectProps={{
                  native: true,
                }}
                value={model.address?.district?.code}
                onChange={(e: any) => changeDistrict(e, changeModel)}
                required={districts.length > 0 && !model.address?.village}
              >
                <option></option>
                {districts?.map((m) => (
                  <option value={m.te}>{m.rus_name}</option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                label="Город/Село"
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
                required={villages.length > 0}
              >
                <option></option>
                {villages?.map((m) => (
                  <option value={m.rus_name}>{m.rus_name}</option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    label="Улица"
                    variant="filled"
                    fullWidth={true}
                    value={model.address?.street?.toUpperCase()}
                    onChange={(e: any) =>
                      changeModel(
                        (g) => g.address?.street,
                        (s) => e.target.value.toUpperCase()
                      )
                    }
                    required
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                  <TextField
                    label="Дом"
                    variant="filled"
                    fullWidth={true}
                    value={model.address?.house?.toUpperCase()}
                    onChange={(e: any) =>
                      changeModel(
                        (g) => g.address?.house,
                        (s) => e.target.value.toUpperCase()
                      )
                    }
                    required
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                  <TextField
                    label="Квартира"
                    variant="filled"
                    fullWidth={true}
                    value={model.address?.flat?.toUpperCase()}
                    onChange={(e: any) =>
                      changeModel(
                        (g) => g.address?.flat,
                        (s) => e.target.value.toUpperCase()
                      )
                    }
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
