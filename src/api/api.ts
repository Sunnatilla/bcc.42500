import { AuthOtpController } from "./AuthOtpController";
import { CamundaController } from "./CamundaController";
import { ReferenceController } from "./ReferenceController";
import { KatoController } from "./KatoController";

export class Api {
  authOtp = new AuthOtpController();
  camunda = new CamundaController();
  reference = new ReferenceController();
  kato = new KatoController();
}

export const api = new Api();
