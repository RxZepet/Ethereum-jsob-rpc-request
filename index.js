const axios = require('axios');

// HTTPS URL from Alchemy
const ALCHEMY_URL = "https://eth-mainnet.g.alchemy.com/v2/ZULBLKb6XxyXRPcUjX0gBFS4Wu_hNa2G";

axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_getBlockByNumber",
  params: [
    "0xb443", // block 46147
    false  // retrieve the full transaction object in transactions array
  ]
}).then((response) => {
  console.log(response.data.result);
});
