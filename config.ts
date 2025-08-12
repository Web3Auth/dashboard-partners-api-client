const dotenv = require("dotenv");

dotenv.config();

const loadEnv = () => {
  const env = process.env;
  if (env.PUBLIC_ADDRESS === undefined || env.PUBLIC_ADDRESS === "") {
    throw new Error("PUBLIC_ADDRESS is not set");
  }
  if (env.PRIVATE_KEY === undefined || env.PRIVATE_KEY === "") {
    throw new Error("PRIVATE_KEY is not set");
  }
  if (env.ORGANIZATION_ID === undefined || env.ORGANIZATION_ID === "") {
    throw new Error("ORGANIZATION_ID is not set");
  }
  if (env.PROJECT_ID === undefined || env.PROJECT_ID === "") {
    throw new Error("PROJECT_ID is not set");
  }
  return env;
}

loadEnv();

export default {
  dashboardAPIBaseURL: "https://api-dashboard.web3auth.io",
  publicAddress: process.env.PUBLIC_ADDRESS,
  privateKey: process.env.PRIVATE_KEY,
  organizationId: Number(process.env.ORGANIZATION_ID),
  projectId: process.env.PROJECT_ID,
}