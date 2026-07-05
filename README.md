# Shattered Lands

WebXR MMO concept on Polygon — on-chain land ownership plus a procedural 3D world.

## Structure
- `tiles/` — NFT land-ownership system (Truffle/Solidity migrations + a 3D tile viewer), formerly `shatteredTiles`
- `world/` — procedural hex-grid biome generator, formerly `shatteredWorld` (live at `shattered-world-intp.vercel.app`)

*Consolidated from `shatteredTiles` + `shatteredWorld` (2026-07-05); full history preserved. The sibling repos `ShatteredFront`/`ShatteredBack` were retired earlier.*

> Note: `tiles/.secret` is a 65-char hex string (not a valid BIP39 seed — inert), carried over from the original repo.
