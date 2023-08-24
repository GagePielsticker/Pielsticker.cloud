import { SSTConfig } from "sst";
import { Default } from "./stacks/Default";

export default {
  config(_input) {
    return {
      name: "PCLOUD",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(Default);

    if (app.stage !== "prod") {
      app.setDefaultRemovalPolicy("destroy");
    }
  }
} satisfies SSTConfig;
