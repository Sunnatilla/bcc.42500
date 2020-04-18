import React, { useState } from "react";
import iassign from "immutable-assign";
import {
  Header,
  Step1,
  Step2,
  Stepper,
  Step3,
  Step4,
  Step5,
  Step6,
} from "./component";
import "./App.css";
import { BaseModel } from "./api/model/BaseModel";
import { Snackbar } from "@material-ui/core";
import { Alert as MuiAlert } from "@material-ui/lab";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";

export const AppContext = React.createContext({
  model: { identity: {}, address: {} } as BaseModel,
  setStep: (step: number) => {},
  changeModel: (getProp: (g: BaseModel) => any, setProp: (s: any) => any) => {},
  setOpenError: (open: boolean) => {},
  setLoading: (loading: boolean) => {},
});

const Alert = (props: any) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

function App() {
  const [step, setStep] = useState(0);
  const [model, setModel] = useState({
    taxIdentificationNumber: {
      code: "",
    },
    contactData: [
      {
        type: { code: "MOB", value: "82" },
        kind: { name: "Лич", value: "1", code: "PERSON", key: "8" },
        phoneNumber: "",
        provider: "",
        isDefault: true,
      },
    ],
    identity: [{ type: {}, issueCountry: "Казахстан" }],
    address: [
      {
        type: { code: "002" },
        country: "Казахстан",
        countryCode: "KZ",
        region: {},
        district: { name: "" },
        city: { name: "" },
        cityPart: { name: "" },
        street: { name: "" },
        houseNumber: { code: "" },
        flat: { name: "" },
        cityZone: { name: "" },
        zip: "",
        fullAddress: "Казахстан",
      },
    ],
  } as BaseModel);
  const [openError, setOpenError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const changeModel = (
    getProp: (g: BaseModel) => any,
    setProp: (s: any) => any
  ) => {
    setModel(iassign(model, getProp, setProp, null));
  };

  const handleClose = () => {
    setOpenError(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openError}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          Возникла непредвиденная ошибка!
        </Alert>
      </Snackbar>
      <BlockUi tag="div" blocking={isLoading}>
        <AppContext.Provider
          value={{ model, setStep, changeModel, setOpenError, setLoading }}
        >
          <div>
            <Header showCard={step !== 5} />
            {step === 0 && (
              <Stepper title="Шаг 1: Заполнение данных" percent={0} step={1}>
                <Step1 />
              </Stepper>
            )}
            {step === 1 && (
              <Stepper
                title="Шаг 2: Подтверждение номера"
                percent={20}
                step={2}
              >
                <Step2 />
              </Stepper>
            )}
            {step === 2 && (
              <Stepper
                title="Шаг 3: Заполнение личных данных"
                percent={40}
                step={3}
              >
                <Step3 />
              </Stepper>
            )}
            {step === 3 && (
              <Stepper
                title="Шаг 4: Документ, удостверяющий личность"
                percent={60}
                step={4}
              >
                <Step4 />
              </Stepper>
            )}
            {step === 4 && (
              <Stepper title="Шаг 5: Адреса" percent={80} step={5}>
                <Step5 />
              </Stepper>
            )}
            {step === 5 && <Step6 />}
          </div>
        </AppContext.Provider>
      </BlockUi>
    </div>
  );
}

export default App;
