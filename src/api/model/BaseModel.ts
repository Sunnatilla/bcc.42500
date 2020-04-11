export interface BaseModel {
  iin?: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
  middleNme?: string;
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
  region?: string;
  village?: string;
  street?: string;
  house?: string;
  flat?: string;
}
