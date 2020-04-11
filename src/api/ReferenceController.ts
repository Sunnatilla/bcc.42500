import { server } from "./axios";

const webConfigEnv = (window as any).env;

export interface CodeValue {
  code?: string;
  value?: string;
}

export class ReferenceController {
  async getIdentityTypes(): Promise<CodeValue[]> {
    return server.get(`/reference/api/generic/Id`, {
      baseURL: webConfigEnv.GREEN_API,
    });
  }
}
