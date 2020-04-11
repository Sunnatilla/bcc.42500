import { CodeValue } from "../ReferenceController";

export interface BaseModel {
  iin?: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  birthDate?: string;
  identity?: Identity;
  address?: Address;
}

interface Identity {
  type?: string;
  number?: string;
  issue?: string;
  issueDate?: string;
  expireDate?: string;
}

interface Address {
  region?: CodeValue;
  district?: CodeValue;
  village?: string;
  street?: string;
  house?: string;
  flat?: string;
}
