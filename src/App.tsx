import React, { useState } from "react";
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

export const AppContext = React.createContext({
  setStep: (step: number) => {},
});

function App() {
  const [step, setStep] = useState(0);

  return (
    <AppContext.Provider value={{ setStep }}>
      <div>
        <Header showCard={step !== 5} />
        {step === 0 && (
          <Stepper title="Шаг 1: Заполнение данных" percent={0} step={1}>
            <Step1 />
          </Stepper>
        )}
        {step === 1 && (
          <Stepper title="Шаг 2: Подтверждение номера" percent={0} step={2}>
            <Step2 />
          </Stepper>
        )}
        {step === 2 && (
          <Stepper title="Шаг 3: Заполнение личных данных" percent={0} step={3}>
            <Step3 />
          </Stepper>
        )}
        {step === 3 && (
          <Stepper title="Шаг 3: Заполнение личных данных" percent={0} step={4}>
            <Step4 />
          </Stepper>
        )}
        {step === 4 && (
          <Stepper title="Шаг 3: Заполнение личных данных" percent={0} step={5}>
            <Step5 />
          </Stepper>
        )}
        {step === 5 && <Step6 />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
