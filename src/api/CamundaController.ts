import { server } from "./axios";

const webConfigEnv = (window as any).env;

export class CamundaController {
  async start(variables: any): Promise<any> {
    return server.post(
      `/process/start`,
      {
        processDefinitionKey: "social_card",
        variables: { ...variables, env: webConfigEnv },
      },
      {
        baseURL: webConfigEnv.GREEN_API,
      }
    );
  }
}
