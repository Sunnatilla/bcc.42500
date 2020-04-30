import React, { useState, useEffect } from "react";
import { Grid, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppContext } from "../App";
import { TextField, Button } from ".";
import { BaseModel, Address, FullAddress } from "../api/model/BaseModel";
import { api } from "../api/ApiRest";
import { KatoModel } from "../api/KatoController";
import { CodeName } from "../api/ReferenceController";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const Step5 = () => {
  const classes = useStyles();

  const onSubmit = (
    e: any,
    setStep: (step: number) => void,
    changeModel: (
      getProp: (g: BaseModel) => any,
      setProp: (s: any) => any
    ) => void,
    model: BaseModel
  ) => {
    e.preventDefault();
    let fullAddr = model.fullAddress?.oblPrefix
      ? model.fullAddress?.oblPrefix.toLowerCase() + " "
      : "";
    fullAddr += model.fullAddress?.obl
      ? model.fullAddress?.obl[0].toUpperCase() +
        model.fullAddress?.obl.toLowerCase().substring(1) +
        " "
      : "";
    fullAddr += model.fullAddress?.areaPrefix
      ? model.fullAddress?.areaPrefix.toLowerCase() + " "
      : "";
    fullAddr += model.fullAddress?.area
      ? model.fullAddress?.area[0].toUpperCase() +
        model.fullAddress?.area.toLowerCase().substring(1) +
        " "
      : "";
    fullAddr += model.fullAddress?.cityPrefix
      ? model.fullAddress?.cityPrefix.toLowerCase() + " "
      : "";
    fullAddr += model.fullAddress?.city
      ? model.fullAddress?.city[0].toUpperCase() +
        model.fullAddress?.city.toLowerCase().substring(1) +
        " "
      : "";
    fullAddr += model.fullAddress?.villagePrefix
      ? model.fullAddress?.villagePrefix.toLowerCase() + " "
      : "";
    fullAddr += model.fullAddress?.village
      ? model.fullAddress?.village[0].toUpperCase() +
        model.fullAddress?.village.toLowerCase().substring(1) +
        " "
      : "";
    fullAddr += model.fullAddress?.streetPrefix
      ? model.fullAddress?.streetPrefix.toLowerCase() + " "
      : "";
    fullAddr += model.fullAddress?.street
      ? model.fullAddress?.street[0].toUpperCase() +
        model.fullAddress?.street.toLowerCase().substring(1) +
        " "
      : "";
    fullAddr += model.fullAddress?.housePrefix
      ? model.fullAddress?.housePrefix.toLowerCase() + " "
      : "";
    fullAddr += model.fullAddress?.house
      ? model.fullAddress?.house[0].toUpperCase() +
        model.fullAddress?.house.toLowerCase().substring(1) +
        " "
      : "";
    fullAddr += model.fullAddress?.flatPrefix
      ? model.fullAddress?.flatPrefix.toLowerCase() + " "
      : "";
    fullAddr += model.fullAddress?.flat
      ? model.fullAddress?.flat[0].toUpperCase() +
        model.fullAddress?.flat.toLowerCase().substring(1) +
        " "
      : "";
    changeModel(
      (g) => g.fullAddressString,
      (s) => fullAddr
    );
    setStep(5);
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
          zip: r?.index,
        };
        return s;
      }
    );

    changeModel(
      (g) => g.fullAddress,
      (s: FullAddress) => {
        s = {
          ...s,
          oblPrefix: r?.rus_name_prefix,
          obl: r?.rus_name,
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
        };
        return s;
      }
    );

    changeModel(
      (g) => g.fullAddress,
      (s: FullAddress) => {
        s = {
          ...s,
          areaPrefix: r?.rus_name_prefix,
          area: r?.rus_name,
        };
        return s;
      }
    );

    api.kato.getKatoChildren(e.target.value).then((m) => {
      setCities(m.cities || []);
      setCityParts(m.villages || []);
    });
  };

  const changeCity = (
    e: any,
    changeModel: (
      getProp: (g: BaseModel) => any,
      setProp: (s: any) => any
    ) => void
  ) => {
    const c = cities?.find((m) => m.te === e.target.value);

    changeModel(
      (g) => g.addresses,
      (s: Address[]) => {
        s[0] = {
          ...s[0],
          city: { code: c?.te, name: c?.rus_name },
        };
        return s;
      }
    );

    changeModel(
      (g) => g.fullAddress,
      (s: FullAddress) => {
        s = {
          ...s,
          cityPrefix: c?.rus_name_prefix,
          city: c?.rus_name,
        };
        return s;
      }
    );
  };

  const changeVillage = (
    e: any,
    changeModel: (
      getProp: (g: BaseModel) => any,
      setProp: (s: any) => any
    ) => void
  ) => {
    const c = cityParts?.find((m) => m.te === e.target.value);

    changeModel(
      (g) => g.addresses,
      (s: Address[]) => {
        s[0] = {
          ...s[0],
          village: { code: c?.te, name: c?.rus_name },
        };
        return s;
      }
    );

    changeModel(
      (g) => g.fullAddress,
      (s: FullAddress) => {
        s = {
          ...s,
          villagePrefix: c?.rus_name_prefix,
          village: c?.rus_name,
        };
        return s;
      }
    );
  };

  const changeStreet = (
    e: any,
    changeModel: (
      getProp: (g: BaseModel) => any,
      setProp: (s: any) => any
    ) => void
  ) => {
    changeModel(
      (g) => g.addresses?.[0].street?.code,
      (s) => e.target.value
    );

    changeModel(
      (g) => g.fullAddress,
      (s: FullAddress) => {
        s = {
          ...s,
          street: e.target.value,
        };
        return s;
      }
    );
  };

  const changeHouse = (
    e: any,
    changeModel: (
      getProp: (g: BaseModel) => any,
      setProp: (s: any) => any
    ) => void
  ) => {
    changeModel(
      (g) => g.addresses?.[0].houseNumber?.code,
      (s) => e.target.value
    );

    changeModel(
      (g) => g.fullAddress,
      (s: FullAddress) => {
        s = {
          ...s,
          house: e.target.value,
        };
        return s;
      }
    );
  };

  const changeFlat = (
    e: any,
    changeModel: (
      getProp: (g: BaseModel) => any,
      setProp: (s: any) => any
    ) => void
  ) => {
    changeModel(
      (g) => g.addresses?.[0].flat?.code,
      (s) => e.target.value
    );

    changeModel(
      (g) => g.fullAddress,
      (s: FullAddress) => {
        s = {
          ...s,
          flat: e.target.value,
        };
        return s;
      }
    );
  };

  return (
    <AppContext.Consumer>
      {({ model, changeModel, setStep }) => (
        <form onSubmit={(e: any) => onSubmit(e, setStep, changeModel, model)}>
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
                value={model.addresses?.[0].city?.code}
                onChange={(e: any) => changeCity(e, changeModel)}
                required={
                  cities.length > 0 && !model.addresses?.[0].village?.name
                }
              >
                <option></option>
                {cities?.map((m) => (
                  <option value={m.te}>{m.rus_name}</option>
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
                value={model.addresses?.[0].village?.code}
                onChange={(e: any) => changeVillage(e, changeModel)}
                required={
                  cityParts.length > 0 && !model.addresses?.[0].city?.name
                }
              >
                <option></option>
                {cityParts?.map((m) => (
                  <option value={m.te}>{m.rus_name}</option>
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
                    value={model.addresses?.[0].street?.code}
                    onChange={(e: any) => changeStreet(e, changeModel)}
                    required
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                  <TextField
                    label="Дом"
                    variant="filled"
                    fullWidth={true}
                    value={model.addresses?.[0].houseNumber?.code}
                    onChange={(e: any) => changeHouse(e, changeModel)}
                    required
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                  <TextField
                    label="Квартира"
                    variant="filled"
                    fullWidth={true}
                    value={model.addresses?.[0].flat?.code}
                    onChange={(e: any) => changeFlat(e, changeModel)}
                  />
                </Grid>
              </Grid>
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

export default Step5;
