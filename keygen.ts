import { ethers } from "ethers";
const crypto2 = require("crypto");

const generateKeyPair = () => {
  const privateKey = crypto2.randomBytes(32).toString("hex");
  console.log("PRIVATE KEY: ", privateKey);

  const wallet = new ethers.Wallet(privateKey);
  console.log("PUBLIC ADDRESS: ", wallet.address);
}

generateKeyPair();
