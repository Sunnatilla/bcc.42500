import React from "react";
import { Grid, Button, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppContext } from "../App";
import { TextField } from ".";

const Step4 = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <TextField
          variant="outlined"
          fullWidth={true}
          placeholder="Тип документа"
          select
        >
          <MenuItem></MenuItem>
        </TextField>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <TextField
            placeholder="Номер документа"
            variant="outlined"
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <TextField
            variant="outlined"
            fullWidth={true}
            placeholder="Кем выдан"
            select
          >
            <MenuItem></MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                placeholder="Дата выдачи"
                variant="outlined"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                placeholder="Дата истечение"
                variant="outlined"
                fullWidth={true}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Step4;
