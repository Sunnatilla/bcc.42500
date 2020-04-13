import { server } from "./axios";

const webConfigEnv = (window as any).env;

export interface CodeName {
  code?: string;
  name?: string;
  description?: string;
}

export class ReferenceController {
  async getIdentityTypes(): Promise<CodeName[]> {
    return server.get(`/reference/api/generic/Id`, {
      baseURL: webConfigEnv.GREEN_API,
    });
  }
}
