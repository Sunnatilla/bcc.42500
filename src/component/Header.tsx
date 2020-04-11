import React from "react";
import { Grid, Typography, Card } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: "#000D1A",
      fontSize: 28,
      fontWeight: "bold",
      marginTop: 60,
    },
    cardBlock: {
      marginTop: 32,
    },
    card: {
      marginBottom: 60,
      width: "100%",
    },
    hashTagSocialCard: {
      fontSize: 16,
      color: "#000D1A",
      fontWeight: "bold",
    },
    description: {
      fontSize: 14,
      color: "#000D1A",
    },
  })
);

const Header = (props: { showCard: boolean }) => {
  const classes = useStyles();
  const { showCard } = props;
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <img src="logo-bcc.svg" alt="logo" />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography className={classes.title}>Заявка на карту</Typography>
      </Grid>
      {showCard && (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid container spacing={4} className={classes.cardBlock}>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <img
                src="socialCard.svg"
                alt="socialCard"
                className={classes.card}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <Grid container alignItems="center">
                <Grid item>
                  <Typography className={classes.hashTagSocialCard}>
                    #socialCard
                  </Typography>
                  <Typography className={classes.description}>
                    Для получений соц.пособий
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Header;
