<!--
PROMPT-QUALITY GATE (GOVERNANCE §2) — clear all 8 before marking this file "done":
[x] a. DoD quantified      — Acceptance checks §6 enumerate four binary YES/NO checks, each tied to a named DoD item.
[x] b. Scope manifest      — Four DoD items listed in SAC-1 (task-7-report.md §manifest); reconciled with line-evidence in SAC-3 before commit.
[x] c. Levers, deliberate  — E0 is a receive-and-record stage: decomposition and N-attempts are N/A (no complex judgment); effort calibrated proportionately (receive, check legibility, pin, hand off); no ritual MAX.
[x] d. Countermeasures     — Context-rot: seed pinned to top of context (F4 countermeasure, Step 3); satisficing: scope manifest + acceptance checks; sycophancy: N/A at E0 — no verdict or synthesis produced; hallucination: seed.md records operator input verbatim — model generates only the metadata header.
[x] e. Cross-family audit  — codex (gpt, task-7-codex-audit.txt) rated all 4 DoD items done; 5 minor findings adjudicated (check-1 tightened; path-form matches the 5 law files → Task 20 normalizes; referent cites both §3+I0). Recorded B-0012.
[x] f. Alignment trace     — UP: E0 → engine stages table (engine/README.md) → GOVERNANCE.md §2 → engine mission (domain-agnostic ingestion/research). DOWN: receive-and-record protocol is coherent with the stage's one-line purpose in the README; no contradictions found.
[x] g. Persisted           — Commit records this file; build LEDGER entry (task-7-report.md §manifest) links to it; reachable from REGISTER task entry.
[x] h. Honest ceiling      — §7 (Honest ceiling) names the specific residual failure mode: an operator who omits a critical requirement entirely; E0 anchors only what was given.
-->

# E0 — Intake

### Binding · Load WHEN:
INITIATOR loads this stage at the very start of a new engine session, before any other stage. Trigger: the operator provides input of any kind — a sentence, a paragraph, a document, a URL, a screenshot description, or any combination. There is no prerequisite stage. E0 is complete once `seed.md` is produced and the handoff to E1 is made.

## Purpose (one paragraph)
E0 is the engine's first contact with the operator's raw input. Its job is narrow but load-bearing: receive whatever the operator provides — in any form, at any length, with any degree of apparent completeness — run a minimal legibility check, write the input verbatim to `seed.md`, and anchor `seed.md` at the top of working context so that later stages re-read the original rather than a recollected version of it. E0 makes no inference about whether the input is a complete specification; it does not begin solving, designing, or synthesizing. If the input is intelligible, E0 hands `seed.md` to E1 for intent-completion. If the input is not intelligible (genuinely unreadable or wholly empty), E0 surfaces the specific problem and requests a re-submission. The stage exists because every later stage's quality depends on what it reads as the starting point — and what it reads must be the operator's actual words, not a summarized or recollected proxy.

## Kalshi referent (what proven mechanism this generalizes)
**IRON_LAW.md §3 (Inputs)** and **adapter/notes/07_adapter_design.md Step I0 (Ingest & sanity-check transcript)** from the Kalshi alpha-engine and adapter projects. In their original context, IRON_LAW §3 established that the primary input — the transcript — is a distinct artifact, received before any analysis, and mined completely in Phase 0, making intake a *receive-and-record* operation rather than a *solve* operation. Step I0 operationalized this as a deterministic pipeline step that ingests the document, performs a sanity-check, and places the document at the top of context (the F4 countermeasure: doc-at-top-of-context) to prevent the lost-in-the-middle degradation that corrupts long-session recall of a primary source. The pattern — *receive any input without completeness assumptions; anchor it at the top of context; defer all interpretation to a later stage* — is domain-general and applies unchanged to any ingestion pipeline regardless of domain.

## Protocol (the steps the INITIATOR executes)

### Step 1 — Receive the raw operator input in any shape
Accept whatever the operator provides without requesting missing items. Valid input shapes include, but are not limited to:

- A single sentence or short ask
- A paragraph or multi-paragraph brief
- A long transcript or conversation history
- One or more URLs pointing to reference material
- A description of screenshots or visual references (or the screenshots themselves, if the runtime supports them)
- An uploaded document, set of notes, or doc dump
- A partially formed specification or any combination of the above

No completeness is assumed for any of these shapes. A one-sentence ask is a valid seed. A multi-document dump is a valid seed. The sufficiency of the input is not evaluated here — that judgment belongs to E1.

### Step 2 — Perform a legibility check
Verify that the input can be processed: it is in a language the INITIATOR can work in, it conveys at least one identifiable topic or goal (however vague), and it is not wholly corrupted, empty, or irrecoverably garbled.

- **If the input passes:** proceed to Step 3.
- **If the input fails** (wholly unintelligible, corrupted, or empty — not merely vague): surface the specific problem to the operator in plain language, request a re-submission, and do not proceed.

*Calibration note: "unclear" and "unintelligible" are different. A vague or incomplete ask passes the legibility check — vagueness is for E1's intent-completion interview to resolve. Only a genuinely unreadable submission (encoding corruption, complete garbling, empty file) fails this check. When in doubt, prefer passing a seed to E1 over blocking it here.*

### Step 3 — Anchor seed.md at the top of context (F4 countermeasure)
Write the raw input to `seed.md` exactly as received — no paraphrase, no extraction, no summary. Prepend a minimal metadata header:

```
---
seed_received: <ISO date/time>
input_shapes: <comma-separated list of shapes present>
status: [UNVERIFIED SEED — completeness not assumed; interpret in E1]
---
```

Place `seed.md` at the top of working context — before any analysis notes, before any stage logs, before any other artifact. This is the F4 countermeasure: a primary source anchored at the top of context is re-read by subsequent stages rather than recalled from an increasingly degraded in-context memory. The metadata header is the only model-generated content added to the seed; the body is the operator's words verbatim.

Persist `seed.md` to the project's working directory at a stable path (e.g., `work/<session-id>/seed.md`) so it survives a context reset and can be re-loaded as the top-of-context anchor on resume. A revised submission from the operator produces a new `seed_v2.md`; it does not replace the original.

### Step 4 — Hand off to E1; do not act on the seed as a specification
E0's work is complete once `seed.md` is anchored and persisted. Do not begin solving, designing, questioning, or synthesizing from the seed's content. Even if the seed appears to be a complete, well-formed specification, treat it as a seed — completeness is not assumed at this stage. The intent-completion work belongs to E1 (Operator interview & intent-completion), which reads `seed.md` and begins structured elicitation.

Any inference drawn from `seed.md` about what the operator "really wants" — made before E1 is complete — is INTERPRETIVE under L-E and must not gate any downstream stage or decision.

## Inputs / Outputs

**Inputs:**
- **Raw operator input** — the artifact or combination of artifacts the operator provides at the start of the session. Format: any (text, URL list, screenshot description, document, or mixed). Location: delivered by the operator at session start; this is the external trigger for E0.

**Outputs:**
- **`seed.md`** — the raw operator input recorded verbatim, with a metadata header prepended. Format: Markdown file, UTF-8. Location: (1) at the top of working context for the current session — the load-bearing anchor position; (2) persisted to `work/<session-id>/seed.md` for durability across context resets. This is the artifact E1 consumes; its body must be an exact copy of the operator's input, not a paraphrase, not an extraction, not a summary.

## Acceptance checks (binary)

1. **Heterogeneous input shapes enumerated and completeness disclaimed?** YES if Step 1 names at least three distinct input shapes, frames the list as non-exhaustive ("include, but are not limited to" — so the protocol accepts ANY shape, not only the examples), and explicitly states that completeness is not assumed for any of them. NO if the list is framed as exhaustive, only one input shape is named, or completeness is implicitly assumed at intake.

2. **Top-of-context pin present and named?** YES if Step 3 explicitly places `seed.md` at the top of working context and identifies this as the F4 countermeasure (doc-at-top-of-context). NO if the seed is written to a file but its position in context is unspecified or unnamed.

3. **`seed.md` fully specified in Inputs / Outputs?** YES if `seed.md` appears as an output in the Inputs / Outputs section with its format (Markdown), both locations (top of context + persisted path), and a statement that it is the artifact E1 consumes. NO if `seed.md` is mentioned only inside the Protocol without an Inputs / Outputs entry.

4. **Hand-off instruction and interpretation prohibition present?** YES if Step 4 contains an explicit prohibition on solving, designing, or synthesizing before E1, and names E1 as the stage that receives `seed.md` for intent-completion. NO if the prohibition is absent or the handoff is only implied.

## Honest ceiling
E0 cannot protect against an operator who omits a critical requirement entirely. If the seed contains a gap — an unstated constraint, a load-bearing assumption the operator forgot to mention, or a cardinal requirement the operator did not know they had — E0 has no mechanism to detect it: the stage anchors only what was given. The seed is declared `[UNVERIFIED SEED — completeness not assumed]`; it is verified to be *legible*, not *sufficient*. An operator who submits a seed that is intelligible but critically incomplete will not be caught by E0. The earliest catch-point for incompleteness is E1's intent-completion interview; the earliest catch-point for hidden structural assumptions is E2/E3's domain-research and scar-tissue stages.

## Cross-references
- **E1** (`stages/E1_operator_interview.md`) — E0's direct downstream consumer. E1 reads `seed.md` as its primary input and begins the structured intent-completion interview. E0 must not begin any of E1's work; the handoff is the end of E0's scope.
- **L-E** (`laws/L-E_evidence_over_assertion.md`) — `seed.md` records operator-stated input that has not been independently verified. Any downstream stage that draws conclusions from seed content must apply L-E's quarantine rule (Step 4): mark seed-derived claims as `[found — unverified]` until corroborated by research or operator confirmation in E1.
- **L-B** (`laws/L-B_3tier_memory.md`) — `seed.md` is the engine's first persisted artifact; L-B's memory integrity invariants apply from this point. The seed is treated as immutable input (analogous to the Ledger's append-only principle): it is not edited after production. A revised operator submission produces a new versioned file, not a replacement.
- **GOVERNANCE.md §2** — the 8-line prompt-quality gate this file must clear; gate line (e) is the controller's responsibility and requires a codex audit result recorded in the LEDGER before this file is finalized.
