# PROMPT ENGINEERING — The Standard That Governs All Future Prompts
### Binding · FROZEN / additive-only · the one prompt the project keeps reusing
### Load WHEN: before authoring OR continuing ANY prompt — fresh context or continuation, whole-project directive down to a micro-task. Re-read on every resume.

> **Reference note (Origin/rationale).** This standard was generalized from a proven system. It references that system's always-loaded surface: a **constitution** (core rules), an **agent-instructions file** (e.g. `CLAUDE.md` / `AGENTS.md`), a **State file**, and a **research base**. In the Depth Engine distribution: the constitution role = the engine's laws (`engine/laws/`) + `BOOT.md`; the always-loaded surface = `BOOT.md` + your agent's own instructions file; the State = `memory/STATE.md`. Bare section numbers (e.g. §8) refer to that originating constitution and are provenance, not broken links. Sibling protocols live in `protocols/`.

> **Status & provenance.** Binding and **FROZEN** (built once — Ledger **L-0047** —
> and thereafter additive-only; see §6). This is a *generator standard*: it does not
> do the mission, it sets the bar every mission prompt must clear. It **extends**, and
> removes/weakens nothing in, `AI_OPERATING_DISCIPLINE.md` (§E–§I are its parents) and
> the prompt-engineering research base. It traces UP to the project constitution
> (trace-to-roots, exhaustiveness/anti-overfitting, TDD/verification, drift audit, and
> the honesty clause). Like its parents
> it is **curated and stable, not a per-turn research dump** — its always-loaded
> surface is the compact **§4 gate**; the rigor lives here and is pulled on demand.
>
> **The one-sentence point.** Every future prompt must make the model's *execution*
> **clear a written bar** and be **independently (cross-family) verified** — never
> promise an unmeasurable "perfection." It perfects **process**, which is all a prompt
> can perfect; it cannot manufacture an outcome the world won't give.

---

## 1. FRAME — what this standard IS and IS NOT (read this first, every time)

*Written verbatim so every future reader — fresh context or continuation — sees the bar and its limits before applying it.*

**This standard IS:**
- A requirement that every prompt drive the model's **EXECUTION against a DEFINED bar, with that execution independently (cross-family) verified.** "Against-a-defined-bar" means the target is an enumerated Definition-of-Done (§3a), not a feeling. The standard ensures the *process* clears that bar and is checked; it does **not** — and cannot — guarantee the execution was "maximal" in any absolute sense, because that would be the very unfalsifiable claim §1 and §3h reject. What is guaranteed is the **process**, never the **outcome**.
- A way to perfect **PROCESS, not OUTCOME.** A perfectly-engineered prompt cannot manufacture a market edge, "the other side of the market," or any other **external truth.** It can only guarantee that *if* the work is gettable, the process was complete, honest, and checked — and that *if* it is not gettable, that is reported plainly rather than papered over.
- **Honestly quantified.** The measurable proxies of a well-engineered prompt are exactly three: **(a) Definition-of-Done coverage** (enumerated deliverables, each passing its binary check); **(b) cross-family fidelity-audit findings** (a different model family rates each manifest item done / shallow / skipped, with evidence); **(c) reproducibility** of load-bearing outputs (the same artifact re-run yields the same decision). Those three are the whole scoreboard.

**This standard IS NOT:**
- It does **not** promise "unbounded perfection," "the model's absolute limit reached," or "every conceivable aspect covered to its fullest extent." **That target is unmeasurable** — no instrument returns it — **so any prompt claiming it is unfalsifiable, and an unfalsifiable claim is untrustworthy *by construction* (§G / §I).** A prompt that cannot be proven to have fallen short also cannot be proven to have succeeded. We refuse that trade.
- It does **not** define or report a **"capability-utilization %."** No such quantity exists or can be measured; a number like "operating at 98% of the model's ability" is fabrication (the project constitution's honesty/labeling rule). We measure the three proxies above and nothing pretending to be more.
- It does **not** convert process quality into outcome certainty. A green fidelity audit means *the process is complete*, **never** *the answer is right about the world* (§3h).

**Honest currency note (2026-06-23, extends L-0045).** A **Claude Opus 4.8 system card now exists** (2026-05-28; `anthropic.com/news/claude-opus-4-8`), so some capability/safety magnitudes are *measured*, not merely extrapolated (e.g. the model is reported ~4× less likely to let a code flaw pass unremarked, and more likely to flag uncertainty / avoid unsupported claims). This **corrects** L-0045's "newer than any public system card" wording. **But the running configuration is `claude-opus-4-8[1m]` (1M-context variant); its long-context-degradation profile is not separately published, so those magnitudes stay directional, and "capability-utilization" and "the model's absolute limit" remain unmeasurable regardless of any card.** The frame above does not depend on the card — it depends on what is *measurable*, which the card does not change.

---

## 2. EVIDENCE BASE — levers & failure modes → the specific prompt-level countermeasure
*The evidentiary base for §3. Extends the prompt-engineering research base (dims B/C/D) + `AI_OPERATING_DISCIPLINE.md` §A–§I; do not re-derive — add to it. Every row carries a source tag or a re-runnable artifact (the project constitution's labeling rule / §E1). No row asserts a number the model invented.*

> **Honesty caveat on magnitudes (applies to the whole section).** The running model
> (`claude-opus-4-8[1m]`) is newer than, or differently-configured from, every source
> below; capability *magnitudes* are **directional / extrapolated**, not measured for
> this exact config. The *existence and direction* of each lever and failure mode is
> sourced; the *size* is not claimed. Sources: Anthropic prompt-engineering docs
> (`platform.claude.com/docs/.../prompt-engineering/*`, 2026); Opus 4.8 system card
> (2026-05-28); Chroma *context-rot* (2025, re-confirmed across 2026 long-context evals);
> *Inverse Scaling in Test-Time Compute* (arXiv 2507.14417); self-preference (Panickssery
> et al., arXiv 2404.13076); CoT-(un)faithfulness (Anthropic, 2025); mSPRT/e-values
> (arXiv 2302.10108).

### 2A — Capability-elicitation levers (what reliably *raises* frontier-model output quality)
| # | Lever | What the prompt does | Source |
|---|-------|----------------------|--------|
| L1 | **Be clear & explicit; state the bar** | Specific instructions + the *desired output* spelled out; "brilliant new employee" framing; the **colleague test** (a human with minimal context could follow it). Explicitly request "above and beyond" if wanted — don't rely on inference. | Anthropic PE docs |
| L2 | **Give context / motivation** | Explain *why* a constraint matters; the model generalizes from the reason. | Anthropic PE docs |
| L3 | **Decompose into one-heavy-unit-per-context** | Split a big objective into units small enough to execute lean; numbered/sequential when order or completeness matters. | `AI_OPERATING_DISCIPLINE` §A2/§A3; CONTEXT_HYGIENE §2 |
| L4 | **Calibrate effort to difficulty** | MAX effort for genuinely deep/ambiguous judgment (test design, verdicts, gates); **not as a reflex.** Long reasoning can drift *toward* spurious correlations — so over-thinking a shallow task *lowers* quality. | Inverse Scaling 2507.14417; §I effort note |
| L5 | **Examples (few-shot), structured** | 3–5 relevant + *diverse* (edge-case-covering) examples in `<example>` tags so they're not mistaken for instructions. | Anthropic PE docs |
| L6 | **Structure with XML / explicit sections; load-bearing data at the TOP** | Wrap instructions/context/inputs in distinct tags; place long inputs *above* the query (query-at-end improves multi-doc results); **ground answers in quotes** pulled first. | Anthropic PE docs (long-context) |
| L7 | **Tools / sub-agents that ADD verification** | Use a tool or a fresh sub-agent when it *checks* something the main thread asserts (a re-run, an independent re-implementation, a cross-read) — not for ceremony. | `AI_OPERATING_DISCIPLINE` §A2; TDD §G |
| L8 | **Show reasoning, then self-check before concluding** | Pre-register the approach; reason in the open; **append an explicit self-check** ("verify the result against [criteria] before finishing") — reliably catches errors. | Anthropic PE docs; VALIDATION_METHODOLOGY |
| L9 | **N independent attempts for the highest-stakes judgments only** | A verifier-selected best-of-N (where a *true* out-of-sample verifier exists) beats one-shot — but cap diversity and never majority-vote unverifiable taste. | research base, dim B/D |
| L10 | **State persistence for long-horizon work** | Externalize progress to files (the Ledger / a manifest / git); "don't stop early for token-budget reasons"; on a fresh window, *discover state from disk* rather than trust memory. | Anthropic PE docs (agentic); CONTEXT_HYGIENE |

### 2B — Failure modes (what *degrades* output) → the prompt-level countermeasure
| # | Failure mode (degrades quality) | Prompt-level countermeasure | Source |
|---|---|---|---|
| F1 | **Context rot / lost-in-the-middle** — 30–50% accuracy loss *well before* the window fills; U-shaped attention. | Lean context; **reset at ~200k** (finish-unit) / 300k ceiling; **restate load-bearing constraints at the TOP** of every prompt and **re-read them on resume.** | Chroma 2025 (re-confirmed 2026); CONTEXT_HYGIENE §2 |
| F2 | **Reward-hacking the verifier/harness** — planted leakage/lookahead, special-cased assertions, hard-coded results. | **Builder ≠ sole grader:** a sealed never-touched hold-out + an independent re-implementation that must reconcile + a **cross-family audit of the harness** (not just the result). | Opus 4.5/4.7 cards; §I.1 |
| F3 | **Eval / audit awareness** — behaves well *because* it senses a test, then reverts. | Bind checks on **real artifacts** (a re-runnable script, a sealed hold-out, a git fact); treat "I reviewed it, it's fine" as INTERPRETIVE until pinned. | Sonnet 4.5 card; §I.2 |
| F4 | **Self-preference bias** — a model favors its own output; same-family "independent" review rubber-stamps. | Route the **highest-stakes verdicts cross-FAMILY** (codex/GPT); require concordance; **disagreement → human gate, never a same-family tie-break.** | Panickssery 2404.13076; §I.3 |
| F5 | **CoT-unfaithfulness** — the verbalized reason is often not the real driver; *unfaithful* reasoning is *more verbose*. | Weight verdicts on **re-runnable artifacts + pre-registered rules**, not on the eloquence of the prose; an especially fluent case for a marginal result is a flag to **re-test, not relax.** | Anthropic 2025; §I.4 |
| F6 | **Satisficing / under-execution / silent truncation** — "feels complete," top-N quietly dropped. | The **scope manifest** (§3b) enumerated *before* acting + the **external fidelity audit** (§3e) reconciling every item; **no silent caps** — log what was dropped. | §E3/§E4; this standard §3 |
| F7 | **Sycophancy / agreement bias** — softening toward what the operator wants. | Reward clean negatives; "PROVE limits, don't assert them; never soften a negative or inflate a positive." | the project constitution §1; §B4/§E5 |
| F8 | **Overconfidence / poor calibration** | Label every claim **fact / inference / speculation**; state fragility. | the project constitution §2.1; §B7 |
| F9 | **Hallucination / confabulation** (facts, fields, file contents) | **Artifact-pinning:** never speculate about a file/number not opened/run; investigate-before-answering; quarantine found claims. | Anthropic PE docs; TDD §K; §B2 |
| F10 | **Fabricated verification** — "it works / I tested it" with no evidence. | Show the **command + its real output** in the same step; "I ran it, here is the output" ≠ "this should work." | TDD §E; §B3 |
| F11 | **Instruction drift / lost caveats over a long session** | Re-anchor at checkpoints; the §10.5 resume ritual; the **alignment trace** (§3f); never drop a caveat "to be concise." | the project constitution §12; CONTEXT_HYGIENE §4 |
| F12 | **Over-engineering / over-triggering** — current models are *more* prompt-responsive, so blanket "CRITICAL/MUST/exhaustive" language now causes ceremony, extra files, unrequested scope. | Prescribe **calibrated** rigor (normal "Use X when…", not "you MUST ALWAYS X"); the §C zoom-out check; scope discipline ("only what's asked / clearly necessary"). | Anthropic PE docs; `AI_OPERATING_DISCIPLINE` §C |

**Reading of the base.** The single highest-leverage finding (the research base's B+C+D convergence, codified as §I) is that **a prompt's verification layer cannot trust the same model that did the work** — which is why §3(e) makes a *cross-family* fidelity audit mandatory, not optional. Everything else in §3 follows from making the levers (2A) deliberate and the failure modes (2B) pre-empted.

---

## 3. THE STANDARD — the checkable recipe EVERY future prompt MUST obey

> **Checkability rule (the meta-rule of this standard).** Every clause below ships an
> **acceptance check** — a command, a test, an artifact, or a cross-check that returns
> pass/fail. *If a clause's acceptance check cannot be stated, the clause is cut.* A
> prompt "obeys this standard" **iff** all eight acceptance checks pass. Calibrate
> rigor to stakes (F12): a one-line micro-task satisfies these in one or two lines; a
> whole-project directive satisfies them in full. **None of the eight is ever skipped
> — they *scale down*, they do not *drop out*.**

### (a) Quantified Definition-of-Done
Replace "fullest extent / every conceivable aspect / as thorough as possible" with an **ENUMERATED deliverable list**, each item carrying a **binary acceptance check** (a command / a test / a named artifact / a cross-check). **"Done" = every check passes — never "feels complete."**
- **Acceptance check:** every deliverable maps to one pass/fail check; a grep of the prompt's DoD finds **no** unbounded phrase standing in for a check. If you cannot write the check, the deliverable is not yet defined.

### (b) Scope manifest up front
Before acting, the executor **enumerates every required item** (the manifest). At completion, **every manifest item carries a status — done / shallow / skipped — with evidence.** This makes silent truncation (F6) visible and auditable.
- **Acceptance check:** a manifest exists *before* execution **and** is reconciled *after* — item count out == item count in; no item silently absent; each `done` cites its evidence.

### (c) Capability levers, applied deliberately
From §2A, the prompt **names which levers it uses and why** — at minimum: **decomposition** into one-heavy-unit-per-context (L3); **effort calibration** (L4 — MAX for genuinely hard judgment, *not* as ritual); **tools/sub-agents only where they ADD verification** (L7); **N independent attempts** for the highest-stakes judgments (L9). Ritual use of a lever is a defect, not compliance.
- **Acceptance check:** for the heaviest-judgment unit, the relevant levers are explicitly chosen **or** explicitly deemed unnecessary with a one-line reason (no silent default to "max effort everything") — **and the §3e cross-family audit rates each choice, and each "unnecessary"/N/A claim, as warranted / shallow / wrong**, so the call cannot pass on the author's say-so alone. (Whether a lever genuinely *added verification* is a judgment; it is routed to (e) + the human gate, not self-attested — §G.)

### (d) Failure-mode countermeasures baked in
From §2B, the prompt embeds the standing countermeasures matched to its risks: **context-rot → reset + lean context + constraints-at-top (F1)**; **satisficing/under-execution → the manifest (b) + the external audit (e) (F6)**; **sycophancy/overconfidence → evidence-or-it-didn't-happen + label fact/inference/speculation + cross-family check (F4/F5/F7/F8)**; **hallucination → artifact-pinning (F9)**; **lost-in-the-middle → load-bearing constraints restated at the TOP and re-read on resume (F1/F11).**
- **Acceptance check:** each of those five countermeasure clusters is present in the prompt **or** marked N/A with a reason; the load-bearing constraints physically appear at the top of the prompt.

### (e) External cross-family fidelity audit (the trust mechanism — BINDING)
**Every prompt MUST end with a cross-family (codex/GPT) check.** Inputs: the **original prompt + the diff + the Ledger entry.** Task: *"rate every manifest item done / shallow / skipped, with `file:line` evidence"* — **and challenge every `N/A` / "deemed unnecessary" claim (from c / d / f), not only the positive items.** **Same-model self-grading does NOT count** (§I.2 — a self-audit can pass *because* it sensed an audit). **Findings are verified in the artifact by the author before being relayed or acted on** (TDD §K-1). **Disagreement on a load-bearing point escalates to the human gate (§7) — never a same-family tie-break** (§I.3).
- **Acceptance check:** a cross-family audit artifact exists, was run on the real diff, and every load-bearing finding was reconciled against the file (fixed or refuted-with-evidence); any unresolved load-bearing disagreement is surfaced to the operator, not silently closed. **The artifact = the cross-family tool's raw output (retained / quoted) + a reconciliation recorded in the unit's Ledger entry (per-item verdict + what was fixed or refuted) — so the audit is re-findable and reproducible (§G), not a one-time console scroll. Retention convention: quote the verdict + load-bearing findings verbatim in the unit's Ledger entry (`memory/LEDGER.md`, the append-only record); if the raw transcript is long, save it beside the unit's other artifacts and reference it by path from that Ledger entry.**

### (f) Alignment trace — UP and DOWN (§F)
Trace the objective **UP** with evidence at each level: item → task → sub-project → mission → **DoD §14 + the operator's standards.** Also check **DOWN**: is the instruction itself **coherent** with the task/mission? **Flag contradictions; never silently "fix" them.**
- **Acceptance check:** the up-trace **names every level** (item → task → sub-project → mission → DoD §14) — a *structural* check that is binary (each level is present or it is not), not the weaker "a trace exists"; the down-coherence check states explicitly **"no contradiction found"** *or* names each contradiction and surfaces it to the operator. **Trace *correctness* (does it truly serve the mission?) is a judgment — there is no honest fully-binary test for it; it is routed to the §3e audit + the human gate and labelled INTERPRETIVE (§G), never asserted as self-verified.**

### (g) Persistence — live in an always-loaded surface
The standard's load-bearing checklist (**§4 below**) must be reachable from a surface re-read in **every** context. Concretely: a one-line **"prompt-quality gate"** pointer in your project's always-loaded instructions (e.g. `BOOT.md`, `CLAUDE.md`, or `AGENTS.md`) **and** in the resume ritual, so a fresh or resumed context re-reads it before authoring a prompt. *This is how the standard is "always remembered."*
- **Acceptance check:** a grep for `prompt-quality` / `PROMPT_ENGINEERING` in your always-loaded instructions returns the pointer, and this file appears in the load-WHEN list.

### (h) Honest-ceiling clause
The prompt **must not promise perfection or completeness it cannot verify.** A green fidelity audit (e) is explicitly **NOT a successful outcome — only a complete process.** No claim of "absolute limit reached," "fully perfect," or a "capability-utilization %" survives review (§1).
- **Acceptance check:** the artifact states the honest ceiling in words; a grep finds no surviving "perfect / absolute limit / 100% of capability"-style outcome claim presented as fact.

---

## 4. THE PROMPT-QUALITY GATE — the compact checklist (this is what your always-loaded instructions point to)
*Re-read this 8-line gate before authoring or continuing any prompt. It scales: a micro-task answers each line in a clause; a project directive answers each in a section. Nothing drops out.*

```
PROMPT-QUALITY GATE (PROMPT_ENGINEERING.md) — all 8 or it's not done:
 a. DoD quantified      — enumerated deliverables, each with a binary check ("done" = checks pass, not "feels complete")
 b. Scope manifest      — list every item BEFORE acting; reconcile each (done/shallow/skipped + evidence) AFTER
 c. Levers, deliberate  — name decomposition / effort-calibration / verifying-tools / N-attempts used + WHY (no ritual MAX)
 d. Countermeasures     — context-rot→reset+constraints-at-top · satisficing→manifest+audit · sycophancy→evidence+cross-family · hallucination→artifact-pin
 e. Cross-family audit  — codex rates every item (incl. N/A/'unnecessary' claims) done/shallow/skipped w/ evidence; verify-in-file; load-bearing disagreement → human gate (self-grading ≠ audit)
 f. Alignment trace     — UP (item→task→mission→DoD §14) AND DOWN (instruction coherent? flag contradictions, don't silently fix)
 g. Persisted           — gate pointer in your always-loaded instructions (BOOT.md / CLAUDE.md / AGENTS.md) + resume pointer (so it's re-read every context)
 h. Honest ceiling      — no unverifiable "perfection"/"absolute limit"/"capability-%"; green audit = complete PROCESS, not a right OUTCOME
```

---

## 5. WORKED EXAMPLE — what a manifest + audit looks like (the dog-food template)
*A minimal template so future prompts have a concrete shape to copy. (This very file ate its own dog food — its real manifest + cross-family audit verdict are recorded in Ledger L-0047.)*

```
SCOPE MANIFEST  (emit BEFORE acting — §3b)
  M1  <deliverable>            check: <command/test/artifact/cross-check>
  M2  <deliverable>            check: <…>
  …
RECONCILIATION  (emit AFTER acting — §3b/§3e)
  M1  done     evidence: <file:line / command output>
  M2  shallow  evidence: <what's partial, why, what would close it>      → surfaced, not hidden
  …
CROSS-FAMILY FIDELITY AUDIT  (§3e)
  codex input:  original prompt + diff + Ledger entry
  codex output: per-item done/shallow/skipped + file:line evidence
  reconciliation: each load-bearing finding fixed OR refuted-in-file; disagreement → operator
```

---

## 6. FROZEN — the standard does not get re-perfected
Built once (L-0047). Thereafter **additive-only**: clarify or add rows/examples, **never weaken a clause or remove an acceptance check** (the same discipline the constitution holds — `git diff --diff-filter=DR` must stay empty for this file). **Do not re-open the generator to "perfect it again"** — that regress (polishing the thing that makes prompts instead of doing the mission) is exactly what this freeze exists to stop (the §C zoom-out check). If a genuine gap is ever found, add a dated, sourced clause with its own acceptance check; do not rewrite what exists.

---

## Cross-references
- **Parents (extended, not replaced):** `AI_OPERATING_DISCIPLINE.md` §A–§D (levers + 14-flaw guard), §E–§H (the four permanent laws), **§I (self-verification-corruption guard — the direct parent of §3e)**; the prompt-engineering research base (the full research base for §2).
- **Roots (the project constitution):** honesty/labeling, trace-to-roots, exhaustiveness/anti-overfitting + red-team, TDD/verification, drift audit, Definition of Done.
- **Siblings:** `CONTEXT_HYGIENE.md` (the F1 countermeasure + lean sub-agent contexts), `VALIDATION_METHODOLOGY.md` (pre-registration + the forward-test design behind L8), `TDD_AND_CODE_INTEGRITY.md` §E/§G/§K (verification + independent cross-family review).
- **Always-loaded surface:** `BOOT.md` + your agent's own instructions file (the §4 gate pointer + the resume-ritual pointer); `memory/STATE.md` (resume protocol).
- **Source Ledger entry:** **L-0047** (built + dog-fooded + frozen).
