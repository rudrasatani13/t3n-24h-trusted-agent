# T3N trusted agent - walkthrough (paste into public Google Doc for submission)

## What I built

Minimal trusted agent on T3N testnet: handshake + authenticate + one shielded action hook.
Repo: https://github.com/rudrasatani13/t3n-24h-trusted-agent

## Steps

1. Claimed account/key/test tokens at https://www.terminal3.io/claim-page\n2. npm i\n3. T3N_DEMO_KEY=0x... npm run quickstart (expect authenticated DID)\n4. npm run agent (expect agent ready)\n5. Screenshots: terminal showing DID + repo + claim page\n+
## Bugs found

See BUGS.md (trust manifest malformed on testnet 5.10/5.11, WASM bundler fragility, claim URL drift, baseUrl mismatch).
