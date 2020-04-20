import { CodeName } from "../ReferenceController";

export interface BaseModel {
  taxIdentificationNumber?: CodeName;
  contactData?: ContactData[];
  firstName?: string;
  lastName?: string;
  middleName?: string;
  birthDate?: string;
  identDocument?: Identity[];
  addresses?: Address[];
}

export class ContactData {
  nord?: number;
  type?: CodeName;
  kind?: CodeName;
  phoneNumber?: string;
  isDefault?: boolean;
  provider?: string;
}

export interface Identity {
  nord?: number;
  type?: CodeName;
  typeExtCoderd?: string;
  number?: string;
  issueDate?: Date | string;
  issueCountry?: string;
  expirationDate?: Date | string;
  issuer?: string;
  isDefault?: boolean;
  isArchival?: boolean;
}

export interface Address {
  nord?: number;
  type?: CodeName;
  country?: string;
  countryCode?: string;
  isCityRegion?: boolean;
  region?: CodeName;
  district?: CodeName;
  city?: CodeName;
  cityPart?: CodeName;
  street?: CodeName;
  houseNumber?: CodeName;
  flat?: CodeName;
  zip?: string;
  kind?: CodeName;
  okato?: string;
  fullAddress?: string;
  cityZone?: CodeName;
  village?: CodeName;
  villageType?: CodeName;
  streetType?: CodeName;
}
