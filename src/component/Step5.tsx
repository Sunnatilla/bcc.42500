import React, { useState, useEffect } from "react";
import { Grid, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppContext } from "../App";
import { TextField, Button } from ".";
import { BaseModel, Address } from "../api/model/BaseModel";
import { api } from "../api/ApiRest";
import { KatoModel } from "../api/KatoController";
import { CodeName } from "../api/ReferenceController";
import ReactGA from "react-ga";

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
    ReactGA.event({
      category: "Socialcard_continue_5",
      action: "continue_5",
    });
    setLoading(true);
    api.camunda
      .start({ client: model })
      .then((model) => {
        ReactGA.event({
          category: "Application_successfully",
          action: "successfully",
        });
        setLoading(false);

        if (model.variables.в) setStep(5);
      })
      .catch((e: any) => {
        setLoading(false);
        showError(true);
      });
  };

  const [regions, setRegions] = useState([] as KatoModel[]);
  const [districts, setDistricts] = useState([] as KatoModel[]);
  const [cities, setCities] = useState([] as KatoModel[]);
  const [cityParts, setCityParts] = useState([] as KatoModel[]);

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
      (g) => g.addresses,
      (s: Address[]) => {
        s[0] = {
          ...s[0],
          region: { code: r?.te, name: r?.rus_name },
          district: { code: "", name: "" },
        };
        return s;
      }
    );

    api.kato
      .getKatoChildren(e.target.value)
      .then((m) => {
        setDistricts(m.districts || []);
        setCities(m.cities || []);
        setCityParts(m.villages || []);
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
      (g) => g.addresses,
      (s: Address[]) => {
        s[0] = {
          ...s[0],
          district: { code: r?.te, name: r?.rus_name },
          city: { code: "", name: "" },
          cityPart: { code: "", name: "" },
        };
        return s;
      }
    );

    api.kato.getKatoChildren(e.target.value).then((m) => {
      setCities(m.cities || []);
      setCityParts(m.villages || []);
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
                value={model.addresses?.[0].region?.code}
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
                value={model.addresses?.[0].district?.code}
                onChange={(e: any) => changeDistrict(e, changeModel)}
                required={
                  districts.length > 0 && !model.addresses?.[0].city?.name
                }
              >
                <option></option>
                {districts?.map((m) => (
                  <option value={m.te}>{m.rus_name}</option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                label="Город"
                variant="filled"
                fullWidth={true}
                select
                SelectProps={{
                  native: true,
                }}
                value={model.addresses?.[0].city?.name}
                onChange={(e: any) =>
                  changeModel(
                    (g) => g.addresses,
                    (s: Address[]) => {
                      s[0] = {
                        ...s[0],
                        city: { code: e.target.value, name: e.target.value },
                        village: { code: e.target.value, name: e.target.value },
                      };
                      return s;
                    }
                  )
                }
                required={
                  cities.length > 0 && !model.addresses?.[0].cityPart?.name
                }
              >
                <option></option>
                {cities?.map((m) => (
                  <option value={m.rus_name}>{m.rus_name}</option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                label="Село"
                variant="filled"
                fullWidth={true}
                select
                SelectProps={{
                  native: true,
                }}
                value={model.addresses?.[0].cityPart?.name}
                onChange={(e: any) =>
                  changeModel(
                    (g) => g.addresses,
                    (s: Address[]) => {
                      s[0] = {
                        ...s[0],
                        cityPart: {
                          code: e.target.value,
                          name: e.target.value,
                        },
                        village: { code: e.target.value, name: e.target.value },
                      };
                      return s;
                    }
                  )
                }
                required={
                  cityParts.length > 0 && !model.addresses?.[0].city?.name
                }
              >
                <option></option>
                {cityParts?.map((m) => (
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
                    value={model.addresses?.[0].street?.name?.toUpperCase()}
                    onChange={(e: any) =>
                      changeModel(
                        (g) => g.addresses?.[0].street?.name,
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
                    value={model.addresses?.[0].houseNumber?.name?.toUpperCase()}
                    onChange={(e: any) =>
                      changeModel(
                        (g) => g.addresses?.[0].houseNumber?.name,
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
                    value={model.addresses?.[0].flat?.name?.toUpperCase() || ""}
                    onChange={(e: any) =>
                      changeModel(
                        (g) => g.addresses?.[0].flat?.name,
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
