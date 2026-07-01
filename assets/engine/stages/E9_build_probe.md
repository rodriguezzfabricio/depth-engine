<!--
PROMPT-QUALITY GATE (GOVERNANCE §2) — clear all 8 before marking this file "done":
[x] a. DoD quantified      — Four binary acceptance checks (checks 1–4), one per DoD item: probe-pass completed and mandatory (check 1); surprise→tracked-reopened-question mechanism with binary teeth — a surprise without a spawned question is a protocol violation (check 2); ≥1-mandate stated + L-D bound named with explicit termination condition + distinction from count-floor HAZARD confirmed (check 3); manufactured-not-lived honest framing present in Purpose + named specific residual failure mode in Honest ceiling (check 4).
[x] b. Scope manifest      — Four DoD items listed in task-16-report.md §Manifest; reconciled with file:line evidence in §Reconciliation before commit.
[x] c. Levers, deliberate  — Eight-step Protocol (Steps 0–7). Build-mode-only gate at Step 1 isolates the probe from decision-mode entirely (decision-mode skips E9; recorded in the Ledger). Thin-slice selection at Step 2 applies an anti-trivial check to maximise surprise potential. Surprise triage at Step 5 separates load-bearing from non-load-bearing before routing; neither category may be silently omitted. L-A asymmetry applied at Step 6 to a clean probe (extra scrutiny on slice representativeness — a trivially easy slice is rejected and replaced). L-D termination condition named explicitly at Step 6 (three named terminal conditions, L-D cited). ≥1 mandate distinguished from count-floor HAZARD in load-bearing constraint 5 and in the Purpose paragraph.
[x] d. Countermeasures     — Context-rot: intent_brief.md, aspect_map.md, and E8 CONVERGED Ledger entry re-read from file at Step 0; five load-bearing constraints restated at top of Protocol block for context-rot resistance. Satisficing: four binary acceptance checks + E9 probe report required as a Tier-1 Ledger entry (artifact, not self-report). Sycophancy: clean probe receives MORE scrutiny via L-A asymmetry at Step 6 (representativeness check; trivially easy slice is rejected); the brief says flattering → extra scrutiny, and this is structurally enforced. Hallucination: "no surprises found" is not accepted as a free assertion — it routes through the Step 6 representativeness check and is pinned to the E9 Ledger entry recording what was built, what was probed, and the representativeness rationale.
[x] e. Cross-family audit  — codex (gpt, task-16-codex-audit.txt): all 4 DoD DONE; EVERY load-bearing category CLEAN (teeth, bounded-by-L-D, count-floor distinction, clean-probe asymmetry, metadata, refs, referent). 1 minor: "parity is achieved downstream" overclaim → fixed to "earned/tested downstream, never guaranteed". Recorded B-0021.
[x] f. Alignment trace     — UP: E9 → engine README stages table ("Build-probe loop (mandated once; the manufactured soul)") → spec §0.1 hybrid-fork B-0002 (ONE mandated build-probe after first convergence; DoD REQUIRES ≥1 build-probe pass) → GOVERNANCE §2 → engine mission (manufacture domain-expertise depth for any domain without prior lived iteration). DOWN: build-mode-only is coherent with E8 routing (build-mode CONVERGED → E9; decision-mode CONVERGED → E11 directly, skipping E9 and E10 by design); ≥1 mandate coherent with spec §0.1 "DoD REQUIRES ≥1 build-probe pass"; L-D bound coherent with spec §0.1 "bounded version of the use→surprise→reopen soul — not open-ended interleaving"; surprise→E7/E8 reopen coherent with those stages' explicit reopen paths (E7 Step 6b Source 5; E8 reopen via E6→E7); E5 map-extension referenced for the missing-aspect case (E5 Honest ceiling names E9 as the "primary designed catch-point"); no contradictions found.
[x] g. Persisted           — Commit records this file; build LEDGER entry (task-16-report.md §Manifest) links to it; reachable from REGISTER task entry.
[x] h. Honest ceiling      — Honest ceiling section names the specific residual failure mode: one thin vertical slice cannot surface the long-tail failure modes that only emerge from sustained real use at scale — volume effects, cross-aspect interactions at scale, and actual end-user mental-model failures are invisible to a single probe; parity with the full arc of lived quality is earned downstream by the real BUILDER/ADVISOR run. Not a generic disclaimer.
-->

# E9 — Build-probe loop (mandated once; the manufactured soul)

### Binding · Load WHEN:
INITIATOR loads this stage immediately after E8 produces a CONVERGED verdict in build-mode. Trigger: the E8 Ledger entry under `## E8 Convergence Gate — <goal name> (pass <N>)` records verdict **CONVERGED** and `intent_brief.md` has `project-type: build`. Do not load before E8's CONVERGED verdict is recorded in the Tier-1 Ledger; E8 sign-off is a hard prerequisite. **E9 is build-mode ONLY:** a decision-mode project whose E8 verdict is CONVERGED routes directly to E11 and does not enter E9. E9 is not loaded for decision-mode projects under any circumstance (record "E9: N/A — decision-mode project" in the Ledger and route to E11).

## Purpose (one paragraph)
E9 is the engine's deliberately manufactured soul — a synthetic reproduction of stroke 1 and stroke 3 of the four-stroke loop (Theory §2): use the system on a real task and treat what breaks as load-bearing. A fresh domain has never lived the weeks of real, varied iteration that produce quality through earned scar tissue; a domain project's protocols at first convergence are speculative anticipation, not lived scars. E9 compensates for this gap by mandating, after first convergence, that the INITIATOR build one thin vertical slice from the converged knowledge and treat every surprise that emerges — anything that breaks, confuses, or violates an E1 success-criterion — as a tracked reopened question routed back to E7/E8 for re-convergence. The "done" verdict from E8 is provisional until the probe confirms it; a load-bearing surprise un-finishes convergence. The loop is bounded by L-D (the freeze law): one mandated probe is the floor; further probes run only on a NEW materially-distinct surprise; the loop terminates when a probe surfaces no new load-bearing surprise or the operator gates, so that E9 cannot become the infinite build-fix-rebuild regress L-D guards against. The distinction between the ≥1 probe mandate and a count-floor hazard is load-bearing: the mandate is a categorical requirement that at least one real probe is executed (a floor of 1 on a distinct activity — the manufactured-soul guarantee); a count floor is a separate, named quality hazard (counting iterations as coverage targets, which degrades quality). They are not the same concept. E9 manufactures SOME of the surprise that lived iteration earns over time; it does not replace the full arc — the Honest ceiling section names what remains.

## Kalshi referent (what proven mechanism this generalizes)
**Theory §2 four-stroke loop (strokes 1 and 3), as distilled in `adapter/notes/10_theory_of_excellence.md` §2, and spec §0.1 hybrid-fork decision (B-0002).** Stroke 1: "USE the system on a real, falsifiable task." Stroke 3: "When the adversary or the system's own behavior surprises you, treat the surprise as load-bearing — kill the headline thesis, reopen a 'done' verdict." The Kalshi mechanism E9 directly generalizes is **L-0050→L-0052**: after the blessed L-0042 mechanism had been confirmed by the main analysis, a post-freeze codex audit (L-0050) found it rested on an out-of-sample tier-leak — a real-build defect that forced the corrected re-run (Q-0255) that FALSIFIED the monotone mechanism (L-0052). "Done" un-finished itself when a real probe of the result surfaced a load-bearing defect. The companion referent is **spec §0.1 (hybrid fork, B-0002):** "Engine shape = hybrid front-load + ONE mandated build-probe loop (not interleaved); E9 runs after first convergence." The domain-general pattern — *build something real from the converged knowledge, treat what breaks as load-bearing, reopen convergence rather than shipping* — is the soul E9 manufactures for any domain that has no lived probe history. "Kalshi" appears in this section only as a named referent, not as a domain constraint on the protocol.

## Protocol (the steps the INITIATOR executes)

> **LOAD-BEARING CONSTRAINTS (restated at top for context-rot resistance):**
> 1. **≥1 probe pass is MANDATORY and binary.** A build-mode converged project CANNOT reach E10 without a completed probe pass. This is not advisory; a self-report that no probe was needed is a protocol violation.
> 2. **A surprise MUST become a tracked reopened question.** Anything that breaks, confuses, or violates an E1 success-criterion during the probe is a surprise. A surprise documented only as a Ledger note without a spawned reopened question is a protocol violation; silence is not accepted.
> 3. **"Done" can un-finish.** A probe surprise re-opens E8's CONVERGED verdict. Convergence is provisional until the probe confirms it or all load-bearing surprises are re-converged and re-probed.
> 4. **BOUNDED BY L-D.** ONE mandated probe is the floor. Further probes run ONLY on a NEW materially-distinct surprise — one whose resolution would change at least one E5 aspect's status and was not addressable from the previous round's reopened questions. The loop terminates when (a) a probe surfaces no new load-bearing surprise and the representativeness check passes, (b) all surprises have been addressed and re-convergence is confirmed, or (c) the operator gates. E9 cannot become an infinite build-fix-rebuild regress — that is the exact failure L-D guards. Cite L-D when recording the termination condition in the Ledger.
> 5. **≥1 probe MANDATE ≠ count-floor HAZARD.** The mandate is a floor of 1 on a DISTINCT categorical activity (at least one real probe must be executed — the manufactured-soul guarantee). A count floor is a different hazard: counting iterations or answered questions as coverage targets, which degrades quality. Do not conflate them. The probe mandate does not imply a minimum number of questions, aspects, or re-convergence cycles; it requires only that the probe activity itself runs at least once.

---

### Step 0 — Re-anchor from files (context-rot countermeasure)

Re-read the following from their files before doing anything else. Do not proceed from a recalled version — context degrades across long sessions; file re-reads are the context-rot countermeasure.

**(a)** Re-read `intent_brief.md` from `work/<session-id>/intent_brief.md`. Confirm project-type is `build` and record the operator's stated success criteria (the E1 success-criteria field). The success criteria define what "confuses" means in the surprise triage (Step 5): any probe outcome that contradicts a stated success criterion is a surprise, regardless of whether the artifact technically functions.

**(b)** Re-read `aspect_map.md` from `work/<session-id>/aspect_map.md`. Place the full aspect list at the top of working context. The aspect map defines what "load-bearing" means in the surprise triage (Step 5): a surprise is load-bearing when it changes at least one aspect's depth-status from ANSWERED-TO-DEPTH to PARTIAL or NOT-ANSWERED, or when it reveals an aspect the map does not include.

**(c)** Re-read the E8 Ledger entry (`## E8 Convergence Gate — <goal name> (pass <N>)`) from the Tier-1 Ledger. Record: the CONVERGED verdict, the per-aspect coverage table, and any notations from E8 about marginal aspects or narrow evidence. These inform the thin-slice selection at Step 2: aspects with the thinnest evidence or highest judgment-dependence in the coverage table are the best candidates for a surprise.

Do not proceed past Step 0 if: the E8 Ledger entry does not record a CONVERGED verdict; `intent_brief.md` has `project-type: decision` (see Step 1); or `aspect_map.md` is absent or not signed off.

---

### Step 1 — Build-mode gate (E9 is build-mode ONLY)

Read `project-type` from `intent_brief.md` as anchored at Step 0:

- **`decision`** — E9 does not apply. Record in the Tier-1 Ledger: "Step 1: decision-mode project — E9 skipped; E8 CONVERGED verdict routes to E11 directly." Stop; do not proceed further.
- **`build`** — confirm that E8's CONVERGED verdict is present in the Ledger (Step 0c). If no CONVERGED verdict is recorded, E9 cannot run — return to E8. If CONVERGED is confirmed, proceed to Step 2.

---

### Step 2 — Select the thin vertical slice

A thin vertical slice is one end-to-end unit of the deliverable — small enough to build in a single focused work pass, representative enough that building it will exercise real domain constraints and expose real gaps. It is not a mock, not a wireframe, not a thought experiment. It must be a real, inspectable artifact with observable behavior or inspectable content that can be reviewed against the E1 success criteria.

**Selection criteria (prefer in this order):**

1. **Exercises the most E5 aspects simultaneously.** A slice that touches foundational/structural aspects AND at least one experiential/user-facing aspect has higher surprise potential than a slice that touches only one. Prefer broader aspect coverage in the slice.
2. **Exercises the aspects with the thinnest convergence evidence** (those rated ANSWERED-TO-DEPTH on the narrowest evidence in the E8 coverage table, or noted marginal in the E8 Ledger entry). These are where a real build is most likely to reveal that "answered-to-depth" overstated the build-readiness of the answer.
3. **Includes at least one integrity/error-state path.** Error-state behavior is the most common source of real surprises during a first probe; include it deliberately when the deliverable has one.
4. **Is buildable from the converged knowledge alone.** If building the selected slice requires research beyond what the answered-question records provide, that gap is itself a surprise — record it as one in Step 4 and proceed with what is available.

**Anti-trivial check (mandatory before committing to a slice):** Ask: "Could this slice run without surfacing ANY surprise even if the converged knowledge has a significant gap — e.g. because it only exercises a single well-covered aspect in a path with no variation?" If yes, the slice is too trivial — select a broader or harder one. A trivially easy slice cannot honor the manufactured-soul purpose; it satisfies the ≥1 probe mandate mechanically while defeating it structurally.

Log the selected slice description and the selection rationale in the Tier-1 Ledger under `## E9 Build-Probe — <goal name>` before building.

<example>
For a project whose goal is to redesign a product detail page so that a first-time visitor can evaluate the product and commit to a purchase within three minutes without support assistance: the E5 aspect map includes trust signals, information hierarchy, call-to-action placement, error handling for unavailable items, and mobile layout. A representative thin vertical slice is: build the product detail page in its primary flow (item available, first-time visitor, standard viewport) end-to-end — rendering the actual layout, trust-signal placement, and add-to-cart CTA in the target medium (code, prototype, or annotated specification) — such that the artifact is inspectable against all five aspects simultaneously. The anti-trivial check passes: this slice exercises trust signals + information hierarchy + CTA together, where a gap in any one would affect the others, so a real gap has high probability of surfacing. A separate follow-up slice might target the error path (item unavailable / inventory mismatch) if the first probe terminates CLEAN and a new materially-distinct surprise exists on that path.
</example>

---

### Step 3 — Build the slice (real artifact)

Build the selected thin vertical slice from the converged knowledge base. This is an execution step, not a research step: the E7 answered-question records are the construction guide, and every build decision should be traceable to a converged answer. Do not conduct new research here; a decision point that requires information not in the converged answers is itself a surprise to be recorded.

**While building, record each of the following as potential surprises for Step 4 triage:**

**(a) Knowledge gaps:** Any decision point during the build where the converged knowledge does not provide enough specificity to make the build decision without guessing or defaulting to convention. Record: the decision point text, the aspect it belongs to, and the nature of the gap.

**(b) Implicit assumptions:** Any decision made by defaulting to a convention or a reasonable guess rather than a converged answer. Record: the assumption made, what converged answer it stands in for, and the aspect affected. An implicit assumption is a signal that the converged knowledge did not reach build-depth on that sub-concern, even if the E8 coverage table rated the aspect ANSWERED-TO-DEPTH.

**(c) Cross-aspect tensions:** Any case where honoring one aspect's converged answer creates tension with another aspect's converged answer — where satisfying both simultaneously requires a choice the convergence record did not address. Record: both aspects involved, the nature of the tension, and the choice made. A cross-aspect tension is often load-bearing.

The artifact produced by Step 3 is the probe object. It must be real and inspectable. A written description of what would be built is not the artifact; the built thing itself is.

---

### Step 4 — Probe the built artifact and record all surprises

Inspect and exercise the built artifact against the E1 success criteria and the E5 aspect map. The explicit job of this step is to surface SURPRISES — things that break, confuse, contradict, or reveal gaps. Do not filter at this step; record every candidate. Triage happens at Step 5.

**Probe passes to execute (all four are required):**

**(a) E1 success-criteria pass:** For each stated success criterion in `intent_brief.md`, check whether the built artifact satisfies it. A criterion not met is a surprise — record the criterion text and the observed outcome, including any case where the artifact satisfies the criterion formally but would fail it in practice.

**(b) Per-aspect pass:** For each E5 aspect, examine how the built artifact addresses it. For each aspect rated ANSWERED-TO-DEPTH in the E8 coverage table, ask: "Does building with this answer confirm it was build-depth sufficient, or does the real build decision reveal a gap — an answer that was technically correct but too general, too context-specific, or missing a key sub-concern?" A revealed gap is a surprise.

**(c) Step 3 knowledge-gap and assumption pass:** Each item recorded in Step 3 under (a) knowledge gaps and (b) implicit assumptions is a candidate surprise. Review each in the context of the built artifact.

**(d) Step 3 cross-aspect tension pass:** Each cross-aspect tension recorded in Step 3(c) is a candidate surprise. Review each for whether the choice made was grounded in the converged record or was a gap in it.

Record every surprise in the Tier-1 Ledger under `## E9 Build-Probe — <goal name>`, numbered E9-S-001, E9-S-002, etc.

---

### Step 5 — Surprise triage: load-bearing vs. non-load-bearing

For each surprise recorded in Step 4, determine whether it is **load-bearing**.

**A surprise is load-bearing if ANY of the following hold:**
- It would change at least one E5 aspect's coverage status from ANSWERED-TO-DEPTH to PARTIAL or NOT-ANSWERED.
- It reveals a **missing aspect** — a dimension of the goal that E5's aspect map did not include and that, if left unaddressed, would produce a deliverable that fails the operator's stated goal.
- It reveals that a converged answer was specific to a sub-context of the build that does not represent the slice's actual conditions — the answer was technically correct but did not transfer to the real artifact.
- It contradicts an E1 success criterion in a way that would require a design change (not merely a wording adjustment).

**Disposition by triage result:**

**Load-bearing surprise — execute all four of the following (each is mandatory):**

1. **Spawn a tracked reopened question.** Write a question that specifically targets the identified gap. The question must state: what the surprise was, what the gap is, and what a correct investigation would establish. Assign spawn-source `E9/probe-surprise/<session-id>/<N>` (where N is the E9-S-NNN index number).

2. **If the surprise reveals a MISSING ASPECT** (a dimension absent from `aspect_map.md`): follow E5's Step-5 map-extension protocol to add the missing aspect to `aspect_map.md`. Record the extension and sign it off before re-entering E8.

3. **Route to E7/E8 for re-convergence.** The load-bearing surprise sends the engine back through E7 (to answer the reopened question) and E8 (to re-evaluate convergence against the corrected or extended aspect map). Record the routing in the E9 Ledger entry.

4. **Do NOT silently note the surprise.** A load-bearing surprise recorded only in the Ledger without a spawned reopened question is a protocol violation. The spawned question is the evidence that the surprise was processed; "noted" is not accepted.

**Non-load-bearing surprise:**
Log it in the Tier-1 Ledger under the E9 probe entry with the label "NON-LOAD-BEARING" and a one-sentence rationale: why it does not change any aspect's depth status and does not contradict a success criterion. Silence — even for non-load-bearing surprises — is not accepted.

---

### Step 6 — Termination decision and clean-probe scrutiny (L-D bounds)

After Step 5 triage:

**If any load-bearing surprise was found:**
Step 5 already triggered routing to E7/E8. After re-convergence, re-enter E9 ONLY IF the re-convergence produced a NEW materially-distinct surprise requiring a new probe — specifically, one that was not addressable from the previous probe's reopened questions, and whose answer changes an aspect's depth status in a way not already covered by the re-convergence. **L-D bounds this:** a further probe is warranted only on a NEW materially-distinct surprise. A re-probe on the same aspects after re-convergence, without a new materially-distinct surprise, is a polishing impulse — the L-D zoom-out check applies; stop there and route to E10. Record the termination rationale and the L-D citation in the E9 Ledger entry.

**If NO load-bearing surprise was found (CLEAN probe):**
A CLEAN probe is a **flattering** result — it confirms that E8's CONVERGED verdict held up under real build. Under L-A, a flattering result receives MORE scrutiny, not less. Apply the representativeness check:

1. **Representativeness check (L-A asymmetry, mandatory):** Ask explicitly: "Was the selected slice real and representative of the build's hardest dimension, or was it a trivially easy path that could not have surfaced a surprise even with a significant knowledge gap?" If the answer is "trivially easy": the probe does not satisfy the mandate. Return to Step 2, select a broader or harder slice, and probe again. Record the reason in the Ledger. (Note: this re-probe is not a count-floor violation — it is replacing a defective probe with a valid one; the mandate requires at least one real, representative probe, not merely any probe execution.)

2. **If the slice was representative and the probe is genuinely CLEAN:** Record in the E9 Ledger entry: the slice description, the representativeness assessment and its rationale, and the CLEAN verdict. The loop terminates here.

**Termination conditions (L-D) — any one of the following ends the loop:**
- **(a)** The probe produces a CLEAN result AND the representativeness check confirms the slice was not trivially easy.
- **(b)** All load-bearing surprises from a prior probe have been addressed (re-convergence completed and confirmed by E8's new CONVERGED verdict), and a follow-up probe produces a CLEAN result or surfaces no NEW materially-distinct surprise.
- **(c)** The operator explicitly closes the probe loop.

When any termination condition is met: record in the E9 Ledger entry which condition terminated the loop, cite L-D, and note that no further probes are warranted under current knowledge.

---

### Step 7 — Produce and persist the probe report; route to E10

Produce the **E9 probe report** and append it to the Tier-1 Ledger under `## E9 Probe Report — <goal name>`. The probe report is E10's primary input from E9 and must be present before E10 can run.

**Required contents of the probe report:**

1. **What was built:** A description of the thin vertical slice artifact — what it covers, what aspects it exercises, what medium it was built in, and a pointer to or inline transcription of the artifact itself.

2. **Surprises found:** All surprises numbered E9-S-001, E9-S-002, etc., each with: the surprise text; the triage result (load-bearing / non-load-bearing); and the disposition (spawned reopened question text + spawn-source for load-bearing; one-sentence rationale for non-load-bearing).

3. **Reopened questions:** All spawned reopened questions (from load-bearing surprises), each with: spawn-source, routing target (E7/E8), and current status (pending re-convergence / re-convergence completed / resolved after re-probe).

4. **Termination condition:** Which of the three L-D termination conditions ended the probe loop, with evidence: representativeness rationale (condition a), re-convergence completion record (condition b), or operator-gate record (condition c). Cite L-D.

5. **Convergence status post-probe:** One of:
   - **CONFIRMED** — no load-bearing surprise survived; representativeness check passed; E9 terminates; route to E10.
   - **RE-OPENED** — load-bearing surprises found; re-convergence in progress or completed; follow-up probe pending or completed.

When convergence status is CONFIRMED: route to E10 with the probe report as the E9 deliverable.

When convergence status is RE-OPENED and re-convergence produces a new CONVERGED verdict: re-enter E9 at Step 2 for a new slice or re-probe of the updated convergence, following Step 6's conditions. The probe report accumulates across rounds: each round appends a dated sub-section under the same `## E9 Probe Report` header.

## Inputs / Outputs

**Inputs:**

- **E8 CONVERGED verdict** — the Tier-1 Ledger entry under `## E8 Convergence Gate — <goal name> (pass <N>)` recording verdict CONVERGED for a build-mode project. Format: Markdown Ledger section. Location: session Tier-1 Ledger file. Re-read at Step 0(c). E9 cannot run without this; it is the trigger. Also provides the per-aspect coverage table, which informs thin-slice selection at Step 2.

- **`intent_brief.md`** — the operator-confirmed Intent Brief produced by E1. Format: Markdown file. Location: `work/<session-id>/intent_brief.md`. Re-read at Step 0(a). Provides: `project-type` (`build` or `decision`; Step 1 gate) and E1 success criteria (Step 4(a) E1-criteria pass and Step 5 success-criterion surprise triage).

- **`aspect_map.md`** — the aspect-map produced and signed off by E5, confirmed convergence-complete by E8. Format: Markdown file. Location: `work/<session-id>/aspect_map.md`. Re-read at Step 0(b). Used at Step 2 (slice selection, which aspects to exercise), Step 4(b) (per-aspect pass), and Step 5 (load-bearing triage: does the surprise change an aspect's depth status?).

- **E7 answered-question records** (from E8's convergence pass) — the SURVIVED answered-question records forming the converged knowledge base. Format: Tier-1 Ledger entries. Location: session Tier-1 Ledger file. Used at Step 3 as the construction guide; every build decision should be traceable to a converged answer; a decision point that cannot be traced is a knowledge-gap surprise.

**Outputs:**

- **Thin vertical slice artifact** — the real, inspectable artifact built at Step 3. Format: the artifact in whatever medium the build is being executed (code, prototype, annotated specification, or other inspectable form). Location: session working directory or described inline in the E9 Ledger entry. Named and described in the E9 probe report (Step 7 item 1). A build-mode project whose E9 Ledger entry records no artifact is non-compliant.

- **Spawned reopened questions** — one per load-bearing surprise. Format: Tier-1 Ledger entry for each, recording: the surprise text (E9-S-NNN), the spawned question text, spawn-source `E9/probe-surprise/<session-id>/<N>`, and routing to E7/E8. Location: Tier-1 Ledger, linked from the surprise record in `## E9 Build-Probe`. Consumed by E7/E8 on re-convergence; for any new questions generated in response, they enter E6 Source 5 as `E9/probe-surprise/<ref>` (E7 Step 6b procedure applies for E7 processing).

- **Map extension** (when a missing-aspect surprise is found) — a new aspect entry added to `aspect_map.md` following E5's Step-5 extension protocol, signed off before re-entering E8. Format: appended aspect entry in `aspect_map.md`. Location: `work/<session-id>/aspect_map.md`.

- **E9 probe report** — the full accumulated record of all probe rounds: what was built, all surprises (load-bearing and non-load-bearing) with dispositions, all spawned reopened questions, the termination condition, and final convergence status. Format: Markdown section appended to the Tier-1 Ledger (append-only per L-B) under `## E9 Probe Report — <goal name>`. Location: session Tier-1 Ledger file. Consumed by E10 as its primary E9 input; E10 cannot run until a CONFIRMED probe report exists in the Ledger.

- **E9 Ledger entry** — the operational record of this probe pass. Format: Markdown section appended to the Tier-1 Ledger under `## E9 Build-Probe — <goal name>`. Records: Step 0 re-anchor confirmation; Step 1 mode confirmation (or decision-mode skip record); slice description and selection rationale (Step 2); build notes — knowledge gaps, implicit assumptions, cross-aspect tensions (Step 3); all surprises numbered and triaged (Steps 4–5); routing decisions for load-bearing surprises; termination condition and L-D citation (Step 6); convergence status. Multiple probe rounds each receive a dated sub-entry appended under the same header.

Every artifact named in the Protocol section appears here. Every output listed here is referenced in the Protocol.

## Acceptance checks (binary)

1. **≥1 probe pass completed and mandatory?** YES if the Protocol contains named mandatory steps (Step 3 build + Step 4 probe) that direct building and probing a real end-to-end artifact (not a thought experiment); the E9 Ledger entry records that at least one probe was executed, that an inspectable artifact exists, and that the probe result was recorded (surprises found with dispositions, or CLEAN + representativeness rationale); and the Protocol explicitly states that a build-mode CONVERGED project cannot reach E10 without a completed probe pass and that a self-report of "no probe needed" is a protocol violation. NO if the probe is described as optional or advisory; if a self-report that no probe was needed is permitted without an artifact; or if the E9 Ledger entry records a probe verdict without an inspectable artifact.

2. **Surprise → tracked reopened question mechanism present with binary teeth?** YES if the Protocol (Step 5) (a) defines what constitutes a surprise (breaks, confuses, violates an E1 success-criterion, changes an aspect's depth status, or reveals a missing aspect); (b) routes every load-bearing surprise to a spawned tracked reopened question with spawn-source `E9/probe-surprise/<session-id>/<N>`; (c) routes that question to E7/E8 for re-convergence; (d) routes missing-aspect surprises to E5's Step-5 map-extension protocol; and (e) explicitly treats a surprise documented only as a Ledger note without a spawned question as a protocol violation. NO if surprises may be silently noted without spawning a tracked question; if the routing to E7/E8 is optional; or if there is no spawn-source format defined for E9-generated reopened questions.

3. **≥1 probe MANDATE stated, bounded by L-D, and distinguished from count-floor HAZARD?** YES if the Protocol (a) explicitly states the ≥1 probe is MANDATORY (a floor of 1 on a distinct categorical activity — the manufactured-soul guarantee); (b) names the L-D bound explicitly with three named termination conditions (clean probe + representativeness check; all surprises addressed; operator gate); (c) cites L-D by name in the Protocol body and requires L-D to be cited in the Ledger termination-condition record; and (d) explicitly distinguishes the ≥1 probe mandate from the count-floor HAZARD, naming them as different concepts. NO if the probe is framed as optional; if L-D is not cited by name; if no explicit termination conditions are named; or if the ≥1 mandate and the count-floor hazard are conflated or treated as the same concept.

4. **Honest manufactured-not-lived framing present?** YES if the Purpose section explicitly states that E9 is a SYNTHETIC substitute for the weeks of lived use that earned quality through real iteration, and that it manufactures SOME surprise without replacing the full arc of lived failures, and the Honest ceiling section names the specific residual failure mode: a single thin-slice probe cannot surface the long-tail failure modes that only emerge from real varied use at scale, and those failure modes are only caught downstream by the BUILDER/ADVISOR run and actual use. NO if E9 is framed as equivalent to lived use; if the honest ceiling is absent; or if the honest ceiling states only a generic disclaimer rather than a named specific failure mode.

## Honest ceiling

Full compliance with E9 does not reproduce all the surprises that weeks of real, varied iteration earn for a lived project. The specific residual failure mode that persists even after a correctly executed E9:

**One thin vertical slice cannot surface the long-tail failure modes that only emerge from sustained real use at scale.** E9 mandates a probe against one representative slice — manufacturing SOME surprise, compensating for zero lived domain history. But the failure modes that the full arc of real use surfaces are of a kind a single probe cannot reach: (a) volume effects and edge cases that only appear across varied real inputs at scale; (b) cross-aspect interactions that are invisible from a single slice but compound and conflict across many real sessions or users; (c) failure modes specific to the actual end-user population's mental models, which only surface when real users encounter the real deliverable under their own assumptions and goals. None of these can be manufactured from a single probe, regardless of how representative the slice is. A clean E9 probe means: the converged knowledge held up under one real probe of one real slice — not that all failure modes have been found. Parity with the quality earned through weeks of real, varied use is not achieved by E9 at all — it can only be EARNED and TESTED downstream, by the real BUILDER/ADVISOR run and the operator's actual use of the delivered artifact, and is never guaranteed in advance. E9 is the engine's first honest approximation of that arc; it is not a substitute for it.

## Cross-references

- **E8** (`stages/E8_convergence_gate.md`) — E9's upstream: a build-mode CONVERGED verdict (E8 Step 6a) is the trigger for E9. E8's routing explicitly names "build-mode CONVERGED → feed E9 (the mandated build-probe)." Surprises from E9 that spawn reopened questions route back through E7/E8 for re-convergence; E8 runs again after re-convergence and must produce a new CONVERGED verdict before E9 terminates or re-probes. Decision-mode CONVERGED routes directly to E11, bypassing E9 and E10.

- **E7** (`stages/E7_answer_kill_loop.md`) — E9's reopened questions (spawned with source `E9/probe-surprise/<session-id>/<N>`) are routed back to E7 for answering and kill-loop processing before E8 re-evaluates convergence. E7's reopen-mode handles E9-spawned questions by routing any new questions generated in response into E6 Source 5 as `E9/probe-surprise/<ref>` (per E7 Step 6b procedure; spawn-source recorded in the Ledger).

- **E5** (`stages/E5_decompose_aspects.md`) — E9's Step 5 routes a missing-aspect surprise (a surprise that reveals a dimension the aspect map did not include) to E5's Step-5 map-extension protocol. The extension must be signed off before re-entering E8. E9 is the primary designed catch-point for E5/E8's named Honest ceiling: "an aspect nobody surfaced at E5 time makes a 'converged' verdict correct over an incomplete frame" — E9's real build is the mechanism that trips over the missing aspect.

- **E10** (`stages/E10_emit_scaffold.md`) — receives E9's probe report when the termination condition is met (CLEAN probe with representativeness confirmed, or all load-bearing surprises addressed). The E9 probe report (Step 7 output, Tier-1 Ledger section `## E9 Probe Report — <goal name>`) is E10's primary E9 input: what was built, what surprised, what reopened and resolved, and the final CONFIRMED convergence status. E10 cannot run until this Ledger section exists.

- **L-A** (`laws/L-A_adversarial_posture.md`) — governs the representativeness check at Step 6: a CLEAN probe is a flattering finding and attracts asymmetric extra scrutiny. A CLEAN probe from a trivially easy slice does not satisfy the probe mandate; the L-A asymmetry rule (flattering results get MORE scrutiny, not less) requires the representativeness assessment before any CLEAN verdict is accepted. L-A's asymmetry is active throughout E9.

- **L-D** (`laws/L-D_freeze.md`) — bounds the E9 loop explicitly. ONE mandated probe; further probes only on a NEW materially-distinct surprise; three named termination conditions; the loop cannot become an infinite build-fix-rebuild regress. L-D names the exact failure mode E9 must not become (infinite self-perfection regress applied to the build layer). The E9 Ledger entry must cite L-D when recording the termination condition.

- **L-E** (`laws/L-E_evidence_over_assertion.md`) — E9's probe report is an evidence artifact, not an assertion. "No surprises found" without the E9 Ledger entry recording the slice built, the probes executed, the surprises (or their absence), and the representativeness assessment is an unverifiable self-report under L-E; it is not accepted as a CLEAN probe verdict.

- **L-B** (`laws/L-B_3tier_memory.md`) — all E9 outputs (probe entries, surprise records, spawned reopened questions, probe report) are appended to the Tier-1 Ledger append-only; never overwritten. Multiple probe rounds under the same goal each receive a dated sub-entry appended under the same `## E9 Build-Probe` and `## E9 Probe Report` headers. The accumulated probe record is the artifact that makes E9 verifiable across context resets.

- **GOVERNANCE.md §2** — the 8-line prompt-quality gate this file must clear; gate line (e) is the controller's responsibility and requires a cross-family codex audit result recorded in the build LEDGER before this file is finalized.
