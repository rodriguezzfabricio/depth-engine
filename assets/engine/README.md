# Engine — Ingestion / Question-Research Engine

This engine is a linear staged pipeline that an INITIATOR agent walks once on a new domain. Its purpose is to manufacture, in a single instantiation, the research depth and adversarial rigor that a long-lived project earns through use → surprise → reopen iteration.

This build is governed by [`_build/GOVERNANCE.md`](_build/GOVERNANCE.md).

> **Path note:** Throughout the engine files, `GOVERNANCE.md §N` / `GOVERNANCE §N` refers to `engine/_build/GOVERNANCE.md` §N.

---

## Run order

**Laws L-A through L-E are loaded and obeyed throughout** — they bind every stage from E0 to E11.

**Stages are walked E0 → E11 in sequence.** Each stage's entry condition (stated in its `Binding · Load WHEN:` section) must be met before the next begins.

---

## Convergence modes

Project-type is set at E1 and determines how E8 declares convergence.

| Mode | Trigger | Convergence criterion |
|---|---|---|
| **Build** (total-aspect-coverage) | Project-type = build | Every E5 aspect answered to build-depth; no new materially-distinct question would change any aspect |
| **Decision** (decision-saturation) | Project-type = decision | No new materially-distinct question would change the central decision |

Both modes apply the same quality gates: effective-yield + diversity checked; padding rejected; question count is not a target.

---

## Stages (E0–E11)

| ID | File | Name | One-line purpose | Kalshi referent |
|---|---|---|---|---|
| E0 | `stages/E0_intake.md` | Intake | Accept any loose seed (sentence / transcript / URL / screenshots); pin to top of context; no completeness assumed | I0 |
| E1 | `stages/E1_operator_interview.md` | Operator interview & intent-completion | Self-answer what research can; ask only what needs the operator; propose + reflect-back a structured Intent Brief; set project-type → convergence mode | D5 |
| E2 | `stages/E2_domain_expert.md` | Become the domain expert | Mandatory pre-battery research — microstructure, jargon, prior art, how practitioners fail; harvest to Ledger; distill 3–5 gold-standard exemplar questions | D1 + D4 |
| E3 | `stages/E3_scar_tissue.md` | Mine the world's scar tissue | Cardinal-sin discovery research → external post-mortems / failure modes → structural prevention + deliberately-failing test each, with cited provenance | D2 |
| E4 | `stages/E4_extract_seams.md` | Extract the seams | Informed by E1–E3, mine S1–S10 → `seams.json` via quote-then-extract + citations-grounding pass | I1 |
| E5 | `stages/E5_decompose_aspects.md` | Decompose the goal into aspects | Build the aspect-map that build-mode convergence is judged against; decision-mode variant: decompose into sub-questions the central decision rests on | new (dual-convergence) |
| E6 | `stages/E6_question_battery.md` | Generate the question battery | Spawn from every mandated source; red-team the taxonomy; anchor on E2 exemplars; tag each question to an E5 aspect; report deduped effective-yield — never raw count | D4 + I6 |
| E7 | `stages/E7_answer_kill_loop.md` | Answer + adversarial kill-loop | Research → answer → cross-family overturn pass → criteria-first verification; deterministic checks hard-fail first; flattering findings get more scrutiny; defects auto-reopen | D3 + I7 |
| E8 | `stages/E8_convergence_gate.md` | Convergence gate (dual-mode) | Build: every aspect answered to build-depth; Decision: decision-saturation; both gated by effective-yield + diversity; no count floor | new (C7) |
| E9 | `stages/E9_build_probe.md` | Build-probe loop | Build one thin vertical slice; surprises feed back as reopened questions → re-converge; bounded by L-D; ≥1 pass required by DoD | new (hybrid) |
| E10 | `stages/E10_emit_scaffold.md` | Emit build-ready scaffold + synthesis | Render GEN core + S1–S10 skeleton, memory skeleton, freshly-named BUILDER+ADVISOR boot-blocks, answered-to-build-depth package, verification report | I2–I5, I8 |
| E11 | `stages/E11_terminal_state.md` | Terminal state & DoD with refusal | Three valid terminals: build-ready (build-mode, from E10), decision-deliverable (decision-mode, from E8 CONVERGED), or refusal (either mode, from E8 REFUSAL); the spec's "two valid terminals" = {positive-terminal, refusal} where positive-terminal = build-ready OR decision-deliverable; honest ceiling stated | D7 |

---

## Laws (L-A–L-E)

Laws are loaded at the start of every session and remain active throughout all stages.

| ID | File | Name | One-line purpose | Kalshi referent |
|---|---|---|---|---|
| L-A | `laws/L-A_adversarial_posture.md` | Adversarial posture | Self-verification is intrinsically corrupt; every load-bearing claim gets a cross-family overturn attempt; positive results get more scrutiny than negatives | D3 generalized |
| L-B | `laws/L-B_3tier_memory.md` | 3-tier append-only memory | Immutable Ledger + mutable State + Index/Register; integrity invariants checked every resume; trust the file and git log over recollection | 3-tier memory + IRON_LAW §10 |
| L-C | `laws/L-C_cadence_cold_reverify.md` | Cadence & cold re-verification | Recalibrate finish-units per domain; force early cold re-verify of high-context decisions in a fresh window | D6 |
| L-D | `laws/L-D_freeze.md` | The freeze | Once protocols are sound, freeze them — no infinite self-perfection regress; process-not-outcome decoupling | L-0048 |
| L-E | `laws/L-E_evidence_over_assertion.md` | Evidence-over-assertion | Every claim labeled by epistemic status; honest negatives are complete deliverables; quarantine found/external claims; reproducibility-by-artifact | AI_OPERATING_DISCIPLINE §E (E1–E8) + IRON_LAW §2.1 |

---

*This build is governed by [`_build/GOVERNANCE.md`](_build/GOVERNANCE.md).*
