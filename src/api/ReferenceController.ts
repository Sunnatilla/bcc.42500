import { server } from "./axios";

const webConfigEnv = (window as any).env;

export interface CodeName {
  code?: string;
  name?: string;
  value?: string;
  description?: string;
  key?: string;
  prefix?: string;
}

export interface Coordinate {
  map: Map;
  markers: Marker[];
  code: string;
  value: string;
}

export interface Map {
  zoom?: number;
  lat?: number;
  lng?: number;
}

export interface Marker {
  name?: string;
  lat?: number;
  lng?: number;
  address?: string;
  depCode?: string;
}

export class ReferenceController {
  async getIdentityTypes(): Promise<CodeName[]> {
    return server.get(`/api/generic/Id`, {
      baseURL: webConfigEnv.REFERENCE_API,
    });
  }

  async getCityBranch(): Promise<Coordinate[]> {
    return server.get(`/api/generic/cityBranch`, {
      baseURL: webConfigEnv.REFERENCE_API,
    });
  }
}
