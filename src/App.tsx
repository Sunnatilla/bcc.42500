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
  Step7,
} from "./component";
import "./App.css";
import { BaseModel } from "./api/model/BaseModel";
import { Snackbar } from "@material-ui/core";
import { Alert as MuiAlert } from "@material-ui/lab";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import { YMInitializer } from "react-yandex-metrika";
import { KeyboardBackspace } from "@material-ui/icons";

export const AppContext = React.createContext({
  model: {} as BaseModel,
  setStep: (step: number) => {},
  changeModel: (getProp: (g: BaseModel) => any, setProp: (s: any) => any) => {},
  setOpenError: (open: boolean) => {},
  setShowErrorMsg: (message: string) => {},
  setLoading: (loading: boolean) => {},
  sended: false,
  setSended: (sended: boolean) => {},
});

const Alert = (props: any) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

function App() {
  const [step, setStep] = useState(0);
  const [sended, setSended] = useState<boolean>(false);
  const [model, setModel] = useState({
    colvirId: undefined,
    code: "",
    department: { code: "KS8" },
    type: "",
    fullName: "",
    shortName: "",
    firstName: "",
    isDelivery: false,
    fullNameLat: "",
    fullAddressString: "",
    lastName: "",
    firstNameLat: "",
    lastNameLat: "",
    middleName: "",
    birthDate: undefined,
    birthDateString: "",
    birthPlace: { name: "Казахстан", code: "KZ" },
    roles: "CLI=1",
    taxIdentificationNumber: {},
    state: {},
    status: {},
    typeExt: {},
    kod: {},
    isResident: false,
    identicalAddress: false,
    sex: "M",
    fromDate: "",
    dreg: "",
    autCode: {},
    sectorId: {
      code: "9",
      name:
        "Домашние хоз-ва (население. частные предприниматели без образования юр.лица и ин",
    },
    country: { name: "Казахстан", code: "KZ" },
    taxCountry: { name: "Казахстан", code: "KZ" },
    residentCountry: { name: "Казахстан", code: "KZ" },
    citizenCountry: { name: "Казахстан", code: "KZ" },
    identDocument: [{ type: {}, issueCountry: "Казахстан" }],
    addresses: [
      {
        type: { code: "002" },
        country: "Казахстан",
        countryCode: "KZ",
        region: {},
        district: { name: "" },
        city: { name: "" },
        village: { name: "" },
        street: { name: "" },
        houseNumber: { name: "" },
        flat: { name: "" },
        cityZone: { name: "" },
        zip: "",
        fullAddress: "Казахстан",
      },
    ],
    contactData: [
      {
        type: { code: "MOB", value: "82" },
        kind: { name: "Лич", value: "1", code: "PERSON", key: "8" },
        phoneNumber: "",
        provider: "",
        isDefault: true,
      },
      {},
    ],
    deleteContacts: [],
    additionalInfo: [{}],
    hasChanges: false,
    count: 0,
  } as BaseModel);
  const [openError, setOpenError] = useState(false);
  const [openErrorMsg, setOpenErrorMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setLoading] = useState(false);

  const changeModel = (
    getProp: (g: BaseModel) => any,
    setProp: (s: any) => any
  ) => {
    setModel(iassign(model, getProp, setProp, null));
  };

  const setShowErrorMsg = (message: string) => {
    setErrorMsg(message);
    setOpenErrorMsg(true);
  };

  return (
    <div>
      <YMInitializer
        accounts={[61898595]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          trackHash: true,
        }}
      />
      <Snackbar
        style={{ zIndex: 3000 }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openError}
        autoHideDuration={6000}
        onClose={() => setOpenError(false)}
      >
        <Alert onClose={() => setOpenError(false)} severity="error">
          Возникла непредвиденная ошибка. Попробуйте через 15 мин.
        </Alert>
      </Snackbar>
      <Snackbar
        style={{ zIndex: 3000 }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openErrorMsg}
        autoHideDuration={6000}
        onClose={() => setOpenErrorMsg(false)}
      >
        <Alert onClose={() => setOpenErrorMsg(false)} severity="error">
          {errorMsg}
        </Alert>
      </Snackbar>
      <BlockUi tag="div" blocking={isLoading}>
        <AppContext.Provider
          value={{
            model,
            setStep,
            changeModel,
            setOpenError,
            setShowErrorMsg,
            setLoading,
            sended,
            setSended,
          }}
        >
          <div>
            <Header showCard={step !== 6} />
            {step > 0 && step !== 6 && (
              <div onClick={() => setStep(step - 1)} className="back">
                <KeyboardBackspace /> Назад
              </div>
            )}
            {step === 0 && (
              <Stepper title="Шаг 1: Заполнение данных" percent={0} step={1}>
                <Step1 />
              </Stepper>
            )}
            {step === 1 && (
              <Stepper
                title="Шаг 2: Подтверждение номера"
                percent={17}
                step={2}
              >
                <Step2 />
              </Stepper>
            )}
            {step === 2 && (
              <Stepper
                title="Шаг 3: Заполнение личных данных"
                percent={33}
                step={3}
              >
                <Step3 />
              </Stepper>
            )}
            {step === 3 && (
              <Stepper
                title="Шаг 4: Документ, удостверяющий личность"
                percent={50}
                step={4}
              >
                <Step4 />
              </Stepper>
            )}
            {step === 4 && (
              <Stepper title="Шаг 5: Адрес" percent={67} step={5}>
                <Step5 />
              </Stepper>
            )}
            {step === 5 && (
              <Stepper
                title="Шаг 6: Выберите отделение банка"
                percent={84}
                step={5}
              >
                <Step6 />
              </Stepper>
            )}
            {step === 6 && <Step7 />}
          </div>
        </AppContext.Provider>
      </BlockUi>
    </div>
  );
}

export default App;
