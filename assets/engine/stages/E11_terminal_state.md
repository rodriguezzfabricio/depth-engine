<!--
PROMPT-QUALITY GATE (GOVERNANCE §2) — clear all 8 before marking this file "done":
[x] a. DoD quantified      — Five binary acceptance checks (§Acceptance checks), each tied to a named DoD item or output artifact: three-terminal structure + reconciliation of spec's "two valid terminals" as {positive-terminal, refusal} with positive-terminal = build-ready OR decision-deliverable (check 1); refusal-as-complete-deliverable with the smaller-scoped-intervention section MANDATORY — absence named as a binary FAIL (check 2); not-ship-biased — positive terminals receive MORE L-A scrutiny than refusal, and no Protocol criterion favors build-ready over refusal when evidence is marginal (check 3); honest-ceiling parity-earned-not-assumed stated in all three terminal declarations AND in §Honest ceiling with a specific named failure mode (check 4); operator gate documented per terminal type + E11 Ledger entry required with content fields specified (check 5).
[x] b. Scope manifest      — Four DoD items listed in task-18-report.md §Manifest; reconciled with file:line evidence in §Reconciliation before commit.
[x] c. Levers, deliberate  — Six-step Protocol (Steps 0–5; Step 3 carries three sub-procedures: Step 3a build-ready, Step 3b decision-deliverable, Step 3c refusal). Terminal-type selection at Step 1 keeps the three paths structurally separate — no single code path handles all three. Step 2 (positive-terminal scrutiny) is gated to Routes A and B only; Route C (refusal) bypasses Step 2 by design — a refusal is an honest negative, not a flattering claim, so applying extra scrutiny to it would invert the L-A asymmetry. Step 2 carries five sub-steps (2a–2e); Step 2e (cross-family overturn) is the structural enforcement of L-A for positive terminals — a cross-family verifier explicitly tasked to argue the evidence is MARGINAL and the correct terminal is REFUSAL; mirrors the E8/E7 cross-family overturn pattern; INITIATOR/verifier disagreement → human gate. Step 4 (honest ceiling statement) runs for all three terminal types as a mandatory shared step before the operator gate — preventing the honest ceiling from being optional for the flattering cases. L-A and L-E invoked by reference at Steps 2 and 4; not re-derived. No step mandates a fixed MAX pass count.
[x] d. Countermeasures     — Context-rot: E8 Ledger entry, E10 verification report, and intent_brief.md re-read from files at Step 0, not recalled from context; five load-bearing constraints restated at top of Protocol block. Satisficing: five binary acceptance checks + terminal-state declaration must cite artifact references (E8 Ledger entry ID or E10 sign-off record), not self-report. Sycophancy: Step 2 asymmetry + Step 2e cross-family overturn — positive terminals are flattering and load-bearing → receive MORE scrutiny than refusal and must survive a mandatory cross-family overturn attempt (verifier explicitly tasked to argue REFUSAL) before being declared; Step 2e is structural (cross-family verifier), not a self-screen; Step 3c smaller-intervention section is a hard binary (absence = FAIL the acceptance gate), not advisory. Hallucination: terminal-state declaration pinned to E8 Ledger entry ID (REFUSAL or CONVERGED verdict and evidence) or E10 sign-off record; a declaration citing only prose without these artifact references is not accepted.
[x] e. Cross-family audit  — codex (gpt, task-18-codex-audit{,—fix verified in-file}.txt): DoD 1,2,4 done, 3 shallow → fixed. CLEAN on three-terminal coherence, refusal teeth, parity claims, referent. Caught: positive terminal (build-ready/decision-deliverable) was only self-screened, not cross-family overturned (L-A requires it for flattering load-bearing claims) → fixed: Step 2e mandatory cross-family overturn + asymmetric scrutiny (refusal exempt — asymmetry one-directional; readiness must be adversarially earned), binary check 3(a-g). Controller-verified (mirrors E7/E8 blessed pattern). Recorded B-0023. (GOVERNANCE short-path → Task 20.)
[x] f. Alignment trace     — UP: E11 → engine README stages table ("Terminal state & DoD with refusal") → GOVERNANCE §2 → engine mission (domain-agnostic ingestion/research at parity). DOWN: three-terminal structure is coherent with E8 Step 6 routing (build-mode CONVERGED → E9 → E10 → E11; decision-mode CONVERGED → E11 directly; REFUSAL either mode → E11) and closes the B-0020 thread without modifying E8; Step 2 asymmetry is coherent with L-A's flattering-finding extra scrutiny requirement; refusal-as-complete-deliverable is coherent with L-E Step 6 (honest negative rule) and Theory §6 D7; honest ceiling parity-earned is coherent with E10 §Honest ceiling ("parity is earned and tested downstream … never guaranteed in advance by scaffold emission alone") and L-D's freeze-at-completion principle; no contradictions found.
[x] g. Persisted           — Commit records this file; build LEDGER entry (task-18-report.md §Manifest) links to it; reachable from REGISTER task entry.
[x] h. Honest ceiling      — §Honest ceiling names a specific residual failure mode: E11's Step 2 scrutiny is bounded by the same evidence available to the INITIATOR — a domain where E8's convergence was marginally achieved (just barely CONVERGED after the adversarial and cross-family passes) can produce a build-ready terminal where the honest terminal should have been refusal; Step 2's screen cannot reliably distinguish a confidently-wrong convergence from a confidently-right one when both have cleared E8's gate. Named as a specific failure mode, not a generic disclaimer.
-->

# E11 — Terminal state & DoD with refusal (D7)

### Binding · Load WHEN:
INITIATOR loads this stage when one of three routing conditions is met and the triggering artifact is recorded in the Tier-1 Ledger:

- **Route A (build-ready):** E10 produces its sign-off and records `COMPLETE` in the Tier-1 Ledger entry under `## E10 Scaffold — <domain>` for a build-mode project. E10's sign-off is the trigger.
- **Route B (decision-deliverable):** E8 issues a CONVERGED verdict for a **decision-mode** project (Step 6a, decision-mode branch) and routes directly here. The E8 Tier-1 Ledger entry recording the CONVERGED verdict with decision-saturation argument is the trigger.
- **Route C (refusal):** E8 issues a REFUSAL verdict (Step 6c) for either project type and routes directly here. The E8 Tier-1 Ledger entry recording the REFUSAL verdict with converged findings and a named smaller-intervention is the trigger.

Do not load before the routing trigger artifact is recorded in the Tier-1 Ledger. Do not load E11 while awaiting an E9 or E10 sign-off (build-mode) — E11 is not reached until E10 completes for build projects; decision-mode and refusal routes skip E9 and E10 entirely.

## Purpose (one paragraph)

E11 is the engine's terminal stage — the point at which the research process ends and a final deliverable is placed in the operator's hands. It receives the upstream routing signal from E8 (REFUSAL verdict, either mode) or from E10 (build-mode scaffold, after E9 and E10 sign-off) or directly from E8 (decision-mode CONVERGED), and it composes and delivers the terminal-state declaration: a structured, evidence-cited document that declares one of three valid completion outcomes — build-ready, decision-deliverable, or refusal — each carrying its evidence, the honest ceiling statement, and the operator gate required before any downstream action is taken. The stage exists because a terminal without an explicit refusal branch is ship-biased: any process that can only produce positive outcomes will bend toward them under the domain's natural pull, and the spine that produces the most valuable results — the ability to say "the converged evidence does not support the full scope you asked for; here is the smaller scoped intervention it does support" — is silently destroyed. E11 preserves that spine as a structural property of the DoD by treating refusal as a first-class, non-penalized terminal, applying asymmetric scrutiny (more for positive terminals, not more for refusals), and requiring the honest ceiling statement in every terminal type, including the most flattering ones.

## Kalshi referent (what proven mechanism this generalizes)

**D7 design seed + IRON_LAW §7 (negative-finding gate / human-approval) + §14 (Definition of Done, item 7: the honest edge assessment) + §1 (honesty clause as part of the mission, not a hedge against it)** — from the Kalshi alpha-engine project.

In its original context, §1 established that "the most valuable thing you can build is an edge that is real and honestly measured, not assumed and flattering," and that a truthful "modest but real edge, and here are its limits" is a complete deliverable. §14 item 7 required the DoD to include an honest edge assessment that could resolve to "the conditions under which we should not trade" — meaning the DoD was explicitly designed to carry a negative terminal. §7 made the negative finding a human-approval gate: "when the honest edge assessment is negative or marginal — do not proceed to risk money on a thesis the evidence doesn't support; bring it to me." In practice, the Kalshi system's most valuable terminal outputs were refusals: E1 taker edge DEAD, selective method DEAD, and the L-0052 PARTIAL-SURVIVE verdict of "NO money" — not failures of the process, but its honest conclusions after convergence. The terminal state was effectively a refusal: "the research converged, and the honest answer is not yet."

D7 captures this as the generalized design requirement: wire the refusal terminal into the DoD of every domain. Without it, a ship-biased domain (one with a natural pull toward shipping, launching, or building) loses the spine that produced the Kalshi system's most valuable results — the ability to correctly identify when the evidence does not support the full scope, state the smaller scoped intervention it does support, and deliver that as a complete output. "Kalshi" appears in this section as the named referent; the terminal-state pattern — declare the honest outcome, carry the evidence, state what is and is not supported, bring to the human gate before any downstream action — is domain-general.

## Protocol (the steps the INITIATOR executes)

> **LOAD-BEARING CONSTRAINTS (restated at top for context-rot resistance):**
> 1. **Three valid terminal outcomes; the positive-terminal is a two-form.** E11 has three terminal outcomes, all valid completions: (a) **build-ready terminal** (build-mode, Route A, from E10 sign-off), (b) **decision-deliverable terminal** (decision-mode, Route B, from E8 CONVERGED), (c) **refusal terminal** (either mode, Route C, from E8 REFUSAL). The spec's "two valid terminals" = {positive-terminal, refusal}, where positive-terminal = build-ready OR decision-deliverable. All three are first-class completions; none is a failure.
> 2. **Refusal MUST carry evidence + smaller-scoped intervention; a bare "no" is incomplete.** Step 3c is not satisfied by stating only the finding of non-support. It must carry: (a) the specific converged evidence driving the refusal, cited to the E8 Ledger entry ID, and (b) the smaller scoped intervention the evidence DOES support — a concrete alternative the operator can act on, drawn from the converged evidence. A refusal declaration without the smaller-intervention section fails Step 3c's binary check and the acceptance gate.
> 3. **Positive terminals are flattering and load-bearing → receive MORE scrutiny than refusal.** A "build-ready" or "decision-deliverable" declaration is the most positive terminal E11 can produce and must not be accepted from the INITIATOR's own assessment alone (L-A). Step 2 applies to Routes A and B only — not to Route C. The engine is structurally readier to issue a refusal than to over-claim readiness. When evidence is marginal, the correct terminal is refusal or escalation to the operator, not a qualified positive.
> 4. **The honest ceiling statement is required in ALL three terminal declarations.** Step 4 produces a statement that must appear in the terminal-state declaration for every terminal type. Reaching any terminal means the PROCESS completed — not that the build will succeed, the decision will prove correct, or that parity has been achieved. Parity is earned by the live downstream run and graded by the validation methodology, never assumed by reaching E11.
> 5. **Terminal-state declaration is pinned to an artifact; prose summary without a Ledger reference is not accepted.** The terminal-state declaration must cite the E8 Tier-1 Ledger entry ID (for the REFUSAL or CONVERGED verdict and supporting evidence) and/or the E10 sign-off record (for build-mode). A declaration composed entirely from recalled prose without these artifact citations is an unverifiable self-report and is not a terminal-state declaration.

---

### Step 0 — Re-anchor from upstream artifacts (context-rot countermeasure)

Re-read the following from their persisted files before doing anything else. Do not proceed from recalled context — context degrades across long sessions; file re-reads are the context-rot countermeasure.

**(a)** Re-read `work/<session-id>/intent_brief.md`. Record the project-type field (`build` or `decision`) and the operator's mission statement and success criteria. These establish the frame the terminal-state declaration is evaluated against.

**(b)** Re-read the E8 Tier-1 Ledger entry under `## E8 Convergence Gate — <goal name> (pass <N>)`. Record: (i) the verdict (CONVERGED or REFUSAL), (ii) the routing instruction (which terminal E8 directed toward), (iii) for CONVERGED: the per-aspect coverage table (build-mode) or decision-saturation argument (decision-mode); for REFUSAL: the specific converged finding(s) driving the refusal and the named smaller intervention. This Ledger entry is the primary artifact E11's declaration is pinned to.

**(c)** If routing via Route A (build-mode, from E10): re-read the E10 Tier-1 Ledger entry under `## E10 Scaffold — <domain>` and confirm the COMPLETE sign-off is present. Also re-read the E10 verification report at `<out>/<domain>/_verification/report.md` and confirm all five sections are present with no open FAILs in §1–§4.

Do not proceed past Step 0 if:
- The E8 Ledger entry for this session is absent or does not record a final verdict (CONVERGED or REFUSAL).
- For Route A: the E10 COMPLETE sign-off or verification report is absent or carries open FAILs.

If the routing trigger is absent or ambiguous, halt and surface to the operator. Do not compose a terminal-state declaration on recalled context.

---

### Step 1 — Confirm terminal type and select procedure

From the routing identified at Step 0, confirm the terminal type and the procedure to execute:

- **Route A — build-ready terminal:** E10 sign-off present in Tier-1 Ledger. Verification report has no open FAILs. `project-type: build` confirmed in `intent_brief.md`. Proceed to Step 2 (positive-terminal scrutiny), then Step 3a.

- **Route B — decision-deliverable terminal:** E8 CONVERGED verdict recorded in Tier-1 Ledger for a decision-mode project. Decision-saturation argument is the evidence artifact. `project-type: decision` confirmed in `intent_brief.md`. Proceed to Step 2 (positive-terminal scrutiny), then Step 3b.

- **Route C — refusal terminal:** E8 REFUSAL verdict recorded in Tier-1 Ledger for either project type. The converged findings and the named smaller intervention are present in the E8 Ledger entry. **Skip Step 2.** Proceed directly to Step 3c.

If the routing is ambiguous — for example, if the E8 entry was recorded before the session ended with ambiguous routing or if the project-type does not match the expected route — halt and surface both the E8 entry and the ambiguity to the operator before selecting a procedure. Do not resolve routing ambiguity internally.

---

### Step 2 — Positive-terminal scrutiny (L-A — positive terminals are flattering, load-bearing claims)

*Execute for Route A or Route B only. Skip for Route C. This step is not optional for Routes A and B; applying it selectively would invert the L-A asymmetry.*

A "build-ready" or "decision-deliverable" declaration is the most positive terminal E11 can produce. Under L-A, positive and flattering findings attract more scrutiny than negative ones — not less. Before composing the terminal-state declaration for any positive terminal, apply the following in order:

**(a) Re-read the E8 evidence artifact from the Ledger.** For Route A: the per-aspect coverage table from the E8 CONVERGED entry. For Route B: the decision-saturation argument. Confirm that: (i) for build-mode, every E5 aspect is ANSWERED-TO-DEPTH (no PARTIAL or NOT-ANSWERED that should have blocked convergence); (ii) for decision-mode, no UNRESOLVED sub-question would materially alter the decision. If a gap is found that was not flagged in E8's convergence verdict, record it in the E11 Ledger entry and escalate to the operator before declaring the positive terminal.

**(b) Re-read the E10 verification report** (Route A only). Confirm: §1 suite-completeness gate shows PASS for all nine M-items; §3 isolation is PASS; §4 boot-block properties are PASS; §5 honest-ceiling statement is present. If any section carries a FAIL that was not resolved at E10 sign-off, halt and escalate to the operator.

**(c) Honest-ceiling screen.** Ask: "Is the build-ready or decision-deliverable claim warranted, or is this a marginal domain where the evidence is at the edge of the convergence standard — where a candid assessment would be 'barely CONVERGED' rather than 'clearly CONVERGED'?" If the honest answer is "marginal," the correct terminal is refusal (Route C) or escalation to the operator, not a qualified positive declaration. Do not soften a marginal evidence base into a positive terminal to spare the operator's reaction — that is the ship-bias failure mode E11's refusal branch exists to prevent.

**(d) Screen for previously-unregistered concerns.** If Step 2a, 2b, or 2c surfaces anything in the verification report or coverage evidence that was not flagged in E8's cross-family overturn record, record it in the E11 Ledger entry and escalate to the operator per GOVERNANCE §4 before declaring the positive terminal. Do not self-resolve a concern that should have gone to the human gate.

**(e) Cross-family overturn attempt (L-A Steps 2–6) — MANDATORY for Routes A and B; never required for Route C.** After Steps 2a–2d find no new concern, submit the positive terminal claim to a cross-family verifier. The verifier must be a different model family from the INITIATOR (e.g. GPT/Codex-family if the INITIATOR is Claude-family, or vice versa). Provide: (i) the claim — that the project is build-ready or decision-deliverable — with its artifact basis; (ii) the E8 evidence artifact (per-aspect coverage table or decision-saturation argument); (iii) for Route A, the E10 verification report. Issue the verifier the explicit instruction: "Your job is to argue that this positive terminal is unwarranted. The evidence is MARGINAL and the correct terminal is REFUSAL or a smaller-scoped intervention — not build-ready or decision-deliverable. What is the strongest case against declaring this terminal type?" Cap the panel at 2–3 diverse verifiers per L-A Step 2; additional same-family verifiers do not add independent signal.

  Apply **asymmetric extra scrutiny — MANDATORY (L-A Step 3):** a positive terminal is the most flattering, load-bearing claim E11 can produce. Assign a second verifier pass focused on the evidence base (not just the conclusion). The second pass must reach a **CONCLUSIVE failed-to-overturn result** before the positive terminal may be declared. An inconclusive extra pass does NOT satisfy the asymmetry requirement — re-run with a differently-framed or different-family verifier, or escalate to the human gate per L-A Step 6.

  - **Overturn succeeds** (the verifier produces a materially-distinct reason the evidence is marginal and the correct terminal is refusal or a smaller-scoped intervention) → the positive terminal is blocked; route to Step 3c (refusal terminal) or return to Step 0 and re-examine. Do not proceed to Step 3a or 3b.
  - **Overturn is inconclusive** → the positive terminal is also blocked; do not auto-promote an inconclusive result to a passed positive terminal. Escalate to the human gate per L-A Step 6 or re-run with a stronger verifier before proceeding to Step 3a or 3b.
  - **INITIATOR/verifier disagreement** on whether the evidence is marginal or the terminal type is correct → surface both positions with their supporting evidence to the operator; do not resolve the disagreement internally and do not use a same-family tie-breaker (L-A Step 6).

  Record in the E11 Ledger entry: the verifier family used; the overturn attempt result (failed-to-overturn / overturned / inconclusive); the asymmetric extra scrutiny result and whether it was conclusive (YES/NO); L-A C1–C4 corruption guard evidence per L-A Step 4; and the disposition (proceed to Step 3a or 3b / route to Step 3c / escalate to human gate).

A positive terminal may proceed to Step 3a or 3b only when all five sub-steps are satisfied: Steps 2a–2d find no new concern AND Step 2e's cross-family overturn conclusively failed to overturn — both the standard overturn attempt and the asymmetric extra scrutiny pass returned CONCLUSIVE failed-to-overturn results with no unresolved INITIATOR/verifier disagreement. **A positive terminal whose E11 Ledger entry does not record a completed cross-family overturn with a conclusive failed-to-overturn result FAILS this gate.** Route C (refusal) does not require this overturn — refusal is the conservative terminal; the asymmetry runs in one direction only: readiness is what must be adversarially earned.

---

### Step 3 — Compose the terminal-state declaration

The terminal-state declaration is the E11 output artifact. Compose it for the terminal type confirmed at Step 1. Persist it to `work/<session-id>/terminal_declaration.md` and reference its location in the E11 Ledger entry. Step 4 (honest ceiling statement) must be completed before the declaration is finalized.

---

**Step 3a — Build-ready terminal**

Compose the declaration with these required sections, in order:

- **Terminal type:** `Terminal state: BUILD-READY`
- **Route confirmed:** E10 sign-off Ledger entry reference (the `## E10 Scaffold — <domain>` entry ID or timestamp); E9 CONFIRMED status (from E10 Step 0d).
- **Scaffold package:** the emitted scaffold path (`<out>/<domain>/`) and the verification report path (`<out>/<domain>/_verification/report.md`). These are the primary deliverables.
- **Coverage summary:** a one-sentence factual summary of the E8 CONVERGED per-aspect coverage table. Cite the E8 Ledger entry ID — the full table is the artifact; the summary is a pointer only. Do not substitute the summary for the artifact.
- **Knowledge package pointer:** `<out>/<domain>/memory/knowledge_package.md` — the converged answered-question intelligence the domain BUILDER boots from.
- **Honest ceiling statement:** the required statement from Step 4 (insert verbatim after Step 4 is completed).
- **Next step:** state explicitly — "The domain BUILDER may now boot from the scaffold. Parity with the reference project is earned by the live BUILDER/ADVISOR run and graded by the validation methodology — not declared by this terminal."

---

**Step 3b — Decision-deliverable terminal**

Compose the declaration with these required sections, in order:

- **Terminal type:** `Terminal state: DECISION-DELIVERABLE`
- **Route confirmed:** E8 Tier-1 Ledger entry ID for the decision-mode CONVERGED verdict.
- **The decision:** the central decision in plain language, exactly as the converged evidence supports it. State the decision direction without softening a negative direction and without inflating a positive one. If the decision resolves to a conditional "yes" (the condition must be stated), a qualified "no," or a "not yet," say so exactly.
- **Decision quality:** for each decision sub-question from `decision_subquestions.md`, one line giving its resolution status (RESOLVED / PARTIALLY-RESOLVED) and the Ledger entry ID of the supporting evidence. Cite the decision-saturation argument from the E8 Ledger entry — the full argument is the artifact.
- **Remaining open sub-questions:** list any sub-questions left open as decision-insensitive (those the decision-saturation criterion determined were not needed to resolve the central decision). State them explicitly so the operator is not misled about what remains open. An absence of remaining open items is stated as such; do not omit this section.
- **Honest ceiling statement:** the required statement from Step 4 (insert verbatim after Step 4 is completed).
- **Next step:** state explicitly — "The decision is ready for operator action. Its correctness is graded by outcome — not by this declaration."

---

**Step 3c — Refusal terminal**

Compose the declaration with these required sections, in order:

- **Terminal type:** `Terminal state: REFUSAL`
- **Route confirmed:** E8 Tier-1 Ledger entry ID for the REFUSAL verdict.
- **Specific finding(s) driving the refusal:** the specific converged evidence that does not support the full scope the operator asked for — stated plainly, with an explicit reference to the E8 Ledger entry ID where the evidence is recorded. Do not soften this section. If three research findings collectively drove the refusal, name all three and cite each. A vague "the evidence was insufficient" is not an acceptable finding statement.
- **Smaller scoped intervention the evidence DOES support (MANDATORY):** one or more specific, concrete alternatives that the converged evidence does support — something the operator can act on. This section is **required**. Its absence is a binary FAIL of the acceptance gate (check 2). The smaller intervention is drawn from the converged evidence: it is the scope the evidence actually reached, not a speculative workaround. If the evidence supports multiple alternative scopes, list each and note what evidence backs each one.
- **Honest ceiling statement:** the required statement from Step 4 (insert verbatim after Step 4 is completed).
- **Completeness statement:** include explicitly — "This refusal, with its converged evidence and its smaller-intervention recommendation, is a complete output of the research process. A complete refusal is not a failure to hide."

<example>
For a build project whose goal was to implement a first-time-user activation flow so that new users complete their first key action within a target time, without support contact: the E8 REFUSAL finding was that three aspects of the coverage table (aspects 4, 7, and 11 in aspect_map.md, covering the backend personalization pipeline, the account-linking handshake, and the notification timing model) converged on a structural blocker: the target completion time requires backend changes that depend on a system the operator identified as outside the current team's scope and cannot be completed within the operator's stated constraints. The refusal declaration states:

Finding (citing E8 Ledger entry B-0031): the full scope as originally stated — new users completing the key action within the target time, unassisted — is not supported by the converged evidence given the operator's stated constraints; the three blocking aspects are confirmed by independent sources and a cross-family overturn survived.

Smaller scoped intervention the evidence DOES support: a targeted friction-reduction pass on the two onboarding aspects the evidence shows are independent of the backend blocker (aspects 2 and 6: the welcome-screen flow and the in-app guidance copy). The converged evidence confirms these aspects can be improved within the stated constraints and are projected to reduce time-to-key-action by a measurable amount for the segment of users who are not blocked by the backend dependency (approximately 60% of new users per the E7 research). This scoped intervention is a complete, actionable deliverable from the research.

This is a complete output of the research process.
</example>

---

### Step 4 — Honest ceiling statement (required in all three terminal declarations)

Before finalizing any terminal-state declaration, compose the honest ceiling statement and insert it into the declaration at the designated location. The statement must reflect the terminal type but must not be thinned or omitted for any terminal.

**Required honest ceiling statement (adapt the bracketed phrase to the terminal type; do not omit any sentence):**

> **Honest ceiling.** Reaching this terminal confirms that the engine's process completed to standard — not that the downstream outcome will succeed or that parity has been achieved. No static engine guarantees depth on an arbitrary domain: the quality of the research conducted is bounded by the domain knowledge present at research time, the operator's intent as captured in `intent_brief.md`, and the aspects or decision sub-questions as framed at E5. **Parity with the reference project is earned by the live downstream run and graded by the validation methodology — never assumed by reaching this terminal.** [For build-ready: the emitted scaffold is the necessary substrate for parity, not evidence of it; the live BUILDER/ADVISOR run is where parity is manufactured and the validation methodology is where it is graded.] [For decision-deliverable: the decision is supported by converged evidence; its correctness is graded by outcome, not by this declaration.] [For refusal: the refusal is correct given the converged evidence at the time of this run; the smaller intervention recommendation is an inference from that evidence, subject to revision as the operator's constraints or the domain's conditions evolve.] In all cases: this terminal closes the engine's process for this session. Re-entering E0 is the mechanism for extending or restarting research if the operator's needs change.

This statement is not a disclaimer appended after the terminal declaration — it is part of the declaration body and must appear before the operator gate step.

---

### Step 5 — Operator gate and Ledger close (GOVERNANCE §4 hard stop)

E11 is always an operator-review point. The terminal-state declaration is not acted upon until the operator has reviewed it. Per GOVERNANCE §4: "when the parity grade is negative/marginal — bring the honest negative; a refusal is a complete deliverable (D7), not a failure to hide."

Present the terminal-state declaration to the operator as follows:

**(a) For build-ready terminal:** present the scaffold path, verification report path, knowledge package path, and the complete terminal-state declaration (from `work/<session-id>/terminal_declaration.md`). The operator reviews the verification report before booting the BUILDER, publishing the scaffold, or taking any external action. State explicitly what the next action is and wait for explicit operator sign-off.

**(b) For decision-deliverable terminal:** present the decision, the decision-quality summary, the list of remaining open sub-questions, and the complete terminal-state declaration. The operator acts on the decision; E11's job is to ensure the decision is clearly laid out with the honest ceiling stated before any action is taken. Wait for operator acknowledgment before this session is closed.

**(c) For refusal terminal:** present the refusal declaration — the converged finding(s), the smaller-scoped intervention, and the honest ceiling. State and maintain the following:
- Do not apologize for the refusal or pre-emptively offer to retry without new evidence.
- Do not suggest the operator "proceed anyway" or treat the refusal as a provisional setback rather than a converged conclusion.
- The smaller-intervention recommendation is the actionable output of this terminal; present it as such.
- Per GOVERNANCE §4: a refusal brought to the operator is a complete deliverable, not a failure to hide.
Wait for operator acknowledgment.

**Append the E11 Tier-1 Ledger entry** under `## E11 Terminal State — <goal name>`. Record in the entry:
1. Terminal type (build-ready / decision-deliverable / refusal)
2. Evidence artifact references (E8 Ledger entry ID; E10 sign-off record for Route A)
3. Step 2 scrutiny result (if Route A or B): concerns found in Steps 2a–2d (YES/NO); cross-family overturn result — verifier family used, overturn result (failed-to-overturn / overturned / inconclusive), asymmetric extra scrutiny conclusive (YES/NO), L-A C1–C4 evidence summary; any escalations made
4. Path of `work/<session-id>/terminal_declaration.md`
5. Honest ceiling statement confirmed present in declaration (YES/NO)
6. Operator gate status (presented / sign-off received / acknowledgment received)
7. Session close confirmation

The session is formally closed when the E11 Ledger entry is appended and the operator gate status is recorded. A session whose E11 entry records only "presented" and has not received operator sign-off or acknowledgment is not closed.

## Inputs / Outputs

**Inputs:**

- **`intent_brief.md`** — the operator-confirmed Intent Brief from E1. Format: Markdown file. Location: `work/<session-id>/intent_brief.md`. Re-read at Step 0(a). Provides project-type, mission statement, and success criteria used at Steps 1 and 3 to confirm routing and frame the terminal declaration. Must have been produced and signed off by E1.

- **E8 Tier-1 Ledger entry** — the E8 convergence gate record containing the final verdict (CONVERGED or REFUSAL), routing instruction, and supporting evidence (per-aspect coverage table for build-mode CONVERGED; decision-saturation argument for decision-mode CONVERGED; converged findings + smaller intervention for REFUSAL). Format: Markdown section appended to the session Tier-1 Ledger under `## E8 Convergence Gate — <goal name> (pass <N>)`. Location: session Tier-1 Ledger file. Re-read at Step 0(b). The primary artifact E11's terminal declaration is pinned to (all three routes).

- **E10 verification report** (Route A only) — the I8 verification report emitted by E10. Format: Markdown file with five required sections (§1 suite checklist, §2 integrity invariants, §3 isolation confirmation, §4 boot-block properties, §5 honest ceiling). Location: `<out>/<domain>/_verification/report.md`. Re-read at Step 0(c). Consumed at Step 2b for the build-ready positive-terminal scrutiny.

- **E10 Tier-1 Ledger entry** (Route A only) — the E10 operational record confirming COMPLETE sign-off and the scaffold output directory. Format: Markdown section under `## E10 Scaffold — <domain>`. Location: session Tier-1 Ledger file. Re-read at Step 0(c). Consumed at Step 1 (Route A confirmation) and Step 3a (route confirmation field).

- **Law L-A** (`engine/laws/L-A_adversarial_posture.md`) — governs positive-terminal scrutiny at Step 2. The asymmetric extra-scrutiny requirement for flattering/positive findings is the L-A mechanism invoked by reference at Step 2. Re-read from file if not already loaded.

- **Law L-E** (`engine/laws/L-E_evidence_over_assertion.md`) — governs the honest-ceiling statement at Step 4 and the honest-negative requirement for the refusal terminal at Step 3c. The honest negative rule (Step 6) and the artifact-pin requirement (Step 5) are the L-E mechanisms invoked by reference at Steps 3 and 4.

**Outputs:**

- **`work/<session-id>/terminal_declaration.md`** — the terminal-state declaration. Format: Markdown file with required sections per terminal type (as specified in Steps 3a, 3b, or 3c). Location: `work/<session-id>/terminal_declaration.md`. Contains: the terminal type header, route confirmation, the terminal-specific evidence summary or decision or refusal finding (with Ledger artifact citations), the smaller-scoped intervention (Route C only; MANDATORY), the honest ceiling statement from Step 4, the next-step statement, and (for Route C) the completeness statement. This file is the deliverable the operator acts on.

- **E11 Tier-1 Ledger entry** — the operational record of this stage. Format: Markdown section appended to the session Tier-1 Ledger (append-only per L-B) under `## E11 Terminal State — <goal name>`. Location: session Tier-1 Ledger file. Content fields: terminal type, evidence artifact references, Step 2 scrutiny result for Routes A and B (concerns found YES/NO; cross-family overturn result including verifier family, overturn result, asymmetric extra scrutiny conclusive YES/NO, and C1–C4 evidence; any escalations made), terminal_declaration.md path, honest ceiling confirmed, operator gate status, session close confirmation. Required before the session is formally closed.

Every artifact named in the Protocol section appears here. Every output listed here is referenced in the Protocol.

## Acceptance checks (binary)

1. **Three valid terminal types named, each with a defined deliverable, routing trigger, and Protocol sub-procedure; the spec's "two valid terminals" reconciled as {positive-terminal, refusal}?** YES if: (a) the Protocol names all three terminal outcomes — build-ready (Route A, from E10 sign-off, Step 3a), decision-deliverable (Route B, from E8 decision-mode CONVERGED, Step 3b), and refusal (Route C, from E8 REFUSAL either mode, Step 3c) — each as a valid completion; AND (b) the Protocol explicitly states that the spec's "two valid terminals" = {positive-terminal, refusal}, where positive-terminal = build-ready (build-mode) OR decision-deliverable (decision-mode); AND (c) each terminal type has a concrete composition procedure in Step 3 with the required content fields specified. NO if any terminal type is absent or described as a failure rather than a valid completion; if the three-terminal structure is implicit rather than explicitly stated; if the {positive-terminal, refusal} reconciliation is absent; or if any terminal type lacks a defined composition procedure.

2. **Refusal terminal carries specific converged evidence (cited to artifact) + smaller-scoped intervention section (MANDATORY — absence = binary FAIL)?** YES if: (a) Step 3c requires the "specific finding(s) driving the refusal" to be cited to the E8 Ledger entry ID — not stated only in prose; AND (b) Step 3c requires a "smaller scoped intervention the evidence DOES support" section, explicitly marked MANDATORY, with its absence named as a binary FAIL of the acceptance gate; AND (c) the smaller intervention must be drawn from the converged evidence — not speculated — and must be concrete enough for the operator to act on; AND (d) a completeness statement is required in the refusal declaration asserting that a refusal with its evidence and smaller-intervention is a complete output. NO if the refusal terminal can be declared without the smaller-intervention section; if the smaller-intervention requirement is advisory or optional; if the evidence citation is prose summary only without a Ledger artifact reference; or if the completeness statement is absent.

3. **Engine not ship-biased: positive terminals receive MORE scrutiny than refusal; positive terminals must survive cross-family overturn; no Protocol criterion favors build-ready over refusal when evidence is marginal?** YES if: (a) Step 2 explicitly applies to Routes A and B only — bypassed for Route C — with the stated rationale that refusal is an honest negative and not a flattering claim; AND (b) Step 2 includes a "honest-ceiling screen" sub-step that explicitly names "marginal evidence → refusal terminal or escalation, not a qualified positive" as the correct action; AND (c) the load-bearing constraints at the top of the Protocol state that the engine is "structurally readier to issue a refusal than to over-claim readiness"; AND (d) no step in the Protocol contains a criterion that favors the positive terminal over refusal when evidence is at the margin; AND (e) Step 2 requires a mandatory cross-family overturn attempt (Step 2e) for Routes A and B — the verifier is from a different model family and is explicitly tasked to argue the evidence is marginal and the correct terminal is refusal or a smaller-scoped intervention; AND (f) a positive terminal whose E11 Ledger entry does not record a completed cross-family overturn with a conclusive failed-to-overturn result FAILS the gate — an inconclusive overturn is not auto-promoted to a passed positive terminal; AND (g) Route C (refusal) does NOT require the cross-family overturn — the asymmetry runs in one direction only: readiness is what must be adversarially earned, refusal is the conservative terminal. NO if Step 2 is optional for Route A or B; if Step 2 can be bypassed on the INITIATOR's own assessment that the evidence is sufficient; if the "marginal → refusal" criterion is absent; if the Protocol contains any language that treats refusal as the less preferred of the two outcomes when evidence is marginal; if a positive terminal can be declared without a completed cross-family overturn attempt; or if an inconclusive cross-family overturn result is treated as a passed positive terminal.

4. **Honest ceiling statement required in all three terminal declarations; parity-earned-not-assumed stated; §Honest ceiling section names a specific residual failure mode?** YES if: (a) Step 4 produces an honest ceiling statement that must appear in the terminal-state declaration for ALL three terminal types — not as an optional note but as a required section; AND (b) the statement explicitly asserts that reaching any terminal confirms the PROCESS completed, not that the build will succeed, the decision will prove correct, or that parity has been achieved; AND (c) the statement explicitly asserts that parity is earned by the live downstream run and graded by the validation methodology, never assumed by reaching E11; AND (d) the §Honest ceiling section of this file names a specific residual failure mode that persists even after full compliance — not a generic disclaimer. NO if the honest ceiling applies only to the build-ready terminal; if parity-guaranteed or build-success-implied language appears anywhere in the Protocol; if the honest ceiling is absent from the refusal or decision-deliverable terminal declarations; or if the §Honest ceiling section contains only generic disclaimers without naming a specific failure mode.

5. **Operator gate documented per terminal type; E11 Tier-1 Ledger entry required with all content fields specified?** YES if: (a) Step 5 specifies distinct operator-gate behavior for each of the three terminal types — build-mode (explicit sign-off required before external action), decision-deliverable (acknowledgment before acting on the decision), refusal (acknowledgment; no-retry-without-new-evidence rule stated) — AND (b) GOVERNANCE §4 is named as the binding authority for the gate; AND (c) the E11 Tier-1 Ledger entry is required with seven named content fields (terminal type, evidence refs, Step 2 scrutiny result, declaration path, honest ceiling confirmed, operator gate status, session close confirmation); AND (d) the Protocol states the session is formally closed only when the E11 Ledger entry is appended and the operator gate status is recorded. NO if the operator gate is advisory or optional for any terminal type; if the Ledger entry content fields are not specified; if the session can be declared closed without the operator gate status recorded in the Ledger; or if GOVERNANCE §4 is not named as the binding authority.

## Honest ceiling

Full compliance with E11 — all three terminal types correctly implemented, a build-ready declaration surviving Step 2 scrutiny, a refusal carrying its converged evidence and smaller-intervention recommendation, the honest ceiling statement in every terminal declaration, and a documented operator gate — does not prevent the following:

**The positive-terminal over-confidence failure: E11's Step 2 scrutiny is bounded by the same evidence that E8's convergence was built on, and cannot reliably distinguish a confidently-wrong convergence from a confidently-right one when both cleared E8's gate.** If E8's convergence was marginally achieved — the adversarial generation pass produced no materially-distinct question by a narrow margin; the cross-family overturn survived with a result that was SURVIVED but not by a wide margin — then the build-ready terminal produced by E10 and declared at E11 is technically correct over the evidence available, but the research may have converged over an incomplete frame. The specific failure mode: an aspect nobody surfaced at E5 (E5's named ceiling: an aspect nobody thought of stays absent from the aspect-map) stays absent from the coverage table; E8 declares CONVERGED over that incomplete table; E10 emits a scaffold against it; E11's Step 2 scrutiny re-reads the same evidence and finds no new concern. E11 declares build-ready. The missing aspect surfaces only when the domain BUILDER boots the scaffold and attempts to build something real — the live downstream run catches what the engine's process could not.

This is the ceiling E11's refusal branch and L-A asymmetric scrutiny exist to push against: they create a structural bias toward refusal over build-ready when evidence is marginal, making the over-confident positive terminal harder to reach. But they are procedural countermeasures, not guarantees. A build-ready terminal whose convergence evidence was sound but whose frame was incomplete is the failure mode that persists even after full compliance. Parity with the reference project is earned and tested by the live downstream run, not certified by reaching E11.

## Cross-references

- **E8** (`stages/E8_convergence_gate.md`) — the primary upstream of E11. E8 supplies all three routing signals: build-mode CONVERGED (→ E9 → E10 → E11 Route A); decision-mode CONVERGED (→ E11 Route B directly, skipping E9 and E10); REFUSAL either mode (→ E11 Route C). E8's §6c REFUSAL verdict explicitly names the "smaller intervention" requirement that E11's Step 3c must carry forward; the two stages are jointly responsible for the D7 refusal-terminal design. E8's CONVERGED verdict is a prerequisite for any positive terminal at E11.
- **E10** (`stages/E10_emit_scaffold.md`) — the immediate upstream of E11 for Route A. E10's sign-off (Step 10 conditions a–e) and verification report are required artifacts for the build-ready terminal. E10 explicitly flags its decision-mode bypass: "decision-mode routes directly to E11, skipping E9 and E10 by design" — this is the thread closed by E11's three-terminal structure. E11 Step 3a's scaffold path and verification report path come from E10's Tier-1 Ledger entry.
- **L-A** (`laws/L-A_adversarial_posture.md`) — governs Step 2 in full: the positive-terminal scrutiny, the asymmetric extra-scrutiny requirement for flattering/positive findings, the four corruption guards (C1–C4), and the human gate on unresolved concerns. The asymmetry rule — positive findings attract more scrutiny than negatives — is the L-A mechanism Step 2 applies. The honest-ceiling screen in Step 2c applies L-A's anti-sycophancy principle: do not soften a marginal evidence base into a positive terminal. L-A is invoked by reference at Step 2; do not re-derive the mechanism there.
- **L-E** (`laws/L-E_evidence_over_assertion.md`) — governs the honest-negative requirement throughout E11. Step 3c's requirement that refusal carry specific artifact-cited evidence (not prose summary alone) is the L-E evidence-over-assertion standard applied to the refusal terminal. Step 4's honest ceiling statement is the L-E honest-ceiling principle (a green process is not a proven-correct outcome) applied to all three terminal types. The requirement that the terminal-state declaration cite E8 Ledger entry IDs rather than prose summaries is the L-E artifact-pin requirement at E11.
- **L-D** (`laws/L-D_freeze.md`) — the freeze principle governs E11 as the designed terminal: reaching E11 ends the engine's process for this session; the engine does not re-enter E0 without a new operator decision. L-D's bounded-loop requirement prevents infinite self-perfection regress by making E11 a hard termination point. The Step 5c instruction ("do not pre-emptively offer to retry without new evidence") is the L-D freeze applied to the refusal terminal — the refusal is the verdict; reopening requires a new session, not a retry.
- **L-B** (`laws/L-B_3tier_memory.md`) — the E11 Tier-1 Ledger entry is appended append-only per L-B. The terminal-state declaration at `work/<session-id>/terminal_declaration.md` is a session artifact, not a Ledger entry, but it is referenced in the Ledger entry as a persisted artifact. Session close is defined by the Ledger entry existing and recording the operator gate status.
- **GOVERNANCE.md §2** — the 8-line prompt-quality gate this file must clear; gate line (e) is the controller's responsibility and requires a cross-family codex audit result recorded in the build LEDGER before this file is finalized.
- **GOVERNANCE.md §4** — the human-approval gate for this build, which E11's Step 5 generalizes for each terminal type: "when the parity grade is negative/marginal — bring the honest negative; a refusal is a complete deliverable (D7), not a failure to hide." E11 Step 5 is the implementation of GOVERNANCE §4 at the terminal stage.
