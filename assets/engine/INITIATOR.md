<!--
PROMPT-QUALITY GATE (GOVERNANCE §2) — clear all 8 before marking this file "done":
[x] a. DoD quantified      — Six binary acceptance checks (§Acceptance checks): INITIATOR-role-defined, ordered-walk-E0–E11-with-hard-gates, 5-laws-always-obeyed, resume-ritual, §4-gate-pointer, honest-ceiling. Each answerable YES/NO.
[x] b. Scope manifest      — Six DoD items listed in SAC-manifest (.superpowers/sdd/task-19-report.md §Manifest); reconciled post-draft with file:line evidence in task-19-report.md §Reconciliation.
[x] c. Levers, deliberate  — Points-and-sequences framing throughout (stages and laws pointed-to, not restated); domain words absent from body (task-19 domain-agnostic grep clean — zero hits); hard gate language (CANNOT / MANDATORY) reserved for gates confirmed in named source stage files; laws table before stage walk (ensures law-load before stage-walk); no unconditional MAX mandate.
[x] d. Countermeasures     — Context-rot: stages + laws loaded by file-path pointer; laws table at top before E0. Satisficing: 6 binary acceptance checks + binary gate language. Sycophancy: E11 positive terminals named as receiving asymmetric L-A scrutiny; honest ceiling required in all three terminal types. Hallucination: every hard gate pinned to named source file + section (E2 §Step 5 + §Binding; E8 §Binding + §Step 6a; E9 §load-bearing constraints 1+3); contradictions flagged in task-19-report.md §Concerns.
[x] e. Cross-family audit  — codex (gpt, task-19-codex-audit.txt): DoD 1,3,4,5,6 done, 2 shallow; cross-checks CLEAN (E2→E6, E9 build-only/≥1-probe/decision-skip, E10 full-suite, E11 three-terminals all match stage files; domain clean; refs resolve). Surfaced cross-stage items (E6-reopen contract, two→three terminals, E8-verdict terminology) → all reconciled in the T20 integration audit (B-0025; reopen-contract symmetry grep-verified). Recorded B-0024.
[x] f. Alignment trace     — UP: INITIATOR → engine/README.md (spine, run-order, convergence modes) → GOVERNANCE.md §2 → engine mission (domain-agnostic depth manufacture). DOWN: 12-stage walk coherent with README run-order; 5 laws accurate to README laws table; hard gates E2/E8/E9 accurate to stage files' own wording (source citations in §Ordered walk); E11 three-route routing accurate to stages/E11_terminal_state.md §Binding + §Steps 3a/3b/3c; Task-20 integration audit reconciled the E6-reopen contract and the E8-verdict terminology; cross-stage wiring is consistent as of T20.
[x] g. Persisted           — Committed as engine/INITIATOR.md; referenced in task-19-report.md; reachable from the run's STATE/REGISTER once a domain run initializes the memory tier at E0.
[x] h. Honest ceiling      — §Honest ceiling names the specific residual failure mode: undiscovered ceiling in E2/E3/E5/E8 propagates silently to a build-ready terminal; L-A and L-C reduce but do not eliminate this risk. Clean walk = PROCESS ran, not parity proven.
-->

# INITIATOR — Engine Entry-Point

### Binding · Load WHEN:
Load this file at the start of every domain-research session: **(a) fresh-domain start** — when a new domain trigger arrives and no prior STATE exists for this run; **(b) resume** — when resuming a previously-started run (load alongside the run's STATE, Index, and Coverage Register per the resume ritual below). The INITIATOR remains in context throughout all stages (E0–E11). Do not begin substantive work before this file is loaded.

## Role (one paragraph)

The INITIATOR is the engine's sole orchestrating agent — the **third role** in the engine's cast, distinct from the BUILDER and ADVISOR that the engine emits at E10 as bootable outputs for downstream use. It runs **once per domain**, walking the pipeline from E0 (intake) through E11 (terminal state) in a single instantiation. On any reference or source instance it is strictly **read-only**: the INITIATOR reads existing stage and law files, reads reference Ledgers, and reads operator-provided source material — it never modifies them. All writes go to the run's own Tier-1 Ledger, Tier-2 State, and Tier-3 Index/Coverage Register, which are created fresh for each domain at E0. A fresh context loads this file, loads the five laws, and runs the pipeline; no other orientation document is required to begin.

## Laws — always-obeyed throughout

The five laws are loaded at session start and remain **active and binding across every stage (E0–E11)**. They are not optional per-stage; they bind the INITIATOR continuously throughout the run. Load each law file before beginning E0:

| ID | File | Always-obeyed purpose |
|---|---|---|
| L-A | `laws/L-A_adversarial_posture.md` | Self-verification is intrinsically corrupt; every load-bearing claim gets a cross-family overturn attempt; positive results get more scrutiny than negatives |
| L-B | `laws/L-B_3tier_memory.md` | Immutable Ledger + mutable State + Index/Register; integrity invariants checked on every resume; trust the file and `git log` over recollection |
| L-C | `laws/L-C_cadence_cold_reverify.md` | Recalibrate finish-units per domain; force early cold re-verify of high-context decisions in a fresh window |
| L-D | `laws/L-D_freeze.md` | Once protocols are sound, freeze them — no infinite self-perfection regress; process-not-outcome decoupling |
| L-E | `laws/L-E_evidence_over_assertion.md` | Every claim labeled by epistemic status; honest negatives are complete deliverables; reproducibility-by-artifact |

## Resume ritual

When resuming a prior run (any context reset after the initial session), execute in order **before substantive work**:

1. **Load anchor:** reload this file (INITIATOR) + the run's Tier-2 State file + the run's Tier-3 Index and Coverage Register. Do not reload the full Ledger; pull Ledger entries by ID on demand.
2. **Integrity check:** run all four L-B Step 7 invariants in order — (i) Ledger-Index count invariant; (ii) Register line-balance; (iii) additive-only `git diff --diff-filter=DR` on the memory directory; (iv) tests green. If any invariant fails, audit and recover before continuing; record the verification result in a new Ledger entry either way.
3. **First open item:** locate the first `open` or `in-progress` item in the Coverage Register.
4. **Continue:** resume from that item. Trust the files and `git log` over any in-context recollection (L-B Step 1 trust rule).

Full protocol: `laws/L-B_3tier_memory.md` §Steps 1 + 7.

## Ordered walk E0→E11

Walk the stages in the sequence below. Each stage's entry condition (its `Binding · Load WHEN:` section) must be met before the next stage loads. The **hard gates** are structural — they cannot be bypassed, deferred, or self-reported away.

---

### E0 — Intake (`stages/E0_intake.md`)
Accept any loose seed (sentence, transcript, URL, screenshots). Pin to top of context. Establish the concrete file paths for all four memory tiers (Ledger, State, Index, Coverage Register). No completeness assumed from the seed.

---

### E1 — Operator interview & intent-completion (`stages/E1_operator_interview.md`)
Self-answer what research can resolve; ask only what needs the operator. Propose and reflect-back a structured Intent Brief. **Sets project-type** (`build` or `decision`) — this determines the convergence mode E8 applies. Operator confirms the Intent Brief before E2 loads.

---

### E2 — Become the domain expert (`stages/E2_domain_expert.md`)
Mandatory pre-battery research pass: microstructure, vocabulary/jargon, prior art, how practitioners fail. Harvest findings to the Tier-1 Ledger. Distill 3–5 gold-standard exemplar questions to `domain_exemplars.md`.

> **HARD GATE — E6 cannot run until E2 AND E5 are signed off.** The operator or controller explicitly clears E2's Step 5 sign-off gate (domain exemplars) AND E5's sign-off gate (aspect-map or decision sub-question map). Without domain-earned exemplars, E6 produces a generic battery against a generic taxonomy — the documented failure mode E2 exists to prevent. Without E5's signed-off aspect-map, generated questions cannot be tagged and E8 cannot evaluate per-aspect convergence. (Source: `stages/E2_domain_expert.md` §Step 5 + §Binding; `stages/E6_question_battery.md` §Binding + §Hard gate.)

---

### E3 — Mine the world's scar tissue (`stages/E3_scar_tissue.md`)
Cardinal-sin discovery research: external post-mortems, failure modes, structural prevention. Deliberately test each failure mode with cited provenance.

---

### E4 — Extract the seams (`stages/E4_extract_seams.md`)
Informed by E1–E3: mine S1–S10 → `seams.json` via quote-then-extract + citations-grounding pass.

---

### E5 — Decompose the goal into aspects (`stages/E5_decompose_aspects.md`)
Build the artifact that E8's convergence judgment is applied against. Two-mode output keyed to the project-type set at E1:
- **Build-mode:** `aspect_map.md` — the aspect map; every question generated at E6 is tagged to an aspect; E8 judges per-aspect coverage against this.
- **Decision-mode:** `decision_subquestions.md` — the sub-questions the central decision rests on; E8 judges decision-saturation against this.

---

### E6 — Generate the question battery (`stages/E6_question_battery.md`)
Spawn questions from every mandated source. Red-team the taxonomy. Anchor on E2 exemplars (loaded from `domain_exemplars.md`). Tag each question to an E5 aspect. Report deduped effective-yield — never raw count.

*Requires E2 AND E5 sign-off (hard gate above). Also receives reopened questions from E7 (audit defects/negative results), E8 (adversarial-gen / aspect-coverage gaps / cross-family-overturn), and E9 (probe surprises) — all entering as E6 Source 5; see Source 5 in `stages/E6_question_battery.md` for the accepted spawn-source prefixes (E7×2, E8×3, E9×1).*

---

### E7 — Answer + adversarial kill-loop (`stages/E7_answer_kill_loop.md`)
Research → answer → cross-family overturn pass → criteria-first verification. Deterministic checks hard-fail first. Flattering findings receive more scrutiny than negatives (L-A). Defects auto-reopen.

---

### E8 — Convergence gate (`stages/E8_convergence_gate.md`)
**Run after each E7 pass.** Dual-mode convergence judgment: per-aspect coverage table (build) or decision-saturation argument (decision), plus a mandatory adversarial missing-question generation pass and a cross-family overturn attempt. Issues one of three canonical E8 verdicts (CONVERGED / NOT-YET-CONVERGED / REFUSAL); a CONVERGED verdict routes by project-type — build-mode → E9, decision-mode → E11:

| Verdict | Condition | Routing |
|---|---|---|
| **CONVERGED** (build-mode) | Every E5 aspect answered to build-depth; adversarial generation pass null; cross-family overturn survived | → **E9** (build-probe; mandatory) |
| **CONVERGED** (decision-mode) | Decision-saturation criterion met; adversarial pass null; cross-family overturn survived | → **E11 directly** (skip E9 and E10) |
| **NOT-YET-CONVERGED** | Any aspect partial or unanswered, OR adversarial pass produces a materially-distinct question | → **E6 → E7** (loop back; targeted at the specific gap) |
| **REFUSAL** | Research has converged, but the converged evidence does NOT support proceeding with the build or decision as framed | → **E11** (refusal is a first-class deliverable, not a process failure) |

> **HARD GATE — E9 cannot run until E8 produces a CONVERGED verdict (build-mode).** (Source: `stages/E8_convergence_gate.md` §Binding + §Step 6a.)

The NOT-YET-CONVERGED loop is bounded by L-D (`laws/L-D_freeze.md`): it terminates at a finite, testable condition — it must not run indefinitely in search of perfection.

---

### E9 — Build-probe loop (`stages/E9_build_probe.md`)
**Build-mode only.** For a decision-mode project, record in the Ledger that E9 is skipped (E8 CONVERGED verdict routes to E11 directly) and proceed to E11.

Build one thin vertical slice from the converged knowledge. Treat every surprise — anything that breaks, confuses, or violates an E1 success criterion — as a tracked reopened question routed back through E7/E8 for re-convergence.

> **≥1 probe pass is MANDATORY.** A build-mode converged project **cannot reach E10** without a completed probe pass. A self-report of "no probe needed" without an inspectable artifact is a protocol violation. (Source: `stages/E9_build_probe.md` §Load-bearing constraints 1 + 3.)

The probe loop is **bounded by L-D** (`laws/L-D_freeze.md`), with three named termination conditions: (a) a clean probe whose representativeness check passes; (b) all surprises addressed and re-convergence confirmed; (c) the operator gates. E9 cannot become an infinite build-fix-rebuild regress — that is the failure L-D guards against.

---

### E10 — Emit build-ready scaffold + synthesis (`stages/E10_emit_scaffold.md`)
Render GEN core + S1–S10 skeleton, memory skeleton, freshly-named BUILDER + ADVISOR boot-blocks, answered-to-build-depth knowledge package, and verification report. E10's sign-off triggers Route A at E11.

> **HARD GATE — E10 cannot run until E4 (`seams.json`), E3 (scar protocols), E7/E8 (converged knowledge package), and E9 (confirmed probe report) are all signed off.** E10 consumes all four upstream inputs at Step 0: `seams.json` provides the S1–S10 parameterization (Step 0a); `scar_protocols.md` seeds SPEC protocol generation (Step 0b); the E8 CONVERGED knowledge package (answered-question records) drives `knowledge_package.md` (Steps 0c + 7); the E9 CONFIRMED probe report is the stage trigger (Step 0d). Any missing sign-off is a prerequisite failure — E10 does not proceed until all four are confirmed. (Source: `stages/E10_emit_scaffold.md` §Binding + §Step 0; `stages/E3_scar_tissue.md` §Cross-references; `stages/E4_extract_seams.md` §Cross-references.)

---

### E11 — Terminal state & DoD with refusal (`stages/E11_terminal_state.md`)
Three valid completion outcomes — all are first-class terminals; none is a failure:

| Route | Trigger | Terminal |
|---|---|---|
| **A — build-ready** | E10 sign-off (build-mode) | Scaffold + verification report delivered; operator reviews before BUILDER boots or any external action is taken |
| **B — decision-deliverable** | E8 CONVERGED (decision-mode) | Decision delivered with saturation argument and residual open sub-questions; operator acts; E11 ensures the honest ceiling is stated before action |
| **C — refusal** | E8 REFUSAL (either mode) | Converged findings + smaller-scoped intervention that the evidence DOES support; explicitly: "this refusal is a complete output, not a failure to hide" |

Positive terminals (Routes A and B) are flattering and load-bearing; they receive **more** L-A scrutiny than refusal (Route C) — the asymmetry is one-directional (readiness must be adversarially earned; refusal is the conservative terminal). A bare refusal without the smaller-scoped intervention section fails the E11 acceptance gate.

Every terminal carries the honest ceiling statement. E11 is always an operator-review point; the declaration is not acted upon until the operator has explicitly reviewed it.

---

## The §4-gate pointer

The INITIATOR generates many prompts during a run: question batteries (E6), domain research prompts (E2, E3), answer-and-verification prompts (E7), convergence adversarial passes (E8), build-probe instructions (E9), and cross-family overturn prompts (E8, E11). **Every prompt the INITIATOR itself emits must clear the §4 PROMPT-QUALITY GATE — all 8 lines — before it is used as an engine output.**

Gate line (e) (cross-family audit) is the controller's responsibility for each emitted prompt, as it is for this file. Source: `engine/_build/GOVERNANCE.md` §2.

A prompt that has not cleared the gate is not a valid engine output, even if it is structurally correct. The §4 gate applies to the INITIATOR's emitted prompts, not only to this file itself.

## Inputs / Outputs

**Inputs:**
- New-domain trigger: any loose seed (sentence, transcript, URL, screenshots) — enters at E0.
- On resume: this file (INITIATOR) + the run's Tier-2 State file + the run's Tier-3 Index and Coverage Register.
- The five law files (L-A through L-E) — loaded at session start.
- All 12 stage files (E0–E11) — loaded in sequence as each stage begins.

**Outputs (the INITIATOR produces):**
- Per-stage Tier-1 Ledger entries — the run's append-only record.
- Stage artifacts: Intent Brief (`intent_brief.md`), `domain_exemplars.md`, `seams.json`, `aspect_map.md` / `decision_subquestions.md`, answered-question records — each produced by the relevant stage and recorded in the Ledger.
- Run orchestration: per-stage routing decisions, integrity-check records, compaction records.
- **Terminal artifact** — one of: (a) E10 scaffold + verification report (build-ready terminal); (b) decision with saturation argument (decision-deliverable terminal); (c) refusal declaration with smaller-scoped intervention (refusal terminal).

## Acceptance checks (binary)

1. **INITIATOR role defined?** YES if this file names the INITIATOR as the third agent role (distinct from BUILDER and ADVISOR), states it runs once per domain, and states it is read-only on any reference instance. NO otherwise.

2. **Ordered walk E0→E11 with all hard gates?** YES if: all 12 stages appear in run order with a one-line purpose each; the E2-and-E5-before-E6 hard gate is stated with source citation (both E2 and E5 sign-off named as required); the E8-before-E9 hard gate is stated with source citation; the E10 hard gate (E3, E4, E7/E8, and E9 all signed off before E10 runs) is stated with source citation; ≥1 E9 probe is named as mandatory (not advisory), with a protocol-violation statement for self-reports; decision-mode E9 skip is explicitly stated; all three E8 canonical verdicts (CONVERGED, NOT-YET-CONVERGED, REFUSAL) are named, with CONVERGED routing specified per project-type (build-mode → E9; decision-mode → E11), and all routing targets stated; the E11 refusal branch is present as a named first-class terminal. NO if any of the above is absent or weakened to advisory.

3. **All 5 laws named as always-obeyed with file-path pointers?** YES if L-A, L-B, L-C, L-D, and L-E are each named by ID and file path with a one-line purpose, the table explicitly states they are active and binding across all stages E0–E11, and the table appears before the §Ordered walk. NO if any law is absent, unlabeled, or described as optional.

4. **Resume ritual present and complete?** YES if all four steps are stated (load INITIATOR + STATE + Register; run L-B integrity invariants; find first open Register item; continue) and a pointer to `laws/L-B_3tier_memory.md §Steps 1 + 7` is present. NO if any step is absent or the L-B pointer is missing.

5. **§4 gate pointer present?** YES if the file explicitly states that every prompt the INITIATOR emits must clear all 8 lines of the §4 PROMPT-QUALITY GATE, names the source (`engine/_build/GOVERNANCE.md §2`), names at least two types of emitted prompt, and notes that gate line (e) is the controller's responsibility. NO if the pointer is absent, applies only to this file rather than to emitted prompts, or omits the line-(e) note.

6. **Honest ceiling stated?** YES if the file explicitly states that a clean walk certifies the PROCESS ran — not that parity was achieved — names where parity is earned and graded (live downstream run + validation methodology), and names at least one specific residual failure mode. NO if the ceiling is a generic disclaimer without a named failure mode, or if the parity claim is not explicitly decoupled from process completion.

## Honest ceiling

A clean INITIATOR walk — completing E0 through E11 with every hard gate cleared, every law obeyed, and every acceptance check green — certifies that **the process ran to standard**. It does not certify that domain knowledge is deep enough for parity with the reference project, that the emitted scaffold will succeed, or that converged evidence is correct.

Parity is earned by the live downstream run (BUILDER + ADVISOR) and graded by the validation methodology — never assumed by reaching E11.

Named specific failure mode: an undiscovered ceiling in any of E2 (shallow research pass that produced plausible-seeming but thin domain knowledge), E3 (missed cardinal failure mode), E5 (an aspect nobody framed stays absent from the map), or E8 (convergence declared over an incomplete frame) propagates silently through to a build-ready or decision-deliverable terminal. The adversarial posture (L-A) and cold-reverify cadence (L-C) are the designed guards against this; they reduce the risk, they do not eliminate it. E9's build-probe is the next designed catch-point; real downstream use is the furthest catch.

## Cross-references

- **All 12 stages** (`stages/E0_intake.md` through `stages/E11_terminal_state.md`) — walked in run order; each stage's Protocol governs the INITIATOR's actions within that stage. The INITIATOR sequences and gates them; it does not restate their internal mechanisms.
- **All 5 laws** (`laws/L-A_adversarial_posture.md` through `laws/L-E_evidence_over_assertion.md`) — loaded at session start; govern the INITIATOR continuously across all stages.
- **`engine/README.md`** — the spine table (stages + laws, run order, convergence modes); the INITIATOR is the operational counterpart to the README.
- **`engine/_build/GOVERNANCE.md` §2** — the 8-line §4 PROMPT-QUALITY GATE that every emitted prompt must clear; gate line (e) is the controller's responsibility.
- **`engine/_build/STATE.md`** — the build's Tier-2 State file (this build's instance of the pattern); a domain run's own State file is initialized at E0 (paths established there) and consumed at every resume.
- **`engine/_build/REGISTER.md`** — the build's Tier-3 Coverage Register (this build's instance); a domain run's own Register is initialized at E0 and consumed at every resume (Step 3 of the resume ritual).
- **`laws/L-B_3tier_memory.md` §Steps 1 + 7** — the authoritative source for the resume ritual (Step 1: load anchor) and integrity invariants (Step 7: four invariants).
- **`laws/L-D_freeze.md`** — bounds the E6→E7→E8 NOT-YET-CONVERGED loop and the E9 build-probe loop; cited in §E8 and §E9 above.
