import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { YMaps, Map, Placemark, MapState } from "react-yandex-maps";
import { TextField, Button } from ".";
import { api } from "../api/ApiRest";
import { Coordinate, Marker } from "../api/ReferenceController";
import { AppContext } from "../App";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "250px",
      width: "100%",
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
    setCoordinate(coord);
    setMapCenter({
      center: [coord?.map.lat || 0, coord?.map.lng || 0],
      zoom: coord?.map.zoom || 0,
    });
  };

  return (
    <AppContext.Consumer>
      {({ model }) => (
        <Grid container spacing={2} className={classes.root}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              variant="filled"
              fullWidth={true}
              label="Тип документа"
              select
              SelectProps={{
                native: true,
              }}
              value={coordinate.code || ""}
              onChange={(e: any) => onSelectRegion(e.target.value)}
              required
            >
              {coordinates?.map((m) => (
                <option value={m.code}>{m.value}</option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <YMaps className={classes.root}>
              <Map className={classes.root} defaultState={mapCenter}>
                {coordinate.markers?.map((marker) => (
                  <Placemark
                    geometry={[marker.lat || 0, marker.lng || 0]}
                    onClick={() => setSelectedMarker(marker)}
                    options={{ iconColor: "red" }}
                  />
                ))}
              </Map>
            </YMaps>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Button style={{ marginTop: 24 }} fullWidth={true} type="submit">
              Подтвердить
            </Button>
          </Grid>
        </Grid>
      )}
    </AppContext.Consumer>
  );
};

export default Step6;
