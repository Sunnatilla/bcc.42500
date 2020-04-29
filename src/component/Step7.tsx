import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tickBlock: {
      marginTop: 40,
      height: 250,
      backgroundColor: "rgba(125, 206, 160, 0.1)",
      padding: 12,
    },
    txtSend: {
      fontSize: 18,
      color: "#1F7042",
      fontWeight: "bold",
      marginTop: 24,
    },
    txtFollowInstruct: {
      fontSize: 16,
      color: "#1F7042",
      marginTop: 16,
      textAlign: "center",
    },
    txtOtherCard: {
      fontSize: 22,
      fontWeight: "bold",
      marginTop: 40,
      marginBottom: 30,
    },
    imgOtherCard: {
      width: "100%",
      borderRadius: 8,
      marginBottom: 12,
    },
    txtOtherCardHashTagTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#000D1A",
      marginBottom: 12,
      marginTop: 8,
    },
    txtOtherCardDesc: {
      fontSize: 16,
      color: "#4D565F",
      marginTop: 12,
    },
    premium: {
      backgroundColor: "#000D1A",
      color: "#FFFFFF",
      fontSize: 12,
      padding: "8px 16px",
      borderRadius: 4,
    },
  })
);

const Step7 = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid
          container
          className={classes.tickBlock}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <img src="tick.svg" alt="tick" />
          </Grid>
          <Grid item>
            <Typography className={classes.txtSend}>
              Спасибо, заявка принята.
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.txtFollowInstruct}>
              Смс-соощение с номером счета или дальнейшими инструкциями будет
              направлено не позднее следующего дня с момента подачи заявки.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography className={classes.txtOtherCard}>
          Посмотрите на наши другие карты
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <img
                  src="ironcard.svg"
                  alt="ironcard"
                  className={classes.imgOtherCard}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid container>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Typography className={classes.txtOtherCardHashTagTitle}>
                      #IRonCard
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Grid container justify="flex-end">
                      <span className={classes.premium}>Премиум</span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography className={classes.txtOtherCardDesc}>
                  Первая бесконтактная металлическая карта
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <img
                  src="kartakarta.svg"
                  alt="kartakarta"
                  className={classes.imgOtherCard}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography className={classes.txtOtherCardHashTagTitle}>
                  #картакарта
                </Typography>
                <Typography className={classes.txtOtherCardDesc}>
                  Кэшбэк до 30%{" "}
                </Typography>
                <Typography className={classes.txtOtherCardDesc}>
                  Кредитный лимит до 3 млн. ₸.
                </Typography>
                <Typography className={classes.txtOtherCardDesc}>
                  Рассрочка до 12 мес.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Step7;
