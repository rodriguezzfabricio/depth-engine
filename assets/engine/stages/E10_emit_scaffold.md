<!--
PROMPT-QUALITY GATE (GOVERNANCE §2) — clear all 8 before marking this file "done":
[x] a. DoD quantified      — Six binary acceptance checks (§ "Acceptance checks"), one per DoD item: GEN-core-verbatim (M-1–M-4/M-6–M-9) + M-5 SPEC-regenerated + all S1–S10 seams accounted for (check 1); truly-zeroed memory + all L-B invariants verified PASS/FAIL (check 2); BUILDER+ADVISOR boot-blocks + fail-safe-to-read-only (check 3); complete-suite manifest, all 9 items, M-5 REGENERATED confirmed, genericization across all 9 + scaffold surfaces (check 4); I8 verification report emitted (check 5); isolation binary — pre-emit hash capture + working-tree/index check for untracked stray files + committed deletions/renames + allowed-write-set confinement, all four caught (check 6).
[x] b. Scope manifest      — Ten delivery items listed in task-17-report.md §Manifest; reconciled with file:line evidence in §Reconciliation before commit.
[x] c. Levers, deliberate  — Eleven-step Protocol (Steps 0–10; Step 10 = operator sign-off). Decision-mode bypass at Step 1 isolates E10 from decision-mode (flagged for Task 20). Suite-manifest gate at Step 6 is a separate pass from the render steps — prevents satisficing. I8 report (Step 8) is a structured per-item artifact, not self-report. Effort proportional: no ritual MAX; each step is the minimum action required to satisfy its DoD item.
[x] d. Countermeasures     — Context-rot: seams.json, scar_protocols.md, E8 Ledger entry, and E9 probe report re-read from persisted files at Step 0, not recalled from context; load-bearing constraints restated at top of Protocol block. Satisficing: six binary acceptance checks + I8 per-item report; "complete suite" is a named manifest (Step 6), not a prose claim. Sycophancy: Step 6 genericization grep is a re-runnable artifact check, not a self-report; any FAIL on the suite checklist is a hard FAIL, not a negotiable finding. Hallucination: all emitted files are pinned to concrete source protocol files (GEN core) or seams.json values (domain skeleton); a suite item absent from the output directory FAILS the Step 6 binary gate and the I8 §1 checklist.
[x] e. Cross-family audit  — codex (gpt) audited 3 rounds (task-17-codex-audit{,-r2,-r3}.txt): R3 = all 6 DoD done + EVERY category CLEAN (complete-suite teeth all-9, isolation airtight, fail-safe role-gate, GEN-vs-SPEC, parity, referent). Caught + fixed across 2 fix rounds: S1–S10 full-binary acceptance; truly-zeroed memory (L-B invariants hold) vs register-seeding; **VALIDATION=SPEC-regenerated not verbatim-ported** (would have leaked Kalshi fees — the soul-preservation catch); genericization grep extended to all 9 suite items + scaffold surfaces; isolation catches MODIFICATIONS (hash + working-tree + untracked + allowed-write-set, not just DR); verification-report ordering coherent; §2–§4 binary verdicts; I6 referent (upstream, not E10); line-64 allowed-write-set. Recorded B-0022. (GOVERNANCE short-path → Task 20.)
[x] f. Alignment trace     — UP: E10 → engine README stages table ("Emit build-ready scaffold + synthesis") → GOVERNANCE §5 ("the output carries the FULL suite forward") → engine mission (domain-agnostic ingestion/research scaffold at reference-project parity). DOWN: build-mode-only is coherent with E9 routing (build-mode CONFIRMED → E10; decision-mode routes directly to E11, skipping E9 and E10 by design — flagged for Task 20 per E10 scope); eleven-step Protocol is coherent with I2–I5/I8 spec in adapter/notes/07_adapter_design.md (I6 is E6's job — handled upstream; E10 packages the converged output, does not re-run I6); suite manifest M-1–M-9 is coherent with GOVERNANCE §5 and 05_architecture_and_theory.md GEN-layer table (M-5 classified SPEC per §"THE SPLIT", not GEN verbatim); no contradictions found.
[x] g. Persisted           — Commit records this file; build LEDGER entry (task-17-report.md §Manifest) links to it; reachable from REGISTER task entry.
[x] h. Honest ceiling      — §Honest ceiling names the specific residual failure mode: a verbatim-complete suite is the necessary substrate for parity, not sufficient evidence of it; parity is earned by the live BUILDER/ADVISOR run and the operator's use, graded downstream, never guaranteed in advance by scaffold emission alone.
-->

# E10 — Emit build-ready scaffold + synthesis

### Binding · Load WHEN:
INITIATOR loads this stage immediately after E9 produces a CONFIRMED probe report in build-mode. Trigger: the E9 Tier-1 Ledger section `## E9 Probe Report — <goal name>` records `Convergence status: CONFIRMED`, and `work/<session-id>/intent_brief.md` has `project-type: build`. **E10 is build-mode ONLY.** A decision-mode project whose E8 verdict is CONVERGED routes directly to E11 — E10 is not loaded for decision-mode projects under any circumstance; record "E10: N/A — decision-mode project" in the Tier-1 Ledger and route to E11. Do not load before all four prerequisite sign-offs are confirmed: **E4** (`seams.json` — S1–S10 parameterization), **E3** (scar protocols — SPEC protocol seeds), **E7/E8** (converged knowledge package — the E8 CONVERGED verdict and answered-question records), and **E9** (CONFIRMED probe report — stage trigger and Step 0d check). E9 sign-off alone is insufficient; all four must be confirmed before E10 begins. (E3 and E4 each declare this stage as a downstream consumer requiring their sign-off; E10's Step 0 re-anchors from all four before proceeding.) **E11 cannot run until this stage is signed off.**

## Purpose (one paragraph)
E10 is the engine's terminal artifact stage: it assembles all upstream work into a complete, bootable project scaffold for the new domain. It consumes four upstream inputs — `seams.json` (the S1–S10 parameterization from E4), the E3 scar protocols (S6/S9), the E7/E8 converged knowledge package, and the E9 CONFIRMED probe report — and renders them into a project directory that a domain BUILDER+ADVISOR pair can immediately boot and operate. The central requirement of this stage, per GOVERNANCE §5, is that the emitted scaffold carries the COMPLETE genericized protocol suite forward — AI_OPERATING_DISCIPLINE, PROMPT_ENGINEERING (incl. the §4 prompt-quality gate), TDD_AND_CODE_INTEGRITY, CONTEXT_HYGIENE, VALIDATION_METHODOLOGY, the 3-tier memory formats and their integrity invariants, the resume ritual, the research template, and the loop — not a thinned abstraction. E10 fulfills this by: (i) porting the GEN core verbatim (byte-for-byte, additive-only from the reference protocol files) into the new scaffold's `protocols/` directory; (ii) rendering the domain governance surface from the S1–S10 seams; (iii) emitting a truly-zeroed 3-tier memory skeleton with all L-B integrity invariants verified PASS (Coverage Register header-row only; the domain BUILDER seeds it together with its first Ledger entry); (iv) generating freshly-named domain BUILDER+ADVISOR boot-blocks with the fail-safe-to-read-only rule (L-0051) baked in as a structural property, not advice; and (v) producing a verification report (I8) that confirms each suite item is present and genericized, binary per item. Reference project files are never modified — all emissions target a new project directory only; the isolation guarantee holds by construction.

## Kalshi referent (what proven mechanism this generalizes)
**I2–I5 + I8 — the INITIATOR pipeline steps for scaffold emission, from `adapter/notes/07_adapter_design.md` §3 (the Phase G adapter design for the reference project). E10 realizes I2–I5 and I8; I6 (question-battery generation) is handled upstream by E6/E7/E8, and E10 packages the converged output of that pipeline at Step 7 — it does not perform I6.** In its original context the pipeline ingested a domain transcript, extracted S1–S10 seams (I1, generalized as E4), then: I2 (render GEN core + skeleton, fills S1,S2,S4,S7,S8, deterministic); I3 (generate SPEC protocols via 8-slot anatomy, fills S6,S9, LLM-driven from frozen §4-gated templates); I4 (emit zeroed memory skeleton, fills S5,S8; integrity invariants asserted, deterministic); I5 (render domain BUILDER+ADVISOR boot-blocks filling S1, fail-safe-to-read-only wording baked into template, deterministic); I6 (generate question battery, fills S5,S10, LLM-driven — handled UPSTREAM by E6/E7/E8 before E10 is reached; E10 packages the converged output of that pipeline at Step 7 and does not perform I6 itself); and I8 (emit the complete scaffold + a persisted verification report, deterministic). The specific fail-safe-to-read-only property originated in the role-misboot incident documented at `advisor/incidents/2026-06-23-role-misboot.md` (root cause of L-0051): a BUILDER CLI lacking an explicit role-gate could silently operate as a writer under role ambiguity, producing an undetected safety failure. L-0051's resolution — "on any role ambiguity, fail safe to read-only" — was baked into both the boot-block text and the surface STEP-0 role check. The domain-general pattern — *render the GEN machinery verbatim, fill the domain slots from extracted seams, emit freshly-named role boot-blocks with the fail-safe property structural and non-optional, self-verify with a binary per-item checklist* — transfers unchanged to any domain. "Kalshi" is named here as the referent only; no Kalshi-specific content is a constraint on E10's protocol.

## Protocol (the steps the INITIATOR executes)

> **LOAD-BEARING CONSTRAINTS (restated at top for context-rot resistance):**
> 1. **GEN core is ported verbatim.** Every GEN suite item must be byte-identical in the emitted scaffold to its source in the reference `protocols/` directory. Paraphrasing or thinning is a protocol violation; a non-zero diff is a copy failure.
> 2. **Complete-suite manifest is binary.** A scaffold missing any named suite item (M-1 through M-9) FAILS the Step 6 suite-completeness gate and the I8 verification report §1. There is no partial credit.
> 3. **Fail-safe-to-read-only is a structural property of the BUILDER boot-block.** The L-0051 fail-safe rule ("on any role ambiguity, fail safe to read-only") must appear as a baked-in, non-optional clause in every emitted BUILDER boot-block. Its absence is a compliance failure, not an advisory gap.
> 4. **Isolation is binary.** All emissions go to a new project directory only. Any modification, deletion, or rename of a reference or source file — committed or uncommitted — FAILS. The **ALLOWED WRITE-SET** is: the new project directory `<out>/<domain>/` AND the engine's own session Tier-1 Ledger and audit files. Any file modified or created outside the allowed write-set FAILS. Four checks confirm isolation: (a) pre-emit content hashes of reference paths captured before Step 2 and compared post-emit — catches uncommitted edits that a `git diff <commit>..HEAD` range would miss; (b) `git status --porcelain` inspected for unexpected modified/staged/untracked entries outside the allowed write-set; (c) `git diff --diff-filter=DR` for committed deletions/renames of reference files; (d) all new or modified files confirmed within the allowed write-set. The Ledger and audit file writes are in the allowed write-set and do not fail isolation — this resolves the apparent contradiction between the confinement check and the Step 10 Ledger entry requirement.
> 5. **E10 is build-mode only.** Decision-mode routes directly to E11; record "E10: N/A — decision-mode project" in the Ledger and do not execute Steps 2–9 for decision-mode projects. This scope boundary is flagged for Task 20.

---

### Step 0 — Re-anchor from upstream artifacts (context-rot countermeasure)

Re-read the following from their persisted files before doing anything else. Do not proceed from recalled context — context degrades across long sessions; file re-reads are the context-rot countermeasure.

**(a)** Re-read `work/<session-id>/seams.json` in full. Confirm all ten seams S1–S10 are present, each with a `status` field. Record `seams.json`.`domain` as the new project name at the top of the E10 Tier-1 Ledger entry — this name drives the output directory and the boot-block naming throughout Steps 2–9.

**(b)** Re-read `work/<session-id>/scar_protocols.md`. Confirm E3 State (A or B) and the structural prevention entries (S9 source; S6 seed). These are the inputs to the SPEC protocol generation at Step 3.

**(c)** Re-read the E8 Tier-1 Ledger entry under `## E8 Convergence Gate — <goal name> (pass <N>)`. Confirm the CONVERGED verdict and note the per-aspect coverage table. The answered-question records referenced here are consumed at Step 7.

**(d)** Re-read the E9 Tier-1 Ledger section `## E9 Probe Report — <goal name>`. Confirm `Convergence status: CONFIRMED`. If the probe report is absent or records `RE-OPENED`, E10 cannot proceed — return to E9 and do not continue.

Do not proceed past Step 0 if any of the four sources is absent, unreadable, or in a non-terminal state.

---

### Step 1 — Decision-mode bypass gate (E10 is build-mode ONLY)

Read `project-type` from `work/<session-id>/intent_brief.md`:

- **`decision`** — E10 does not apply. Record in the Tier-1 Ledger: "Step 1: decision-mode project — E10 skipped; routing directly to E11 with the E8 CONVERGED knowledge package." Stop; do not execute Steps 2–9. The decision-package terminal belongs to E11, not E10.
- **`build`** — confirm E9 CONFIRMED is present (Step 0d). If confirmed, proceed to Step 2.

*Flag for Task 20:* E10 is scoped to build-mode scaffolds. If a future decision-mode project requires an analogous emit stage (a decision-package scaffold rather than a build scaffold), that is a new engine extension outside E10's current scope.

---

### Step 2 — Render the GEN core verbatim (I2)

Port the complete GEN suite into the new project scaffold. The output directory for all emitted scaffold artifacts in this and subsequent steps is `<out>/<domain>/`, where `<domain>` is the domain name from `seams.json`.`domain`. No SCAFFOLD artifact is written outside this directory; the ONLY other writes E10 may make are to the engine-side ALLOWED WRITE-SET defined in Step 9 (the session Ledger/audit files + `work/<session-id>/pre_emit_hashes.txt`). Any write outside `<out>/<domain>/` ∪ the allowed write-set — in particular any modification to a tracked reference/source file — is an isolation failure (Step 9).

**The complete-suite manifest — all nine items MUST be present in the emitted scaffold:**

| ID | Suite item | Source in reference `protocols/` | Emit location in `<out>/<domain>/` | Ported how |
|---|---|---|---|---|
| M-1 | AI_OPERATING_DISCIPLINE (incl. §A–§I) | `protocols/AI_OPERATING_DISCIPLINE.md` or `.template.md` | `protocols/AI_OPERATING_DISCIPLINE.md` | verbatim port or template render; GEN sections byte-for-byte |
| M-2 | PROMPT_ENGINEERING (incl. §4 prompt-quality gate) | `protocols/PROMPT_ENGINEERING.md` | `protocols/PROMPT_ENGINEERING.md` | byte-for-byte verbatim |
| M-3 | TDD_AND_CODE_INTEGRITY (§A–§C, §E–§J GEN; §D/§K domain-slotted) | `protocols/TDD_AND_CODE_INTEGRITY.md` or `.template.md` | `protocols/TDD_AND_CODE_INTEGRITY.md` | GEN sections byte-for-byte; domain slots filled from seams.json |
| M-4 | CONTEXT_HYGIENE | `protocols/CONTEXT_HYGIENE.md` | `protocols/CONTEXT_HYGIENE.md` | byte-for-byte verbatim |
| M-5 | VALIDATION_METHODOLOGY (domain analogue) | Generic validation principles: pre-registration, out-of-sample survival / parity gate — plus new domain's success criteria (E1/E5/E8) | `protocols/VALIDATION_METHODOLOGY.md` | **SPEC — regenerated domain analogue** (generated at Step 3, not copied; see note ①) |
| M-6 | 3-tier memory formats + L-B integrity invariants | L-B machinery + memory skeleton | `memory/` directory | GEN — truly-zeroed skeleton, all L-B invariants verified PASS (Step 4) |
| M-7 | Resume ritual (IRON_LAW §10.5 + CLAUDE surface) | `CLAUDE.template.md` | `CLAUDE.md` | GEN — template render (Step 5) |
| M-8 | Research template (IRON_LAW §11) | `IRON_LAW.template.md` §11 slot | `IRON_LAW.md` §11 | GEN — verbatim slot |
| M-9 | The loop — exhaustiveness-as-register (IRON_LAW §8) | `IRON_LAW.template.md` §8 slot | `IRON_LAW.md` §8 | GEN — verbatim slot |

> **① Classification authority:** M-1–M-4, M-6–M-9 are **GEN — verbatim port** (domain-general machinery). M-5 is **SPEC — regenerated domain analogue**, per `adapter/notes/05_architecture_and_theory.md` §"THE SPLIT": "VALIDATION / BACKTEST / COMPLIANCE / api / becker → SPEC → regenerate analogues via the 8-slot protocol anatomy." This still honors GOVERNANCE §5 ("validation IS carried forward — in regenerated, genericized form, never as a source-domain byte-copy").

**Execution (create `<out>/<domain>/protocols/`):**

1. For each of M-1 through M-4: copy the source file from the reference `protocols/` directory to `<out>/<domain>/protocols/<name>.md`. For protocols that have a `.template.md` variant (e.g. `AI_OPERATING_DISCIPLINE.template.md`, `TDD_AND_CODE_INTEGRITY.template.md`), use the template variant and fill domain-specific slots from seams.json — the GEN sections must be byte-for-byte identical to the source; only the domain-slot spans change. After each file is placed, verify: `diff <source> <out>/<domain>/protocols/<name>.md` must return zero output for all GEN sections. A non-zero diff on any GEN section is a copy failure — stop and correct before proceeding. **M-5 (VALIDATION_METHODOLOGY) is NOT copied at this step — it is a SPEC item generated at Step 3.**

2. Render `IRON_LAW.template.md` into `<out>/<domain>/IRON_LAW.md` using the template. At this step, render only the GEN structural skeleton, §8 (M-9 loop slot), and §11 (M-8 research template slot) verbatim; leave S1–S10 domain slots for Step 3.

3. Render `CLAUDE.template.md` into `<out>/<domain>/CLAUDE.md` with the M-7 resume ritual section verbatim. Leave domain-specific slots (S3 gate noun/reminder, S6 protocol rows/conduct reminder, S6 role-incident-ref) for Steps 3 and 5.

Record in the Tier-1 Ledger under `## E10 Scaffold — <domain>`: each M-item ID, the source file used, the emit path, and the diff-zero verification result for M-1–M-4 (M-5 is recorded at Step 3 as REGENERATED, not diff-zero).

---

### Step 3 — Render the S1–S10 domain skeleton and SPEC protocols (I2 + I3)

Fill the domain-specific template slots in `IRON_LAW.md` and `CLAUDE.md` using values from `seams.json`. Then generate the domain SPEC protocols.

**Slot fills from `seams.json` (S1–S8 rendered into scaffold surfaces; S9 rendered as SPEC protocol via I3; S10 represented in knowledge package at Step 7):**

| Seam | Target in scaffold | What fills it |
|---|---|---|
| S1 Mission | `IRON_LAW.md` §1 mission block; boot-block project name slot | domain project name + mission statement |
| S2 Operator profile | `IRON_LAW.md` §1.1 operator-profile block | resources, risk posture, constraints |
| S3 Irreversible action | `IRON_LAW.md` §7 human-approval gate | replaces the generic gate noun; also fills `CLAUDE.md` gate-reminder slot |
| S4 Phase roadmap | `IRON_LAW.md` §6 phased roadmap | ordered phases with exit gates |
| S5 Question taxonomy | `IRON_LAW.md` §5 coverage taxonomy | domain coverage categories (replaces generic A–J) |
| S7 DoD items | `IRON_LAW.md` §14 Definition of Done | the concrete output artifacts whose existence = done |
| S8 Ledger tags + phase labels | `IRON_LAW.md` §10.1 + `CLAUDE.md` load-trigger table | tagging vocabulary + phase labels for memory |

Fill the remaining `CLAUDE.md` slots: `{{S6:DOMAIN_PROTOCOL_ROWS}}`, `{{S6:CONDUCT_REMINDER}}`. Set `{{S6:ROLE_INCIDENT_REF}}` to the path of the new domain's role-misboot incident doc if one exists, or to the string `"L-0051"` if no dedicated incident doc has been written yet.

**SPEC protocol generation for S6 and S9 (I3 — LLM-driven from frozen §4-gated templates):**

For each domain-specific protocol derived from E3's scar protocols (seam S6, primary) and the cardinal sin (seam S9):

1. Synthesize the protocol via the **8-slot anatomy**: (1) protocol name; (2) the failure mode it prevents; (3) the structural prevention mechanism; (4) RED test specification (the test that fails before prevention is in place, passes after); (5) grounding citations from `scar_protocols.md`; (6) GEN/INSTANCE tag (distinguishes domain-general prevention logic from domain-specific detail); (7) deterrent (how this error is made non-representable by design, not merely forbidden by rule); (8) load trigger condition.
2. Each SPEC protocol is a frozen, §4-gated prompt template. Clear the §4 gate (GOVERNANCE §2) for each protocol — it will be the domain's operating discipline in its failure domain, so it must meet the same standard as any engine stage file.
3. Emit each protocol to `<out>/<domain>/protocols/<PROTOCOL_NAME>.md`. Add the protocol's load-trigger row to the `CLAUDE.md` binding-protocols table.

**Where seam S6 is `"status": "empty"` (E3 found no externally-documented cardinal incidents):** emit a placeholder file `<out>/<domain>/protocols/DOMAIN_PROTOCOLS_PLACEHOLDER.md` with the note: "No scar protocols were extracted at E3 (State B — NULL). Domain-specific protocols may be added additively as real incidents occur. See E3 for the null-result rationale." Do not fabricate protocols from speculation.

**Where seam S9 is `"status": "empty"`:** the `IRON_LAW.md` §7 cardinal-sin prevention block is left as a placeholder — do not substitute a speculative cardinal sin.

**M-5 — Generate the domain validation methodology (SPEC — regenerated domain analogue; I3 analogue):**

VALIDATION_METHODOLOGY is a SPEC item, not a GEN verbatim port (see note ① in Step 2; `adapter/notes/05_architecture_and_theory.md` §"THE SPLIT"). Do NOT copy `protocols/VALIDATION_METHODOLOGY.md` from the reference project — that file contains source-domain-specific logic. Instead, emit a domain-specific validation methodology regenerated from two sources:

- **Generic validation principles** (domain-invariant): pre-register all hypotheses before testing; the out-of-sample survival / parity gate as the domain's analogue of "does this hold on held-out data?"; evidence must be pre-registered, not post-hoc selected; the structural prevention of lookahead / selection bias.
- **New domain's success criteria** (from E1 goal, E5 coverage, E8 converged knowledge): what constitutes a valid result in this domain, what the failure modes are, and what evidence bar the domain's core go/no-go judgment (S10) requires.

Generate via the **8-slot anatomy** (same as S6/S9 SPEC protocols): (1) protocol name; (2) failure mode it prevents (the domain's analogue of "lookahead / post-hoc selection"); (3) structural prevention mechanism; (4) RED test specification; (5) grounding citations from scar_protocols.md and E8 knowledge; (6) GEN/INSTANCE tag; (7) deterrent (how the error is made non-representable by design); (8) load trigger condition.

Emit to `<out>/<domain>/protocols/VALIDATION_METHODOLOGY.md`. Clear the §4 gate for this file — it governs the domain's core validation discipline and must meet the same standard as any engine stage file. **This file must contain NO content specific to the source domain (no source-domain instrument logic, domain-specific pricing mechanics, domain-specific data structures, or reference-project-specific rules).** Add its load-trigger row to the `CLAUDE.md` binding-protocols table.

Record in the Ledger entry: each SPEC protocol emitted (or the placeholder record for empty S6); the S6-empty / S9-empty decisions if applicable; the per-seam slot fills; M-5 generated as REGENERATED domain analogue (source-domain-free confirmed YES/NO).

---

### Step 4 — Emit the zeroed memory skeleton with L-B integrity invariants (I4)

Emit an empty-but-correctly-structured 3-tier memory into `<out>/<domain>/memory/`. This is suite item M-6 and the foundation of every future session's resume ritual.

**Files to emit:**

**Tier-1 Ledger** — `<out>/<domain>/memory/ledger/L-0000-format.md`: a single format-specification entry with ID `L-0000`, type `format`, date = E10 emit date. Content: the schema that all subsequent entries must follow (ID · date · type · prose sufficient to reconstruct reasoning without live context). No substantive entries yet; the first real entry will be `L-0001` when the domain BUILDER begins Phase 0.

**Tier-2 State** — `<out>/<domain>/memory/state.md`: initialized to phase = 0 (not started), active task = none, Ledger highest ID = 0, open threads = none, `coverage_register_count` = 0, Resume mode = CONTINUE (boot). Include a `## Boot` section noting: emitted by E10, the engine session-id, the emit date, and a pointer to the E9 probe report Ledger entry.

**Tier-3 Index** — `<out>/<domain>/memory/index.md`: a single header row only — `| ID | Date | Type | Summary |`. Zero data rows. L-B invariant 1 at emit: Ledger highest-ID (0) = Index data rows (0) = Index table rows − 1 (1 header − 1 = 0). ✓

**Tier-3 Coverage Register** — `<out>/<domain>/memory/coverage_register.md`: emit a truly zeroed register — header row only, zero data rows. Format: `| ID | Category (from S5 taxonomy) | Question | Status | Ledger-ref |`. The initial build backlog (the question categories from S5, the evidence-bar sub-questions from S10, the aspects to cover) belongs in the emitted KNOWLEDGE/SPEC package (`memory/knowledge_package.md`, assembled at Step 7), not pre-seeded here. The domain BUILDER seeds the Coverage Register together with its first Ledger entry (L-0001), so the L-B invariant `Ledger highest-ID = Register rows − 1` holds from the first real entry onward.

**Integrity invariant assertions (run before recording; record each as hard PASS/FAIL in Ledger):**

1. **Ledger-Index count:** Ledger highest-ID (0) = Index data rows (0). **PASS** — both zero at emit by construction (Ledger has only L-0000 format entry, no data entries; Index has header row only). **FAIL** if any mismatch.
2. **Register line-balance:** Register data rows (0) = State `coverage_register_count` (0). **PASS** — both zero at emit by construction. The domain BUILDER seeds both together on first entry, preserving the invariant. **FAIL** if register has pre-seeded data rows or State field ≠ 0.
3. **Append-only baseline:** Ledger file at emit contains exactly L-0000 (format entry) — no rows have been deleted or modified (there are none to delete). **PASS** by construction. `git diff --diff-filter=DR` on the Ledger file is clean at baseline. L-B append-only invariant applies from the domain BUILDER's first commit onward; record this note as the baseline, not a waiver.
4. **Tests green:** Noted as placeholder — the domain BUILDER will establish the test suite per M-3 (TDD_AND_CODE_INTEGRITY) before writing any code. Record the placeholder explicitly.

Record all four invariant assertions as hard **PASS / FAIL** in the Tier-1 Ledger entry under `### Memory skeleton integrity check`. A FAIL on any of assertions 1–3 is a Step 4 failure — correct before proceeding.

---

### Step 5 — Emit the domain BUILDER + ADVISOR boot-blocks, fail-safe-to-read-only (I5)

Render `00_BOOTSTRAP.template.md` into `<out>/<domain>/00_BOOTSTRAP.md` with domain slot values from `seams.json`. The boot-blocks must be freshly named for the new domain (from S1:PROJECT_NAME and S1:PROJECT_SLUG) — the emitted file must contain no generic template placeholders.

**BUILDER boot-block requirements (the "Resume as the BUILDER" fenced block):**

The emitted BUILDER boot-block is a structural artifact, not a suggestion. It **must** contain the L-0051 fail-safe-to-read-only clause as a baked-in, non-optional property:

```
Clarification (L-0051): "ignore" here means a SPURIOUS mid-task flip with no operator
behind it — NOT an explicit operator instruction. An explicit operator ADVISOR declaration
in THIS chat IS authoritative: STOP and switch to advisor/ADVISOR.md (read-only). A CLI
"Advisor" tab/banner is a non-binding human reminder, not a role-setter — but on any
role ambiguity, fail safe to read-only.
```

The asymmetry is permanent and structural: a BUILDER that under-acts on role ambiguity (stays read-only) is safe; a BUILDER that silently writes on ambiguity is a safety failure. This asymmetry must be stated in the emitted block, not merely referenced.

The BUILDER block must also contain: the domain project name (S1:PROJECT_NAME), the project slug (S1:PROJECT_SLUG), the §10.5 resume ritual instruction, the S3 human-approval gate reminder (from seam S3), and the standing FROZEN scaffolding constraint.

**ADVISOR boot-block requirements (the "Resume as the ADVISOR" fenced block):**

The emitted ADVISOR boot-block must: explicitly state "You are READ-ONLY"; name the domain project (S1:PROJECT_NAME); restrict writes to `advisor/`; prohibit builder-ritual execution and project-file edits; state "On any role ambiguity, stay read-only."

**CLAUDE.md STEP 0 role check (L-0051 fail-safe baked into the always-loaded surface):**

The `CLAUDE.md` rendered at Step 2 must have its STEP 0 section filled with the fail-safe rule structurally active:
- BUILDER explicitly declared → proceed to resume ritual.
- ADVISOR explicitly declared by the operator in this chat → STOP, read-only; do not run builder ritual; write only to `advisor/`.
- UNDECLARED / ambiguous → STOP and ask "builder or advisor?"; on any ambiguity lean read-only.
- **FAIL SAFE:** on ANY role ambiguity, default to read-only — never the writing builder. The cost is asymmetric: a builder that under-acts is safe; a misfired writer is a safety failure and voids the read-only guarantee.

After rendering, verify the fail-safe clause is present verbatim in both `00_BOOTSTRAP.md` (BUILDER block, Clarification L-0051 line) and `CLAUDE.md` (STEP 0 FAIL SAFE bullet). A missing fail-safe clause in either file is a compliance failure — correct before recording.

Record in the Ledger entry: BUILDER block emitted with L-0051 fail-safe clause (YES/NO); ADVISOR block emits READ-ONLY (YES/NO); CLAUDE.md STEP 0 fail-safe active (YES/NO).

---

### Step 6 — Suite-completeness gate (DoD 4 — the operator's core requirement)

Before emitting the verification report, run the suite-completeness gate. This gate is binary — a scaffold missing any suite item FAILS; there is no partial credit. This is the soul-preservation guarantee: the emitted scaffold either carries the complete discipline intact or it does not.

**Per-item check (run for each M-1 through M-9):**

| Item | Criterion (all conditions must hold) | PASS / FAIL |
|---|---|---|
| M-1 · AI_OPERATING_DISCIPLINE | file exists at stated emit path; `diff` vs source GEN sections = zero output | PASS / FAIL |
| M-2 · PROMPT_ENGINEERING (incl. §4 gate) | file exists; `diff` vs source = zero; §4 gate block (`[ ]` or `[x]` lines) present in file | PASS / FAIL |
| M-3 · TDD_AND_CODE_INTEGRITY (GEN §A–§C, §E–§J) | file exists; `diff` on GEN sections vs source = zero; domain slots filled | PASS / FAIL |
| M-4 · CONTEXT_HYGIENE | file exists; `diff` vs source = zero | PASS / FAIL |
| M-5 · VALIDATION_METHODOLOGY (domain analogue) | file exists; was REGENERATED (not copied) — confirmed by Step 3 Ledger record; contains no source-domain specifics — confirmed by genericization check | PASS / FAIL |
| M-6 · 3-tier memory + L-B invariants | all four memory files exist; Coverage Register has zero data rows; all Step 4 invariant assertions recorded PASS in Ledger | PASS / FAIL |
| M-7 · Resume ritual | `CLAUDE.md` resume-ritual section present; matches GEN template section verbatim | PASS / FAIL |
| M-8 · Research template (§11) | `IRON_LAW.md` §11 slot present and filled verbatim from GEN template | PASS / FAIL |
| M-9 · The loop (§8 exhaustiveness-as-register) | `IRON_LAW.md` §8 slot present and filled verbatim from GEN template | PASS / FAIL |

**Genericization check (re-runnable artifact, not a self-report):**

Run a domain-leak search to confirm no source-domain-specific content has leaked into ANY part of the emitted scaffold — all nine suite items (M-1–M-9), the scaffold surfaces (boot-blocks, skeleton, knowledge package), and the verification report. Use a pattern appropriate to the source domain (the source project's domain name and domain-specific jargon):

<example>
For a scaffold derived from a financial-trading reference system, the check would be:
  grep -ri "kalshi\|prediction.market\|ticker\|trading" \
    <out>/<domain>/protocols/*.md \
    <out>/<domain>/IRON_LAW.md \
    <out>/<domain>/CLAUDE.md \
    <out>/<domain>/00_BOOTSTRAP.md \
    <out>/<domain>/memory/ \
    <out>/<domain>/_verification/
Any hit anywhere in the emitted scaffold that is NOT inside the designated source-domain referent section or an `<example>` block is a domain-leak FAIL.
</example>

Any hit in any emitted scaffold file outside the designated source-domain referent section or an `<example>` block is a genericization failure — correct and re-run before proceeding.

**If any item returns FAIL or the genericization check fires:** the scaffold is non-compliant. Correct the failing item, re-run the check, and record both the failure and the correction in the Ledger before moving to Step 7. Do not proceed to Step 7 with any open FAIL.

Record the complete per-item table (with PASS/FAIL results) in the Tier-1 Ledger entry as a `### Suite-completeness gate`.

---

### Step 7 — Package the converged knowledge + E9 probe report (I8 input)

Assemble the answered-to-build-depth knowledge package into the new scaffold, making the E7/E8 intelligence and the manufactured-soul record available to the domain BUILDER from first boot.

**(a) Converged knowledge (from E7/E8):** Extract the SURVIVED answered-question records from the E8 convergence Ledger entries and the E7 answered-question record Ledger entries (by ID). Write a structured summary to `<out>/<domain>/memory/knowledge_package.md` — one entry per answered aspect, each entry containing: the aspect name, the converged answer summary, and the Tier-1 Ledger ID of the originating E7 entry. This file is the domain BUILDER's initial knowledge foundation; it is additive-only and does not replace the full Ledger (which the BUILDER extends from the first session).

**(b) E9 probe report:** Append the full E9 probe report section from the session Tier-1 Ledger (`## E9 Probe Report — <goal name>`) to `knowledge_package.md` under the heading `## E9 Probe Report`. Include: what was built, all surprises and their dispositions, spawned reopened questions and their resolution status, and the termination condition. This makes the manufactured-soul record (the probe's surprises and their resolution) visible to the domain BUILDER from boot, so it does not re-discover what the probe already resolved.

Record in the Ledger entry: the path of `knowledge_package.md` and the count of aspects summarized from E7/E8.

---

### Step 8 — Emit the verification report (I8)

Emit the structured verification report at `<out>/<domain>/_verification/report.md`. This file is a required E10 output and E11's evidence input — its existence and complete content are the evidence that E10 ran correctly.

**Required sections:**

**§1 — Suite-completeness checklist:** Reproduce the Step 6 per-item table with its PASS/FAIL results. For M-5, include an explicit line: `M-5 REGENERATED: [YES/NO] — source-domain specifics present: [YES/NO]`. If any item carries FAIL, head this section with: `SCAFFOLD NON-COMPLIANT: [list of failing items]`. Do not suppress FAILs or replace FAIL with PASS.

**§2 — Integrity invariants (from Step 4):** Each sub-check must carry an explicit verdict: PASS or FAIL (for deterministic assertions) or NOTED (the only named allowed state, for genuinely non-binary observations that the domain BUILDER resolves at first boot). A blank sub-check field is not acceptable. Sign-off is withheld if any sub-check is blank or records FAIL.
1. Ledger-Index count: Ledger highest-ID (N) = Index table rows − 1. PASS / FAIL
2. Register line-balance: Register row count = State `coverage_register_count`. PASS / FAIL
3. Additive-only check: baseline noted (applies from domain BUILDER's first commit). NOTED
4. Tests green: placeholder noted (established by BUILDER per M-3 TDD protocol). NOTED

**§3 — Isolation confirmation (filled from Step 9 result — ordering note):** Binary result (four sub-checks, all required PASS). Each sub-check must carry explicit PASS or FAIL; no blank or pending fields. Sign-off is withheld if any sub-check is blank or records FAIL. **Ordering:** §3 depends on Step 9, which runs after the initial report draft. Emit §1, §2, §4, and §5 first; write §3 as `PENDING — Step 9 not yet run`. After Step 9 completes, return to this file and replace the placeholder with the actual Step-9 verdict. E10 sign-off (Step 10 condition c) verifies §3 holds the real verdict before accepting the report. Sub-checks: (i) reference-file hash check — PASS if all pre-emit content hashes of reference paths match post-emit (no uncommitted modifications); FAIL if any hash differs; (ii) working-tree/index check — `git status --porcelain` shows no unexpected modified/staged/untracked entries outside the allowed write-set; PASS if clean; (iii) deletion/rename check — `git diff --diff-filter=DR` on reference files returns empty; PASS if clean; (iv) allowed-write-set confinement — all new or modified files are within `<out>/<domain>/` or the session Ledger/audit files; PASS if nothing written outside the allowed write-set.

**§4 — Boot-block properties:** Each sub-check must carry explicit PASS or FAIL; no blank fields. Sign-off is withheld if any sub-check is blank or records FAIL. (i) BUILDER boot-block contains L-0051 fail-safe clause (PASS/FAIL); (ii) ADVISOR boot-block states READ-ONLY (PASS/FAIL); (iii) CLAUDE.md STEP 0 fail-safe active (PASS/FAIL).

**§5 — Honest ceiling:** The verification report must include the following statement verbatim:

> A PASS on every item above confirms the emitted scaffold carries the complete genericized protocol suite and satisfies E10's structural requirements. It does not guarantee the domain BUILDER/ADVISOR pair will reach parity with the reference project. Parity is earned by the live BUILDER/ADVISOR run and the operator's use of the delivered artifact, graded downstream via the validation methodology, and never guaranteed in advance by scaffold emission alone.

---

### Step 9 — Isolation confirmation and reference-file integrity check

Run this step immediately after Step 8's draft report is written (§3 marked `PENDING`). The Step-9 result is written into §3 of the verification report before E10 sign-off — this ordering makes §3 coherent: it contains an actual verdict, not a forward-reference to a check that has not yet run.

**ALLOWED WRITE-SET (explicit):** The engine's own session Tier-1 Ledger and audit files (paths under the session working directory that are part of the engine's operational record) AND the new project output directory `<out>/<domain>/`. Any file modified or created outside this set — whether committed, staged, or untracked — FAILS. The Ledger/audit write is in the allowed write-set by definition; it does not cause an isolation failure.

**Pre-emit hash capture (must be done BEFORE Step 2 begins):** At the start of E10 (immediately after Step 0 re-anchor), record the SHA-256 content hash (or equivalent) of every tracked reference path that the INITIATOR reads but must not write — reference protocol files, engine stage files, law files, adapter notes, templates — everything outside `<out>/<domain>/` and outside the session Ledger/audit files. Write as `work/<session-id>/pre_emit_hashes.txt`. This capture is the ground truth that check (i) compares against; it catches uncommitted edits that a `git diff <pre-emit-commit>..HEAD` range would miss if the edit has not yet been committed.

**Run the full isolation check (four parts, all must PASS):**

**(i) Reference-file hash check (catches uncommitted modifications and untracked overwrites):** After all emission steps (Steps 2–8 draft complete), recompute the content hash of every path from `pre_emit_hashes.txt`. Compare: `diff pre_emit_hashes.txt post_emit_hashes.txt`. Any hash that differs means a reference file was modified (committed or not) — **FAIL**. Byte-equality is the standard; a reference file passes only if it is hash-identical to its pre-emit state.

**(ii) Working-tree and index check (catches untracked stray files):** Run `git status --porcelain`. Inspect every line: any path that is modified (`M`), staged (`A`/`M`), or untracked (`?`) AND falls outside the allowed write-set is a stray write — **FAIL**. Modified/staged/untracked entries inside the allowed write-set (i.e., under `<out>/<domain>/` or in the session Ledger/audit file paths) are expected and do not fail this check.

**(iii) Deletion/rename check (catches committed deletions or renames of reference files):** `git diff --diff-filter=DR HEAD -- <reference-files-and-dirs>`. Any output (any deleted or renamed reference file path) — **FAIL**.

**(iv) Allowed-write-set confinement:** Review all files created or modified during Steps 2–8 (via `git status --porcelain` combined with `find <out>/<domain>/ -newer work/<session-id>/pre_emit_hashes.txt`). Confirm every new or modified file is either under `<out>/<domain>/` or is the session Tier-1 Ledger/audit file. Any file outside the allowed write-set — **FAIL**.

**Binary verdict:**
- **All four checks PASS:** PASS. Record in the Ledger: "Isolation check PASS — reference-file hashes unchanged (check i); working-tree/index clean outside allowed write-set (check ii); no committed deletions/renames (check iii); all emits confined to allowed write-set `<out>/<domain>/` + session Ledger/audit (check iv)."
- **Any failure in any of the four checks:** FAIL. A modified, deleted, renamed, or stray-path file outside the allowed write-set is a data-integrity violation — stop, recover the affected file(s) from the pre-emit hash record or git history, record the incident in the Ledger with the recovery action, and resolve before declaring E10 complete.

**Update report §3 after recording the verdict:** Open the verification report at `<out>/<domain>/_verification/report.md` and replace the `PENDING — Step 9 not yet run` placeholder in §3 with the actual four-part verdict (each sub-check: PASS or FAIL). E10 sign-off (Step 10 condition c) verifies §3 is filled with the real verdict before accepting the report.

**Additive-only verification:** Confirm `<out>/<domain>/` is a new path — no prior tracked content at that path was overwritten. The emission is to a new directory only.

---

### Step 10 — E10 sign-off and route to E11

E10 is complete when all five conditions are explicitly confirmed and recorded:

**(a)** All steps (0–9) have been executed and their results are in the Tier-1 Ledger entry under `## E10 Scaffold — <domain>`.

**(b)** The Step 6 suite-completeness gate returned PASS for all nine M-items (M-5 confirmed REGENERATED).

**(c)** The verification report (Steps 8 + 9) exists at `<out>/<domain>/_verification/report.md`; contains all five required sections; §3 carries the actual Step-9 isolation verdict (the `PENDING` placeholder written during Step 8 draft has been replaced with the real four-part result); every sub-check in §2, §3, and §4 carries an explicit PASS, FAIL, or named-allowed NOTED verdict (no blank or pending fields); and no FAIL appears in §1–§4.

**(d)** The isolation check (Step 9) returned PASS.

**(e)** The operator or controller reviews the verification report and gives explicit sign-off.

When all five conditions are met: record in the E10 Ledger entry the COMPLETE verdict, the output directory path `<out>/<domain>/`, and the verification report path `<out>/<domain>/_verification/report.md`. Route to E11 with this handoff: (i) scaffold path; (ii) verification report path; (iii) E9 CONFIRMED status (from Step 0d).

## Inputs / Outputs

**Inputs:**

- **`seams.json`** — the ten-seam parameterization artifact from E4. Format: JSON file. Location: `work/<session-id>/seams.json`. Re-read at Step 0(a). Provides S1–S10 domain values used throughout Steps 2–5.

- **`scar_protocols.md`** — the scar-tissue protocol set from E3. Format: Markdown file. Location: `work/<session-id>/scar_protocols.md`. Re-read at Step 0(b). Provides S6 (SPEC protocol seeds) and S9 (cardinal sin) for Step 3.

- **E7/E8 converged knowledge package** — SURVIVED answered-question records and the E8 CONVERGED Ledger entry. Format: Tier-1 Ledger entries. Location: session Tier-1 Ledger file. Re-read at Step 0(c). Consumed at Step 7 to populate `knowledge_package.md`.

- **E9 CONFIRMED probe report** — the probe report section in the Tier-1 Ledger. Format: Markdown section under `## E9 Probe Report — <goal name>`. Location: session Tier-1 Ledger file. Re-read at Step 0(d). Trigger for E10; packaged into `knowledge_package.md` at Step 7.

**Outputs (all under `<out>/<domain>/` — the new project directory):**

- **`protocols/` directory** — contains M-1 through M-4 (GEN suite, verbatim from source) + M-5 (VALIDATION_METHODOLOGY, domain analogue, regenerated at Step 3) + domain SPEC protocols for S6/S9 from Step 3. Format: Markdown files. Location: `<out>/<domain>/protocols/`.

- **`IRON_LAW.md`** — the domain governance surface. GEN skeleton + S1–S5, S7, S8 domain slots filled; M-8 (research template §11) and M-9 (loop §8) verbatim GEN slots. Location: `<out>/<domain>/IRON_LAW.md`.

- **`CLAUDE.md`** — the domain operating surface. Contains M-7 (resume ritual), STEP 0 role check (L-0051 fail-safe active), and binding-protocols table (incl. domain SPEC protocol rows). Location: `<out>/<domain>/CLAUDE.md`.

- **`00_BOOTSTRAP.md`** — the domain boot-block file. Contains freshly-named BUILDER + ADVISOR paste blocks; the BUILDER block carries the L-0051 fail-safe-to-read-only clause. Location: `<out>/<domain>/00_BOOTSTRAP.md`.

- **`memory/` skeleton** — truly-zeroed 3-tier memory with all L-B invariants verified PASS at emit. Contains: `ledger/L-0000-format.md`, `state.md`, `index.md`, `coverage_register.md`. Coverage Register is header-row only (zero data rows); the domain BUILDER seeds it together with its first Ledger entry. Location: `<out>/<domain>/memory/`.

- **`memory/knowledge_package.md`** — the converged knowledge + E9 probe record. Format: Markdown. Location: `<out>/<domain>/memory/knowledge_package.md`.

- **`_verification/report.md`** — the I8 verification report. Sections: suite checklist §1, integrity invariants §2, isolation confirmation §3, boot-block properties §4, honest ceiling §5. Format: Markdown. Location: `<out>/<domain>/_verification/report.md`. Consumed by E11.

- **E10 Tier-1 Ledger entry** — the operational record of this stage. Format: Markdown section appended to the session Tier-1 Ledger (append-only per L-B). Location: session Tier-1 Ledger file. Contains: Step 0 re-anchor confirmation; Step 1 mode check; per-M-item diff results (Step 2); slot-fills + SPEC protocol list (Step 3); memory integrity assertions (Step 4); boot-block compliance record (Step 5); suite-completeness gate table (Step 6); knowledge package aspect count (Step 7); isolation check result (Step 9); COMPLETE verdict (Step 10).

Every artifact named in the Protocol section appears here. Every output listed here is referenced in the Protocol.

## Acceptance checks (binary)

1. **GEN core ported verbatim (M-1–M-4, M-6–M-9) + M-5 regenerated + all S1–S10 seams accounted for?** YES if: (a) all four GEN protocol files (M-1–M-4) exist in `<out>/<domain>/protocols/` and a `diff` against source GEN sections returns zero output for each; AND (b) M-5 (`protocols/VALIDATION_METHODOLOGY.md`) exists and was REGENERATED (not copied) — confirmed by Step 3 Ledger record showing it was generated via the 8-slot anatomy from generic validation principles + domain success criteria; AND (c) `IRON_LAW.md` contains the M-8 research-template §11 slot and M-9 loop §8 slot filled verbatim from the GEN template; AND (d) seams S1–S5, S7, S8 are filled in `IRON_LAW.md` from `seams.json` (no unfilled `{{Sn:NAME}}` placeholders remain); AND (e) seam S6 is either: SPEC protocol(s) rendered in `protocols/` from `seams.json` (confirmed in Step 3 Ledger), OR explicitly recorded `empty` per E3 State B null-result (not fabricated); AND (f) seam S9 is either: structural prevention rendered in `IRON_LAW.md` §7 or as a SPEC protocol, OR explicitly recorded `empty` in the Step 3 Ledger; AND (g) seam S10 is either: core go/no-go judgment + evidence bar represented in `memory/knowledge_package.md` (Step 7 output), OR explicitly recorded `empty` in the Step 7 Ledger entry. NO if any GEN file (M-1–M-4) is absent or paraphrased; if M-5 was verbatim-copied rather than regenerated; if the diff on any GEN section is non-zero; if any S1–S8 placeholder remains unfilled; or if S6, S9, or S10 is neither rendered nor explicitly recorded as empty in the Ledger.

2. **Truly-zeroed memory skeleton with ALL L-B integrity invariants PASS?** YES if: (a) all four memory files exist (`ledger/L-0000-format.md`, `state.md`, `index.md`, `coverage_register.md`); AND (b) Coverage Register contains header row only — zero data rows (NOT pre-seeded); AND (c) State `coverage_register_count` = 0; AND (d) Ledger highest-ID (0) = Index data rows (0) — L-B invariant 1 PASS, confirmed at Step 4; AND (e) Register data rows (0) = State `coverage_register_count` (0) — L-B invariant 2 PASS, confirmed at Step 4; AND (f) Ledger contains only L-0000 format entry at emit, no rows deleted — append-only baseline PASS confirmed at Step 4; AND (g) `git diff --diff-filter=DR` on memory files at emit baseline is clean — additive-only PASS; AND (h) all Step 4 invariant assertions are recorded as hard PASS/FAIL in the Tier-1 Ledger entry. NO if any memory file is absent; if the register has pre-seeded data rows; if State `coverage_register_count` ≠ 0; if any L-B invariant assertion is FAIL or absent from the Ledger; or if Step 4 assertions are not recorded as PASS/FAIL verdicts.

3. **BUILDER + ADVISOR boot-blocks with fail-safe-to-read-only?** YES if: (a) `00_BOOTSTRAP.md` in the emitted scaffold contains both a BUILDER paste block and an ADVISOR paste block, with the domain project name (from S1) in both — no generic `{{S1:...}}` placeholders; AND (b) the BUILDER block contains the L-0051 fail-safe clause verbatim (the "Clarification (L-0051):" paragraph ending with "on any role ambiguity, fail safe to read-only"); AND (c) `CLAUDE.md` STEP 0 contains the FAIL SAFE bullet ("on ANY role ambiguity, default to read-only — never the writing builder"); AND (d) the ADVISOR block explicitly states "You are READ-ONLY." NO if any of the four sub-checks fails; a fail-safe clause present only as advice or commentary, not as a structural baked-in clause, is NOT sufficient.

4. **Complete-suite manifest — all nine M-items present, M-5 regenerated, all genericized?** YES if: (a) the Step 6 suite-completeness gate table in the Tier-1 Ledger records PASS for all nine M-items; AND (b) M-5 was REGENERATED — confirmed by Step 3 Ledger record, and the I8 §1 entry for M-5 states "REGENERATED — source-domain specifics present: NO"; AND (c) the genericization check returned zero hits across ALL emitted scaffold files (protocols, skeleton surfaces, knowledge package, verification report) outside designated source-domain referent sections or `<example>` blocks; AND (d) the I8 verification report §1 shows PASS for all nine M-items with no FAIL. NO if any M-item carries FAIL at Step 6; if M-5 was verbatim-copied; if the genericization check fired anywhere in the emitted scaffold outside a referent section or example; or if the I8 report is absent or carries any FAIL in §1.

5. **Verification report (I8) emitted?** YES if: (a) `<out>/<domain>/_verification/report.md` exists; AND (b) it contains all five required sections (suite checklist §1, integrity invariants §2, isolation confirmation §3, boot-block properties §4, honest ceiling §5); AND (c) every item in §1 carries an explicit PASS or FAIL verdict — no blank fields; AND (d) §5 contains the honest-ceiling statement (the verbatim paragraph from Step 8 §5); AND (e) every sub-check in §2, §3, and §4 carries an explicit PASS, FAIL, or named-allowed NOTED verdict — no blank or pending fields (NOTED is acceptable only for genuinely non-binary observations; a blank or pending field is not acceptable); AND (f) §3 carries the actual Step-9 isolation verdict, not the `PENDING` placeholder written during the Step 8 draft. NO if the file is absent; if any required section is missing; if any §1 item has a blank verdict; if any §2/§3/§4 sub-check is blank, pending, or records FAIL; or if §3 has not been updated with the Step-9 result.

6. **Reference files never modified or deleted — isolation binary?** YES if: (a) the pre-emit hash file (`work/<session-id>/pre_emit_hashes.txt`) was captured before Step 2 and the post-emit hash comparison returns zero differences — all reference files byte-identical to pre-emit state (catches uncommitted modifications missed by a commit-range diff); AND (b) `git status --porcelain` shows no modified/staged/untracked entries outside the allowed write-set (`<out>/<domain>/` plus session Ledger/audit files) — no stray untracked files outside the write-set; AND (c) `git diff --diff-filter=DR HEAD -- <reference paths>` returns empty output (zero committed deletions/renames); AND (d) all new or modified files confirmed within the allowed write-set; AND (e) the Step 9 Tier-1 Ledger entry records "Isolation check PASS" for all four sub-checks; AND (f) the verification report §3 has been updated with the actual Step-9 verdict (the `PENDING` placeholder is gone). NO if any reference file was modified (hash differs from pre-emit, whether committed or not), deleted, or renamed; if any file outside the allowed write-set was created or modified (committed, staged, or untracked); if any of the four Step 9 sub-checks was not executed and recorded in the Ledger; or if §3 still holds a placeholder verdict.

## Honest ceiling

Full compliance with E10 — all nine M-items PASS in the suite-completeness gate (M-5 REGENERATED as a domain analogue, M-1–M-4/M-6–M-9 verbatim-ported), valid boot-blocks with fail-safe baked in, truly-zeroed memory with all L-B invariants confirmed PASS, a clean isolation check (modifications + deletions/renames + output-path confinement all PASS), and a complete verification report — does not guarantee that the new domain project will reach parity with the reference project.

The specific residual failure mode: **a verbatim-complete suite is the necessary substrate for parity, not sufficient evidence of it.** The GEN protocols transferred byte-for-byte carry the trust machinery in its most potent form — the full prompting discipline, context hygiene, adversarial posture, memory architecture, and every aspect of the operating system the operator requires. But that machinery is only activated by use: by the live BUILDER/ADVISOR pair running the protocols against real domain material, building real artifacts, surfacing real surprises through real iteration, and compounding quality over many sessions. A scaffold that has never been booted has no evidence of activation. A scaffold that has been through E9's thin-slice probe has evidence of one manufactured activation pass — not the full arc. The quality that the reference project earned was produced by hundreds of real research cycles, compaction events, adversarial review rounds, human-approval gates, and the specific lived surprises that pushed its protocols to their current strength. That quality is not transferable by emission; it is only reproducible by doing.

The verification report's honest-ceiling statement (Step 8 §5) makes this explicit at the point of delivery. Parity is earned and tested downstream — by the live BUILDER/ADVISOR run and the operator's use of the delivered artifact, graded by the validation methodology — and is never guaranteed in advance by scaffold emission alone.

## Cross-references
- **E4** (`stages/E4_extract_seams.md`) — E10's primary parameterization source. `seams.json` (produced and signed off by E4) provides all ten S1–S10 values consumed in Steps 2–5. E4's Step 5 hard gate ("E10 cannot run until E4 is signed off") is E10's prerequisite. `seams.json` carries `"consumed_by": "E10"`.
- **E3** (`stages/E3_scar_tissue.md`) — SPEC protocol source via S6 and S9. `scar_protocols.md` (produced by E3) is re-read at Step 0(b) and consumed at Step 3. E3 State B (NULL) yields empty S6/S9 — both are valid, honest outputs that E10 handles as placeholders rather than fabrications.
- **E7/E8** (`stages/E7_answer_kill_loop.md`, `stages/E8_convergence_gate.md`) — E10 consumes the E8 CONVERGED knowledge package (answered-question records) at Step 7 to populate `knowledge_package.md`. E8's CONVERGED verdict is a prerequisite for E9, which is a prerequisite for E10.
- **E9** (`stages/E9_build_probe.md`) — E10's immediate upstream. The E9 CONFIRMED probe report (Step 7 output, Tier-1 Ledger section `## E9 Probe Report`) is E10's trigger and a Step 0 hard prerequisite. It is packaged into `knowledge_package.md` at Step 7. E9 Step 7 routes to E10 on CONFIRMED status.
- **E11** (`stages/E11_terminal_state.md`) — E10's downstream. E10's emitted scaffold + verification report flow into E11's terminal-state declaration. E11 receives: scaffold path, verification report path, and E9 CONFIRMED status.
- **L-B** (`laws/L-B_3tier_memory.md`) — governs the truly-zeroed memory skeleton (Step 4). All L-B integrity invariants are asserted as hard PASS/FAIL at emit time: Ledger-Index count (highest-ID = data rows, both zero at emit); Register line-balance (State `coverage_register_count` = 0 = register data rows); append-only baseline (Ledger has only L-0000 at emit). The E10 Tier-1 Ledger entry is append-only per L-B.
- **L-D** (`laws/L-D_freeze.md`) — governs the additive-only property of the GEN core. The GEN protocols are ported additive-only: nothing is removed or weakened. SPEC protocols are additions (domain instances), never modifications of GEN content. This is the L-D property applied at E10.
- **L-E** (`laws/L-E_evidence_over_assertion.md`) — the verification report (I8) is an evidence artifact, not a prose assertion. "Suite complete" without a per-item Step 6 table and a persisted verification report is an unverifiable self-report under L-E; it is not accepted as a passing E10 verdict.
- **L-A** (`laws/L-A_adversarial_posture.md`) — a "suite complete" verdict is a flattering finding and receives extra scrutiny: the Step 6 genericization check (all 9 suite items + scaffold surfaces), the diff-zero verification for M-1–M-4 and REGENERATED confirmation for M-5, and the I8 per-item checklist are the L-A countermeasures at E10. A CLEAN Step 6 pass requires the artifact-check evidence, not a self-report.
- **GOVERNANCE.md §2** — the 8-line prompt-quality gate this file must clear; gate line (e) is the controller's responsibility and requires a cross-family codex audit result recorded in the build LEDGER before this file is finalized.
- **GOVERNANCE.md §5** — E10's mandate: "the engine's emit stage E10 renders the COMPLETE genericized protocol suite into every scaffold it produces … not a thinned abstraction." DoD 4 and the Step 6 suite-completeness gate are the direct implementation of §5.
