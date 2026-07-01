# Ledger (Tier 1) — append-only

> The immutable record of this run. Append one entry per action / finding / decision / null-result. Never edit or delete a prior entry (L-B). Entry format:
>
> ```
> L-NNNN
> Date: YYYY-MM-DD
> Type: action | finding | decision | null-result | correction
> <content that lets a fresh context reconstruct what happened and why>
> ```
>
> Load-bearing entries also carry a `Decided at: ~Xk context` line; a high-context decision is provisional until reproduced cold (L-C).

<!-- Empty. The engine appends L-0001 at E0 (intake). -->
