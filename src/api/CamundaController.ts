import { server } from "./axios";

const webConfigEnv = (window as any).env;

export class CamundaController {
  async start(variables: any): Promise<any> {
    return server.post(
      `/inline/api/process/start`,
      {
        processDefinitionKey: "social_card",
        variables,
      },
      {
        baseURL: webConfigEnv.GREEN_API,
      }
    );
  }
}
