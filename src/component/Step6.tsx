import React, { useState, useEffect, useContext } from "react";
import { Grid, FormControlLabel, Button as MButton } from "@material-ui/core";
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
    tab: {
      height: 40,
      background: "#E8E8E8",
      color: "black",
      textTransform: "none",
    },
    tabActive: {
      height: 40,
      background: "#FFCF87",
      color: "black",
      textTransform: "none",
    },
  })
);

enum MapList {
  MAP,
  LIST,
}

const Step6 = () => {
  const classes = useStyles();

  const [coordinates, setCoordinates] = useState([] as Coordinate[]);
  const [mapCenter, setMapCenter] = useState({} as MapState);
  const [coordinate, setCoordinate] = useState({} as Coordinate);
  const [tab, setTab] = useState(MapList.MAP);

  var context = useContext(AppContext);

  useEffect(() => {
    api.reference.getCityBranch().then((m) => {
      setCoordinates(m);
      const coord = m.find((m) => m.code == "1310") || ({} as Coordinate);
      setCoordinate(coord);
      setMapCenter({
        center: [coord?.map?.lat || 0, coord?.map?.lng || 0],
        zoom: coord?.map?.zoom || 0,
      });
    });
    context.changeModel(
      (m) => m.count,
      (p) => 0
    );
  }, []);

  const onSelectRegion = (region: string) => {
    const coord =
      coordinates.find((m) => m.code == region) || ({} as Coordinate);
    setMapCenter({
      center: [coord?.map?.lat || 0, coord?.map?.lng || 0],
      zoom: coord?.map?.zoom || 0,
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
    changeModel(
      (g) => g.department?.code,
      (s) => marker.depCode
    );
  };

  const onSelectList = (
    value: string,
    changeModel: (
      getProp: (g: BaseModel) => any,
      setProp: (s: any) => any
    ) => void
  ) => {
    changeModel(
      (g) => g.department?.code,
      (s) => value
    );
  };

  const onSubmit = (
    model: BaseModel,
    setStep: (step: number) => void,
    setOpenError: (open: boolean) => void,
    setShowErrorMsg: (message: string) => void,
    setLoading: (loading: boolean) => void,
    changeModel: (
      getProp: (g: BaseModel) => any,
      setProp: (s: any) => any
    ) => void
  ) => {
    if (!!model.department?.code) {
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
            setShowErrorMsg(
              "Введеный номер телефона не является доверенным. Просим обратиться в отделение банка."
            );
          } else if (
            model.clientExist.data.length == 0 &&
            model.phoneExist.data.length == 0
          ) {
            if (model.createClientResult.data.p_id == "null") {
              if (model.count > 3) {
                setShowErrorMsg("Просим обратиться в отделение банка.");
              } else {
                setOpenError(true);
                changeModel(
                  (g) => g.count,
                  (s) => s++
                );
              }
            } else if (model.controlCardError == true) {
              if (model.count > 3) {
                setShowErrorMsg("Просим обратиться в отделение банка.");
              } else {
                setOpenError(true);
                changeModel(
                  (g) => g.count,
                  (s) => s++
                );
              }
            } else if (model.openClientCardResult.data.p_errmsg != "null") {
              if (model.count > 3) {
                setShowErrorMsg("Просим обратиться в отделение банка.");
              } else {
                setOpenError(true);
                changeModel(
                  (g) => g.count,
                  (s) => s++
                );
              }
            } else {
              setStep(6);
            }
          } else if (
            model.clientExist.data.length > 0 &&
            model.phoneExist.data.length > 0
          ) {
            if (
              model.client.taxIdentificationNumber.code !=
              model.phoneExist.data[0].iin
            ) {
              setShowErrorMsg(
                "Введеный номер телефона принадлежит другому клиенту. Просим обратиться в отделение банка."
              );
            } else if (model.checkResult?.product?.state == 1) {
              setShowErrorMsg(
                "Уважаемый клиент! У вас уже имеется действующая Социальная карта."
              );
            } else if (model.checkResult2?.product?.state == 1) {
              setShowErrorMsg(
                "Уважаемый клиент! У вас уже имеется действующая Социальная виртуальная карта."
              );
            } else {
              setStep(6);
            }
          } else {
            setStep(6);
          }
        })
        .catch((e: any) => {
          setLoading(false);
          if (!!model.count && model.count > 3) {
            setShowErrorMsg("Просим обратиться в отделение банка.");
          } else {
            setOpenError(true);
            changeModel(
              (g) => g.count,
              (s) => s++
            );
          }
        });
    } else {
      setShowErrorMsg("Выберите отделение на карте");
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
            <Grid container spacing={1}>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <MButton
                  className={
                    tab == MapList.MAP ? classes.tabActive : classes.tab
                  }
                  fullWidth
                  onClick={() => setTab(MapList.MAP)}
                >
                  Карта
                </MButton>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <MButton
                  className={
                    tab == MapList.LIST ? classes.tabActive : classes.tab
                  }
                  fullWidth
                  onClick={() => setTab(MapList.LIST)}
                >
                  Список
                </MButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {tab == MapList.MAP && (
              <YMaps className={classes.map}>
                <Map className={classes.map} state={mapCenter}>
                  {coordinate.markers?.map((marker, i) => (
                    <Placemark
                      key={i}
                      geometry={[marker.lat || 0, marker.lng || 0]}
                      onClick={() => onSelectMarker(marker, changeModel)}
                      options={
                        marker.depCode == model.department?.code
                          ? { iconColor: "red" }
                          : { iconColor: "#1E98FF" }
                      }
                    />
                  ))}
                </Map>
              </YMaps>
            )}
            {tab == MapList.LIST && (
              <TextField
                variant="filled"
                fullWidth={true}
                label="Выберите отделение"
                select
                SelectProps={{
                  native: true,
                }}
                value={model.department?.code || ""}
                onChange={(e: any) => onSelectList(e.target.value, changeModel)}
                required
              >
                <option></option>
                {coordinate.markers?.map((m, i) => (
                  <option key={i} value={m.depCode}>
                    {`${m.name} - ${m.address}`}
                  </option>
                ))}
              </TextField>
            )}
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
              label="Доставка курьером"
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
                  setLoading,
                  changeModel
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
