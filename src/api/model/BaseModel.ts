import { CodeName } from "../ReferenceController";

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

export interface Identity {
  type?: string;
  number?: string;
  issue?: string;
  issueDate?: string;
  expireDate?: string;
}

export interface Address {
  region?: CodeName;
  district?: CodeName;
  village?: string;
  street?: string;
  house?: string;
  flat?: string;
}
