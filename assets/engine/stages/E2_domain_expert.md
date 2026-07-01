<!--
PROMPT-QUALITY GATE (GOVERNANCE §2) — clear all 8 before marking this file "done":
[x] a. DoD quantified      — Acceptance checks §6 enumerate five binary YES/NO checks, each tied to a named DoD item or output artifact.
[x] b. Scope manifest      — Four DoD items listed in task-9-report.md §manifest; reconciled with file:line evidence in §reconciliation before commit.
[x] c. Levers, deliberate  — Five-step decomposition (orientation → four-target pass → synthesis → exemplar distillation → sign-off) isolates each sub-task independently. Depth-calibration lever: Target D stop criterion (two successive searches, no new structural categories) is the concrete signal that research is sufficient — prevents unbounded regress without a hard row-count floor. Verifying-subagents: N/A — E2 produces a knowledge-base and exemplar set, not a go/no-go verdict requiring cross-family overturn; L-A adversarial protocol reserved for load-bearing verdicts that gate a downstream stage decision. No ritual MAX.
[x] d. Countermeasures     — Context-rot: intent_brief.md re-read from persisted file at Step 1 (F4 countermeasure), not recalled from context. Satisficing: scope manifest + five acceptance checks. Sycophancy: L-E source-citation requirement in Step 2 Target D prevents a fluent-but-ungrounded failure-mode register from passing unchallenged; engine-inferred failure modes are tagged `[engine-inferred]` and explicitly distinguished from sourced findings. Hallucination: exemplar set pinned to domain_exemplars.md (re-runnable artifact per C2); knowledge-base pinned to Ledger entry (not volatile in-context note).
[x] e. Cross-family audit  — codex (gpt) audited over 3 rounds (task-9-codex-audit{,-r2,-r3}.txt): all 4 DoD done; caught the fluent-shallowness gap (sourcing had no teeth) → fixed across 3 rounds: external-citation gate on Targets A/B/C, sourced Target-D exemplar, auditable saturation log, and `[engine-inferred]` provenance quarantine on A/B/C (no count floor). Recorded B-0014.
[x] f. Alignment trace     — UP: E2 → engine README stages table ("Become the domain expert") → GOVERNANCE.md §2 → engine mission (domain-agnostic ingestion/research). DOWN: four-target research pass + exemplar distillation are coherent with D1 (knowledge before questions); hard gate on E6 is coherent with E2's position as E6's mandatory precondition; Target D stop criterion is coherent with L-D freeze posture applied to research depth; no contradictions found.
[x] g. Persisted           — Commit records this file; build LEDGER entry (task-9-report.md §manifest) links to it; reachable from REGISTER task entry.
[x] h. Honest ceiling      — §7 (Honest ceiling) names the specific residual failure mode: the engine can become fluently wrong — acquiring vocabulary and surfacing prior art while missing the domain's real failure mode because the public record under-documents it; the exemplars then look sharp but encode a shallow model.
-->

# E2 — Become the domain expert

### Binding · Load WHEN:
INITIATOR loads this stage immediately after E1 is complete and `intent_brief.md` is confirmed by the operator at E1's Step 6 confirm gate. Trigger: `intent_brief.md` exists at `work/<session-id>/intent_brief.md` and carries an explicit operator YES. E2 is complete when (a) the domain knowledge-base is appended to the session's Tier-1 Ledger entry, (b) `domain_exemplars.md` is produced and persisted, and (c) the Step 5 sign-off gate is explicitly cleared by the operator or controller. Do not load before E1 is done. **E6 cannot run until this stage is signed off.**

## Purpose (one paragraph)
E2 is the engine's mandatory domain-expertise pass. Its job is to make the engine a credible practitioner of the operator's domain *before* any question generation begins. A generic question battery applied to a generic taxonomy is the documented failure mode E2 exists to prevent: questions are only sharp when the questioner already understands how the domain works, what its practitioners call things, what has been tried before, and — load-bearing — how practitioners in this domain specifically fail. E2 executes a structured four-target research pass (microstructure, vocabulary/jargon, prior art, failure modes) and synthesizes the findings into two durable artifacts: a domain knowledge-base appended to the Tier-1 Ledger, and 3–5 gold-standard exemplar questions that serve as E6's few-shot "this is what sharp looks like" anchor. The research pass is calibrated to be *sufficient for sharp questions*, not exhaustive — a concrete stop criterion prevents unbounded research regress. The hard gate between E2 and E6 is a structural mechanism that makes ungrounded question generation far less likely — it forces domain knowledge earned from research to precede question generation rather than letting the engine recycle its own priors. It is not a guarantee of correctness (see Honest ceiling); the mechanism reduces risk, it does not eliminate it.

## Kalshi referent (what proven mechanism this generalizes)
**D1** (`adapter/notes/10_theory_of_excellence.md` §6, D1 bullet) from the standard-workflow theory-of-excellence analysis. In the original Kalshi question-research project, the question battery was sharp because whoever seeded it already understood the domain's microstructure deeply — the questions surfaced domain-specific constraints, vocabulary traps, and failure modes that a generic battery against a generic taxonomy would have missed entirely. The D1 mechanism names this as the compensating design decision for a new domain that lacks lived iteration: insert a mandatory pre-battery research pass on the domain's microstructure, jargon, prior art, and how practitioners fail; harvest findings to the Ledger; use the research as the primary question source. Companion referents: **IRON_LAW.md §4 (Phase 0 — Total Synthesis)**, which established the underlying pattern in the original project — mine the primary input completely, tagging each item by epistemic status, before any question generation begins — and **IRON_LAW.md §5 (Phase 1 — Generate the Questions)**, which names the quality bar each question must clear (must materially advance the build, change a decision, fill a real unknown, be specific and answerable). E2 generalizes §4's synthesis step from a fixed transcript format to any domain the engine encounters: the pre-battery research pass, which was domain-seeded in the original project, becomes an explicit multi-target research operation here. The pattern — *earn domain knowledge before generating questions; a generic battery is the AI-slop failure* — is domain-general and applies unchanged to any project regardless of subject matter.

## Protocol (the steps the INITIATOR executes)

### Step 1 — Load intent_brief.md and orient the research pass

Re-read `intent_brief.md` from `work/<session-id>/intent_brief.md`. Do not rely on a recalled version from context — re-read the file. Place it at the top of working context alongside `seed.md`. Then hold: do not begin the research pass until the orientation below is complete.

From the Intent Brief, extract the following orientation signals:

- **Mission field** — What domain is actually being operated in? The mission statement identifies the domain; derive the domain name explicitly rather than inferring it from the session topic. A loosely-stated mission may name a domain at the wrong level of granularity — resolve it to the level at which practitioners have specialized vocabulary, documented failure modes, and established prior art. Record the domain name as the first line of the Step 3 Ledger entry before beginning Step 2.
- **`[unknown — flag for E2/E3]` items** — These are the explicit gaps E1 could not resolve. Each is a mandatory research target within the four-target pass; do not skip them.
- **Project-type** — A `build` project requires research deep enough to answer construction-level questions; a `decision` project requires research deep enough to resolve the central choice. Calibrate depth accordingly, but do not skip any of the four targets regardless of project-type.

### Step 2 — Execute the four-target research pass

For each of the four targets below, execute a research pass using available external sources — web search, literature, documented post-mortems, practitioner writing, domain-specific publications. The targets may be researched in any order, but all four must be covered before synthesis in Step 3.

**A knowledge-base built only from the engine's own priors, without external grounding, is a flag under L-E and must not be used as the sole input to Step 3.** Where the engine draws on internal knowledge, the finding is tagged `[engine-inferred]` and treated as a hypothesis until an external source confirms or contradicts it.

**Target A — Microstructure**
How does this domain actually work at a mechanical level? Who are the actors, what are the flows, what are the structural constraints, what would a practitioner need to know that a generalist would not? Record findings as a plain-language domain summary, not jargon.

*Depth signal for this target:* The microstructure is sufficiently covered when the engine can answer "what is the domain's unit of operation, and what governs its constraints?" from the research findings without requiring an additional lookup. **At least one finding in this section must be traced to an external source** — a microstructure summary synthesized solely from engine priors, with no external citations, does not satisfy this target and fails acceptance check 1.

*Provenance rule:* Every finding recorded in this section must carry either an external source citation or an `[engine-inferred]` tag. Engine-prior claims are allowed but must be visibly tagged `[engine-inferred]` — presenting an unsourced inference as a sourced fact is a hallucination risk under L-E and fails acceptance check 1.

**Target B — Vocabulary and jargon**
What are the domain's terms of art? Where are the naming traps — terms that appear across domains but carry domain-specific meaning here, or terms that sound equivalent but refer to distinct things? Record findings as a glossary: term → definition → naming trap (if any).

*Depth signal for this target:* Vocabulary coverage is sufficient when terms drawn from two independent external sources cross-reference consistently. A term that appears in two sources with incompatible definitions is a naming trap; record both usages and the discrepancy rather than resolving it arbitrarily. **At least one finding in this section must be traced to an external source** — a vocabulary glossary built solely from engine priors, with no external citations, does not satisfy this target and fails acceptance check 1.

*Provenance rule:* Every finding recorded in this section must carry either an external source citation or an `[engine-inferred]` tag. Engine-prior claims are allowed but must be visibly tagged `[engine-inferred]` — presenting an unsourced inference as a sourced fact is a hallucination risk under L-E and fails acceptance check 1.

**Target C — Prior art**
What has been done before in this domain? What solutions exist, what approaches have been tried, what has worked, what has failed, and what is the current state of the art? Record findings as a prior-art map: existing approaches, their outcomes, and any documented gaps.

*Depth signal for this target:* Prior-art coverage is sufficient when the engine can position the operator's project relative to existing work — which prior art it builds on, which gaps it fills, which documented failures it must avoid. **At least one finding in this section must be traced to an external source** — a prior-art map with no external citations does not satisfy this target and fails acceptance check 1.

*Provenance rule:* Every finding recorded in this section must carry either an external source citation or an `[engine-inferred]` tag. Engine-prior claims are allowed but must be visibly tagged `[engine-inferred]` — presenting an unsourced inference as a sourced fact is a hallucination risk under L-E and fails acceptance check 1.

**Target D — How practitioners in this domain fail** `[LOAD-BEARING]`
This target is explicitly load-bearing. Failure modes determine which questions matter: a question that cannot surface a known failure mode will not protect the project from that failure mode. For this target:

- Search for documented post-mortems, known pitfalls, systematic errors, and structural failure patterns. Prefer external sources — practitioner writing, industry post-mortems, academic failure analyses, documented incidents — over the engine's own inferences.
- For each failure mode found: name it, describe its mechanism (how it typically unfolds), and cite the source.
- Where public documentation is thin for a suspected failure mode, note the gap explicitly and tag any engine-generated extrapolation as `[engine-inferred]`. An engine-inferred failure mode may still be useful in Step 4, but must not be presented as sourced. Under L-E, presenting an unsourced inference as a documented finding is a hallucination risk.

*Stop criterion — this target governs the depth of the whole research pass:* The failure-mode register is sufficient when two successive searches on different queries yield no new structural failure categories. A structural failure category is a distinct mechanism — not a variation on an already-recorded mechanism. Once this saturation signal is reached, proceed to Step 3 even if Targets A–C have room for additional depth. Do not continue past this point; this is the L-D freeze posture applied to research depth. The goal is "sufficient to generate sharp questions," not exhaustive field coverage.

**Saturation log (mandatory):** For each search run during this target's pass, record: (1) the query string used, (2) whether it yielded a new structural failure category (YES/NO), and (3) the source(s) consulted. Append this log to the Tier-1 Ledger entry under `## E2 Knowledge-Base — <domain name>` as a `### Target-D saturation log` subsection immediately after the failure-mode register. This log is the auditable evidence that saturation was *reached* rather than *asserted* — a reviewer must be able to identify the two consecutive no-new-category searches from the log. Without this log, acceptance check 2 fails.

### Step 3 — Synthesize to a structured knowledge-base and persist to the Ledger

From the four-target research, synthesize a structured knowledge-base with the following four sections:

1. **Domain summary** — microstructure in plain language (from Target A)
2. **Vocabulary glossary** — terms of art and naming traps, one entry per term (from Target B)
3. **Prior-art map** — existing approaches, outcomes, documented gaps (from Target C)
4. **Failure-mode register** — each failure mode with: name · mechanism · source · `[engine-inferred]` flag if unsourced (from Target D)

Persist this knowledge-base by appending it to the session's Tier-1 Ledger entry, under the heading `## E2 Knowledge-Base — <domain name>`. This is mandatory under L-B — volatile context alone is insufficient; the knowledge-base must survive a context reset and be readable in a fresh session. Do not store it only in context.

Where a research target yielded thin or absent findings, record that explicitly in the relevant section (e.g., `[Prior art: thin — one documented approach found; no comparative outcome data]`). A thin result explicitly documented is a planned catch-point for E3; a thin result silently omitted propagates as a hidden gap.

Also append the exemplar questions produced in Step 4 to this same Ledger entry once Step 4 is complete.

### Step 4 — Distill 3–5 gold-standard exemplar questions

From the knowledge-base — especially the failure-mode register — distill 3–5 questions that demonstrate what "sharp" looks like for this specific domain. These are not the beginning of the question battery; they are anchors. E6 loads them as its few-shot reference: "this is what a sharp question looks like for this domain."

Criteria for each exemplar question:

- **Surfaces a known failure mode, microstructure constraint, or vocabulary trap** that a generic question would miss. An exemplar that could be asked about any domain without modification is a generic question, not an exemplar — discard it and generate a more specific one.
- **Answerable from the knowledge-base** — each exemplar's motivating context must trace to a specific finding from Step 3. Speculative exemplars are not anchors.
- **Specific, direct, one-question** — not compound, not vague, not padded. The quality bar for a question: it materially advances the build or decision, changes a downstream choice, or fills a real unknown (per IRON_LAW.md §5 quality bar).
- **Together, spanning at least two distinct research targets** — at minimum, at least one exemplar from the failure-mode register (Target D) and at least one from microstructure or prior art (Target A or C). The Target-D exemplar must trace to a **sourced** failure mode — one carrying an external citation — not solely to an `[engine-inferred]` entry. If the failure-mode register contains no sourced failure modes, return to Step 2 Target D and externally ground at least one entry before distilling exemplars.

For each exemplar, record:
- The question text
- Its source target (A, B, C, or D)
- A one-sentence rationale: what failure mode, microstructure constraint, or vocabulary trap it surfaces

Persist the exemplar set to `work/<session-id>/domain_exemplars.md` using the format below. Also append a summary of the exemplars to the Tier-1 Ledger entry begun in Step 3.

```
---
domain: <domain name>
session: <session-id>
produced_by: E2
consumed_by: E6 (few-shot anchor — "this is what sharp looks like")
---

## Gold-standard exemplar questions

### Q1
**Question:** [question text]
**Source target:** [A / B / C / D]
**Rationale:** [one sentence — what failure mode, constraint, or vocabulary trap this surfaces]

[Q2…Q5 in the same format]
```

*Count calibration:* 3 exemplars is the floor — below 3, the few-shot anchor for E6 is too thin to demonstrate the contrast between generic and sharp. 5 is the ceiling — above 5, the exemplar category inflates into a partial question battery and loses its anchoring function. If the knowledge-base supports more than 5 strong candidates, select the 5 that together span the most distinct failure modes and research targets.

### Step 5 — E2 sign-off gate (hard gate before E6)

E2 is signed off when all of the following conditions are met and explicitly confirmed by the operator or controller:

**(a)** The domain knowledge-base (four sections: domain summary, vocabulary glossary, prior-art map, failure-mode register) is appended to the session's Tier-1 Ledger entry under `## E2 Knowledge-Base — <domain name>`.

**(b)** `domain_exemplars.md` exists at `work/<session-id>/domain_exemplars.md` with 3–5 questions, each carrying a source target tag and a one-sentence rationale, and together spanning at least two distinct research targets including at least one from Target D.

**(c)** All four research targets are documented in the knowledge-base — thin results recorded explicitly rather than silently omitted.

**(d)** The operator or controller reviews the knowledge-base summary and the exemplar set and gives an explicit sign-off.

**Hard gate: E6 cannot run until E2 is signed off.** E6 loads `domain_exemplars.md` as its few-shot anchor for question quality. Without the exemplar set, E6 produces a generic battery against a generic taxonomy — the documented AI-slop failure that E2 exists to prevent. This gate is not a formality; it is the structural connection between domain-earned knowledge and question sharpness.

## Inputs / Outputs

**Inputs:**
- **`intent_brief.md`** — the operator-confirmed Intent Brief produced by E1. Format: Markdown file. Location: `work/<session-id>/intent_brief.md`. Used at Step 1 to orient the research pass: the mission field identifies the domain; `[unknown — flag for E2/E3]` items are explicit research targets; the project-type field calibrates research depth (build vs. decision). This is the sole artifact E2 may treat as confirmed operator input entering this stage.

**Outputs:**
- **Domain knowledge-base** — a structured Markdown section appended to the session's Tier-1 Ledger entry, under the heading `## E2 Knowledge-Base — <domain name>`. Four required sections: domain summary · vocabulary glossary · prior-art map · failure-mode register (with sources). Format: Markdown section within the Tier-1 Ledger file (append-only per L-B). Location: session Ledger file. This artifact is consumed by E3, which mines the failure-mode register to design structural preventions.

- **`domain_exemplars.md`** — 3–5 gold-standard exemplar questions, each tagged with a source target (A/B/C/D) and a one-sentence rationale, in the YAML-headed format specified in Step 4. Format: Markdown file. Location: `work/<session-id>/domain_exemplars.md`. Consumed by E6 as its few-shot "this is what sharp looks like" anchor for the question battery. A summary of the exemplars is also appended to the Tier-1 Ledger entry.

## Acceptance checks (binary)

1. **Four research targets documented, failure-modes labeled load-bearing, Targets A/B/C externally grounded, and every A/B/C finding tagged?** YES if (a) the domain knowledge-base (Ledger entry) contains named sections for microstructure (Target A), vocabulary/jargon (Target B), prior art (Target C), AND failure modes (Target D); (b) the Protocol in Step 2 explicitly marks Target D as `[LOAD-BEARING]`; (c) the Target A section, the Target B section, and the Target C section each carry at least one finding traced to an external source; AND (d) every finding in the Target A section, the Target B section, and the Target C section carries either an external citation or an `[engine-inferred]` tag — no bare untagged assertion in any of these three sections. NO if any target section is absent, the load-bearing label on Target D is missing, any of Target A, Target B, or Target C carries no external citation, or any finding in Target A, Target B, or Target C is an untagged bare assertion.

2. **Failure-mode findings source-cited, unsourced items tagged, Target D stop criterion named, and saturation log recorded?** YES if (a) each failure-mode entry in the failure-mode register either names an external source OR carries an explicit `[engine-inferred]` tag; (b) the Protocol names the stop criterion for Target D (two successive searches yielding no new structural failure categories); AND (c) the Ledger entry contains a `### Target-D saturation log` subsection recording each search query, its outcome (new category found: YES/NO), and the sources consulted, with at least two consecutive NO-new-category entries visible. NO if any failure-mode finding presents an unsourced engine inference without the `[engine-inferred]` tag, the stop criterion is absent from the Protocol, or the saturation log is absent or missing the required query/outcome/source fields.

3. **Knowledge-base appended to Tier-1 Ledger (L-B)?** YES if the knowledge-base exists as a named section within the session's Tier-1 Ledger entry, not as a volatile in-context note or standalone file unlinked from the Ledger. NO if the knowledge-base is stored only in context or in a file not appended to the Ledger entry.

4. **3–5 exemplar questions produced, persisted to `domain_exemplars.md`, designated as E6's anchor, and the Target-D exemplar sourced?** YES if `domain_exemplars.md` exists at `work/<session-id>/domain_exemplars.md`, contains between 3 and 5 questions (inclusive), each question carries a source target tag and a one-sentence rationale, together they span at least two distinct targets including at least one from Target D, the Target-D exemplar traces to a sourced failure mode (not solely to an `[engine-inferred]` entry), and the file header identifies it as E6's few-shot anchor. NO if the count is outside 3–5, the file is missing or malformed, any question is untagged or lacks a rationale, the Target-D exemplar traces only to engine-inferred failure modes, or the file is not designated as E6's anchor.

5. **E6 hard gate explicitly stated in two locations?** YES if both the Binding section and Step 5 contain explicit statements that E6 cannot run until E2 is signed off. NO if the hard gate is absent from either location, or is stated only as guidance rather than a structural gate.

## Honest ceiling
E2 does not guarantee that the domain knowledge-base captures the domain's *real* failure modes. The public record over-documents surface-level failures (tool selection, process gaps, communication breakdowns) and under-documents structural failures — the kind that are hard to observe from outside, embarrassing to document publicly, or not yet named in the literature. An engine that executes Target D diligently against the available public record can become **fluently wrong**: it acquires the vocabulary, surfaces the documented prior art, and records the well-known failure modes — yet misses the domain's actual cardinal sin because the cardinal sin is not well-documented externally. The exemplar questions then look sharp (they reference real vocabulary, real prior art, real incidents) but encode a shallow model of the domain's failure space. The specific safeguards against this risk are: (a) the failure-mode register explicitly records documentation gaps rather than substituting engine-generated extrapolations as documented findings; (b) E3 deepens the failure-mode register through a dedicated scar-tissue mining pass that may surface the gap the public record missed; and (c) the operator's domain expertise, surfaced in E1's Intent Brief, is the primary external check — if the operator's knowledge contradicts the knowledge-base's failure-mode register, that contradiction is surfaced explicitly rather than papered over. A green E2 sign-off is a complete *process* over the evidence surfaced by the recorded searches — not a guarantee of full field coverage, and not a proven-correct model of the domain's failure space.

## Cross-references
- **E1** (`stages/E1_operator_interview.md`) — E2's upstream producer. E1 produces `intent_brief.md`; E2 must not begin before `intent_brief.md` is confirmed and available. Items tagged `[unknown — flag for E2/E3]` in the Intent Brief are explicit signals to E2 about where the research pass should focus.
- **E3** (`stages/E3_scar_tissue.md`) — E2's direct downstream consumer for the failure-mode register. E3 deepens the failure-mode register into structural preventions — the "how can we make this failure non-representable" pass. E2 must produce a failure-mode register even if thin; E3 mines whatever E2 produces.
- **E6** (`stages/E6_question_battery.md`) — E2's primary downstream consumer for `domain_exemplars.md`. E6 loads the exemplar set as its few-shot "this is what sharp looks like" anchor. E2 is E6's hard-gate precondition; E6 cannot run until E2 is signed off.
- **L-B** (`laws/L-B_3tier_memory.md`) — governs the knowledge-base harvest in Step 3. The knowledge-base is appended to the Tier-1 Ledger (append-only, never summarized over). L-B's integrity invariants ensure the knowledge-base survives context resets and is recoverable in a fresh session.
- **L-D** (`laws/L-D_freeze.md`) — governs the depth calibration stop criterion in Step 2. The failure-mode register's saturation signal (two successive searches, no new structural categories) is the L-D zoom-out check applied to research depth: when continued research no longer advances the mission, proceed. L-D prevents unbounded research regress without imposing a hard count floor.
- **L-E** (`laws/L-E_evidence_over_assertion.md`) — governs sourcing requirements for all research findings, especially Target D failure modes. An engine inference presented as a documented finding without an external source is a hallucination risk under L-E. The `[engine-inferred]` tag is the mandatory quarantine mark; it must appear on any claim not traceable to an external source.
- **GOVERNANCE.md §2** — the 8-line prompt-quality gate this file must clear; gate line (e) is the controller's responsibility and requires a codex audit result recorded in the LEDGER before this file is finalized.
