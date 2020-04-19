import { server } from "./axios";

const webConfigEnv = (window as any).env;

export interface CodeName {
  code?: string;
  name?: string;
  value?: string;
  description?: string;
  key?: string;
}

export class ReferenceController {
  async getIdentityTypes(): Promise<CodeName[]> {
    return server.get(`/api/generic/Id`, {
      baseURL: webConfigEnv.REFERENCE_API,
    });
  }
}
