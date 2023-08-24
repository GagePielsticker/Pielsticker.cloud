import { NextjsSite, StackContext } from "sst/constructs";
import { Tags } from "aws-cdk-lib";

export function Default({ stack, app }: StackContext) {

  let prefix = "";
  if (app.stage === "prod") prefix = "";
  else prefix = `${app.stage}.`;

  Tags.of(app).add("project", `${app.name}-${app.stage}`); //tag our project

  const ENV_VARIABLES = {
    REGION: app.region,
    STAGE: app.stage
  };

  const LOG_RETENTION = "five_days";

  let config = {
    logRetention: LOG_RETENTION,
    path: "next-app",
    timeout: "20 seconds",
    memorySize: "512 MB",
    customDomain: {
      domainName: `${prefix}pielsticker.cloud`,
      hostedZone: "pielsticker.cloud",
    },
    cdk: {
      distribution: {
        comment: `pielsticker.cloud ${app.stage}`,
        webAclId: "arn:aws:wafv2:us-east-1:450427128209:global/webacl/CF-FW/5f1c9adb-6e57-470f-b561-e2433cde2bb7",
      },
    },
    environment: {
      ...ENV_VARIABLES,
    },
  }


  const site = new NextjsSite(stack, "Site", config);

  stack.addOutputs({
    SiteUrl: site.url,
  });
}
