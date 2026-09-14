# T3N docs friction (from 24h build)

1. Trust manifest malformed on testnet with SDK 5.10/5.11 - fetchTrustedManifest fails until a clean manifest is fetched.\n2. WASM loading under bundlers is fragile - docs invite bug reports here; plain tsx works, bundled builds need extra config.\n3. Claim-page vs docs URL drift: README points to terminal3.io/claim-page while older pages point to docs claim path - one canonical link would help.\n4. baseUrl/trustAnchor pairing is easy to mismatch (sandbox vs testnet) - a single preset string would prevent bad-manifest errors.
