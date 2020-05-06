import React, { useState, useEffect } from "react";
import { Grid, Typography, FormControlLabel } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { YMaps, Map, Placemark, MapState } from "react-yandex-maps";
import { TextField, Button } from ".";
import { api } from "../api/ApiRest";
import { Coordinate, Marker } from "../api/ReferenceController";
import { AppContext } from "../App";
import { BaseModel } from "../api/model/BaseModel";
import ReactGA from "react-ga";
import BccCheckbox from "./BccCheckbox/BccCheckbox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    map: {
      width: "100%",
      height: 300,
    },
    checbox: {
      fontSize: 16,
      color: "#4D565F",
    },
    branchTitle: {
      fontSize: 16,
      color: "#4D565F",
      marginTop: 15,
    },
  })
);

const Step6 = () => {
  const classes = useStyles();

  const [coordinates, setCoordinates] = useState([] as Coordinate[]);
  const [mapCenter, setMapCenter] = useState({} as MapState);
  const [coordinate, setCoordinate] = useState({} as Coordinate);
  const [selectedMarker, setSelectedMarker] = useState({} as Marker);

  useEffect(() => {
    api.reference.getCityBranch().then((m) => {
      setCoordinates(m);
      const coord = m.find((m) => m.code == "1310") || ({} as Coordinate);
      setCoordinate(coord);
      setMapCenter({
        center: [coord?.map.lat || 0, coord?.map.lng || 0],
        zoom: coord?.map.zoom || 0,
      });
    });
  }, []);

  const onSelectRegion = (region: string) => {
    const coord =
      coordinates.find((m) => m.code == region) || ({} as Coordinate);
    setMapCenter({
      center: [coord?.map.lat || 0, coord?.map.lng || 0],
      zoom: coord?.map.zoom || 0,
    });
    setCoordinate(coord);
  };

  const onSelectMarker = (
    marker: Marker,
    changeModel: (
      getProp: (g: BaseModel) => any,
      setProp: (s: any) => any
    ) => void
  ) => {
    setSelectedMarker(marker);
    changeModel(
      (g) => g.department?.code,
      (s) => marker.depCode
    );
  };

  const onSubmit = (
    model: BaseModel,
    setStep: (step: number) => void,
    setOpenError: (open: boolean) => void,
    setShowErrorMsg: (message: string) => void,
    setLoading: (loading: boolean) => void
  ) => {
    if (!!selectedMarker.depCode) {
      ReactGA.event({
        category: "Socialcard_continue_5",
        action: "continue_5",
      });
      setLoading(true);
      api.camunda
        .start({ client: model })
        .then((response) => {
          ReactGA.event({
            category: "Application_successfully",
            action: "successfully",
          });
          setLoading(false);

          const model = response.variables;

          if (
            model.clientExist.data.length == 0 &&
            model.phoneExist.data.length > 0
          ) {
            setShowErrorMsg(
              "Введеный номер телефона принадлежит другому клиенту"
            );
          } else if (
            model.clientExist.data.length > 0 &&
            model.phoneExist.data.length == 0
          ) {
            setShowErrorMsg("Введеный номер телефона не является доверенным");
          } else if (
            model.clientExist.data.length == 0 &&
            model.phoneExist.data.length == 0
          ) {
            if (model.isLongNameFLCorrect == false) {
              setShowErrorMsg("Введены неправильные данные ФИО");
            } else if (model.createClientResult.data.p_errfl != null) {
              setOpenError(true);
            } else if (model.controlCardError == true) {
              setOpenError(true);
            } else {
              setStep(6);
            }
          } else if (
            model.clientExist.data.length > 0 &&
            model.phoneExist.data.length > 0 &&
            model.client.taxIdentificationNumber.code !=
              model.phoneExist.data[0].iin
          ) {
            setShowErrorMsg(
              "Введеный номер телефона принадлежит другому клиенту"
            );
          } else if (
            !!model.checkResult &&
            model.checkResult.product.state == 1
          ) {
            setShowErrorMsg("Клиент уже подписан на продукт или его аналог");
          } else {
            setStep(6);
          }
        })
        .catch((e: any) => {
          setLoading(false);
          setOpenError(true);
        });
    } else {
      setOpenError(true);
    }
  };

  return (
    <AppContext.Consumer>
      {({
        model,
        changeModel,
        setStep,
        setOpenError,
        setShowErrorMsg,
        setLoading,
      }) => (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              variant="filled"
              fullWidth={true}
              label="Город"
              select
              SelectProps={{
                native: true,
              }}
              value={coordinate.code || ""}
              onChange={(e: any) => onSelectRegion(e.target.value)}
              required
            >
              {coordinates?.map((m, i) => (
                <option key={i} value={m.code}>
                  {m.value}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <YMaps className={classes.map}>
              <Map className={classes.map} state={mapCenter}>
                {coordinate.markers?.map((marker, i) => (
                  <Placemark
                    key={i}
                    geometry={[marker.lat || 0, marker.lng || 0]}
                    onClick={() => onSelectMarker(marker, changeModel)}
                    options={
                      marker.name == selectedMarker.name
                        ? { iconColor: "red" }
                        : { iconColor: "#1E98FF" }
                    }
                  />
                ))}
              </Map>
            </YMaps>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <FormControlLabel
              control={
                <BccCheckbox
                  checked={!!model.isDelivery}
                  onChange={() =>
                    changeModel(
                      (s) => s.isDelivery,
                      (g) => !model.isDelivery
                    )
                  }
                />
              }
              label="Необходима доставка карты"
              className={classes.checbox}
            />
            {!!model.isDelivery && (
              <TextField
                label="Адрес доставки"
                variant="filled"
                fullWidth={true}
                value={model.addresses?.[0].deliveryAddress}
                onChange={(e: any) =>
                  changeModel(
                    (g) => g.addresses?.[0].deliveryAddress,
                    (s) => e.target.value
                  )
                }
                style={{ marginTop: 0 }}
              />
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Button
              style={{ marginBottom: 24 }}
              fullWidth={true}
              onClick={() =>
                onSubmit(
                  model,
                  setStep,
                  setOpenError,
                  setShowErrorMsg,
                  setLoading
                )
              }
            >
              Подтвердить
            </Button>
          </Grid>
        </Grid>
      )}
    </AppContext.Consumer>
  );
};

export default Step6;
