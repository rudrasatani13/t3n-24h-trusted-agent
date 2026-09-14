import { T3nClient, loadWasmComponent, createEthAuthInput, eth_get_address, metamask_sign, fetchTrustedManifest } from "@terminal3/t3n-sdk";

const baseUrl = process.env.T3N_NODE_URL ?? "https://sandbox.t3n.terminal3.io";
const privateKey = process.env.T3N_DEMO_KEY;
if (!privateKey) {
  console.error("Missing T3N_DEMO_KEY - claim at https://www.terminal3.io/claim-page");
  process.exit(1);
}
const address = eth_get_address(privateKey);
const wasmComponent = await loadWasmComponent();
const client = new T3nClient({
  baseUrl,
  trustAnchor: await fetchTrustedManifest("sandbox", { baseUrl }),
  wasmComponent,
  handlers: { EthSign: metamask_sign(address, undefined, privateKey) },
});
await client.handshake();
const did = await client.authenticate(createEthAuthInput(address));
console.log("authenticated DID:", did);
