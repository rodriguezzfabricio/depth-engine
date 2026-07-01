# Examples

Two end-to-end shapes — one **build**, one **decision**. Both are **synthetic and illustrative**: the value is seeing how a seed flows through the stages to a terminal, not the specific findings (those depend on your agent and your real inputs).

---

## Example 1 — Build: "a small habit-tracker CLI"

**Seed:** *"Build me a command-line habit tracker."*
**Boot:** "Read `depth-engine/BOOT.md` and follow it. My goal: build a command-line habit tracker."

| Stage | What happens |
|---|---|
| **E0** | Seed pinned; run memory created (`L-0001`). |
| **E1** | Agent asks the few things that matter: single-user or shared? where does data live (local file, sqlite, cloud)? streaks/reminders/analytics? platforms? Reflects an **Intent Brief**; sets **project-type = build**. |
| **E2** | Researches the domain: how habit-tracking apps actually keep people engaged, what "streak" semantics people expect, timezone/rollover pitfalls, existing CLI UX conventions. Distills exemplar questions. |
| **E3** | Mines failure scars: streak math that breaks across timezones or DST; data loss with no backup; reminders that annoy users into quitting. |
| **E5** | Decomposes the goal into **aspects**: data model & persistence, streak/rollover logic, CLI ergonomics, reminders, reporting, backup/export. Each goes in the Coverage Register. |
| **E6–E7** | Generates questions per aspect; answers them; a **different model family** tries to overturn each load-bearing answer (e.g. "is this streak-rollover rule actually correct across DST?"). |
| **E8** | Judges per-aspect coverage to build-depth. Loops back on any thin aspect until **CONVERGED (build)**. |
| **E9** | **Build-probe:** builds one thin real slice — e.g. `add`/`check`/`streak` against a real store — and treats every surprise (a timezone edge case!) as a reopened question. |
| **E10** | Emits a **build-ready scaffold**: structure, the discipline suite carried forward, fresh memory, a knowledge package, and a verification report. |
| **E11** | **Terminal: build-ready.** You review before your agent builds the rest. The honest ceiling is stated. |

**What you get:** not "here's a habit tracker" in one shot, but a *scaffold earned by research and a real probe* — with the streak-across-timezones trap already surfaced instead of discovered in production.

---

## Example 2 — Decision: "monorepo vs polyrepo for a 3-service startup"

**Seed:** *"Should we use a monorepo or polyrepo for our three services?"*
**Boot:** "Read `depth-engine/BOOT.md` and follow it. My goal: monorepo vs polyrepo for our three backend services?"

| Stage | What happens |
|---|---|
| **E0** | Seed pinned; memory created. |
| **E1** | Agent asks the deciding factors: team size and topology? shared code across services? CI maturity? release cadence & coupling? tooling appetite? Reflects an **Intent Brief**; sets **project-type = decision**. |
| **E2** | Researches the *real* trade-offs: tooling cost of a monorepo at small scale, atomic cross-service changes, CI blast radius, how teams this size actually fare either way. |
| **E3** | Mines scars: "went polyrepo, drowned in version-sync PRs"; "went monorepo, CI got slow and nobody owned the tooling." |
| **E5** | Decomposes into the **sub-questions** the decision rests on (coupling, CI, ownership, migration cost, hiring/onboarding), recorded in the Register. |
| **E6–E7** | Answers each sub-question; a different model family attempts to overturn the leaning verdict — *especially* the flattering one (Law L-A asymmetry). |
| **E8** | When no new question would flip the decision → **CONVERGED (decision)**. Skips E9/E10, routes to E11. |
| **E11** | **Terminal: decision-deliverable.** Delivers the recommendation, the **saturation argument** (why the evidence is now sufficient), the residual open sub-questions, and the honest ceiling. |

**What you get:** a decision with its reasoning saturated and cross-checked — and, crucially, the engine will hand you a **refusal** instead ("neither cleanly, because your real constraint is X — do this smaller thing first") if that's what the evidence supports.

---

### The through-line

In both cases the engine's job is the same: **manufacture rigor** — research the domain, pre-empt known failures, answer under adversarial cross-examination, and stop honestly. It does not manufacture a guaranteed-correct answer; it manufactures a *well-earned* one, with its limits stated. See [FAQ.md](FAQ.md) and [CONCEPTS.md](CONCEPTS.md).
