# TDD & CODE INTEGRITY PROTOCOL
### Binding for every line of code in this project

> **Provenance & credit.** The general TDD discipline below is adapted from the
> open-source **Superpowers** project by Jesse Vincent ("obra"),
> https://github.com/obra/superpowers (MIT License). The critical-path test
> layer (§D), the plain-English audit layer (§F), and the integration with this
> project's memory architecture are original extensions for this project.

> **Reference note (Origin/rationale).** References below to "the project constitution" and to sibling protocols point to your project's always-loaded core rules and the other files in `protocols/`; in the Depth Engine distribution the constitution role is played by the engine's laws (`engine/laws/`) + `BOOT.md`.

This protocol is referenced by the project constitution and is **mandatory**. Load it
into context whenever you are about to **write, change, review, or debug code**.
No piece of code in this project is exempt. "Just this once" is a rationalization
— if you are thinking it, stop.

---

## A. The Iron Law of Testing

```
NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST.
```

- If you wrote production code before its test, **delete it and start over from the test.** Do not keep it "as reference," do not "adapt" it while writing the test — that is just testing-after wearing a disguise.
- **The core reason:** a test you never watched fail proves nothing. It might test the wrong thing, test the mock instead of the code, or pass for a reason unrelated to the behavior you care about. Watching it fail for the *expected* reason is the only proof that the test is real.
- **Violating the letter of this protocol is violating its spirit.** Reworded shortcuts ("it's the same idea," "tests-after achieve the same goal") are still violations.

**Exceptions (require explicit human approval, logged in the Ledger):** throwaway exploratory spikes (which must then be deleted and rebuilt under TDD), pure configuration files, and trivially-generated boilerplate.

---

## B. Red → Verify Red → Green → Verify Green → Refactor

**RED — write one failing test** for one behavior. Clear name. Tests *real* behavior, not a mock. Demonstrates the API you wish you had.

**VERIFY RED — run it and watch it fail (MANDATORY, never skipped).** Confirm: it *fails* (not errors out from a typo); the failure message is the one you expected; it fails *because the behavior is missing*. If it passes, you're testing something that already exists — fix the test. If it errors, fix the error until it fails cleanly for the right reason.

**GREEN — write the minimal code to pass.** No extra features, no speculative options, no "while I'm here." YAGNI.

**VERIFY GREEN — run it and watch it pass (MANDATORY).** Confirm: this test passes; *all other tests still pass*; output is **pristine** (no stray warnings, no noise). If it fails, fix the *code*, not the test.

**REFACTOR — clean up only after green.** Remove duplication, improve names, extract helpers. Tests stay green. Add no new behavior.

Then repeat for the next behavior.

---

## C. Test Legitimacy Guardrails (the anti-fake-test rules)

A test that cannot fail, or that passes for the wrong reason, is worse than no test — it manufactures false confidence. These rules exist because *fake tests are the single biggest threat to this project's integrity.*

1. **Test real behavior, not mock behavior.** Never assert that a mock was called or that a `*-mock` element exists as your proof of correctness. Mocks isolate; they are never the thing under test. Prefer real components; mock only the genuinely external/slow/non-deterministic (network, a live external service, the clock).
2. **No test-only methods in production code.** If a method exists only so a test can call it, it belongs in test utilities, not in the production class.
3. **Understand dependencies before mocking.** Run the real implementation first to see what a test actually depends on. Over-mocking "to be safe" silently breaks the behavior you meant to test.
4. **Mocks must mirror reality completely.** A partial mock that omits fields the real API returns will pass in test and fail in production. Mock the full structure as it actually exists.
5. **The mutation check — prove the test can fail.** For every *critical* component (anything touching money, safety, correctness, an irreversible action, or an external-resource path), you must demonstrate the test suite catches a wrong implementation: temporarily break the implementation (flip a sign, drop a fee, return a constant), run the tests, and **confirm they go red**; then restore and confirm green. Record this red-green proof in the Ledger. A regression test for a fixed bug must likewise be shown to fail against the un-fixed code.
6. **Tests are not an afterthought.** "Implementation done, tests next" is a TDD violation by definition. Code is not "done" until its tests exist and were written first.

---

## D. Critical-Path Test Layer (why ordinary green is not enough — regenerate per domain)

Code can pass a full green suite and still be a fantasy if the tests don't encode the real-world constraints that govern the domain's **critical path** — the places where a wrong implementation is dangerous (whatever your project defines as its critical-path domains). The core-judgment bar is enforced **here, in tests** — not asserted in prose.

**This layer is regenerated for every domain — it is not portable as-is.** The *archetypes* below are general (every high-stakes domain needs them); only the *instances* are domain-specific. To build the layer:

1. **Enumerate the cardinal failure modes** on the critical path — the specific ways a green suite could still ship a falsehood: a wrong real-world number, an unproven safety claim, a result fabricated by a silent error, a mis-computed metric, an unenforced limit, an un-sandboxed irreversible action.
2. **Instantiate the matching archetype below for each**, so the failure becomes *structurally detectable* — caught by a test, not by trust. This is the cardinal-failure-mode → rule mapping in its code-enforcement form.
3. The resulting battery is your project's critical-path test layer.

The archetypes (each shown with a worked, domain-neutral **e.g.**):

1. **Golden tests against authoritative external constants.** Where the domain depends on real-world numbers or rules the model must never invent (rates, fees, thresholds, schedules, legal or physical limits), encode them as golden cases — specific inputs → specific expected outputs — sourced from primary documentation, **cited and dated** in the test. Every downstream calculation is tested against these golden values, never against numbers the model produced. *e.g.: a pricing/fee schedule or a legal/physical limit encoded as golden cases (specific inputs → specific expected outputs, cited and dated); every downstream calc is tested against them, never against a model-produced number.*
2. **Invariant / property tests on every claimed guarantee.** For any output claimed to satisfy a hard guarantee — lossless, bounded, monotone, conserved, "always ≥ X," "never worse than Y" — write a test that **enumerates every relevant outcome** and asserts the guarantee holds under realistic conditions (full costs, worst case). A claim that has not passed this test must be **relabeled to the honest weaker claim**. *e.g.: a property test that enumerates every outcome of a claimed "never loses / bounded-loss" guarantee under full costs and asserts it holds worst-case; an unproven guarantee is relabeled to the honest weaker claim, not asserted.*
3. **Cardinal-sin tests — make the domain's result-fabricating error structurally impossible.** Identify the domain's **cardinal sin**: the silent mistake that manufactures good-looking results (the analogue of lookahead / time-travel). Inject it deliberately and assert the harness either **rejects it or the results collapse** — proving the safeguard actually works. Also assert that the real-world frictions are applied; a result with the friction zeroed out is a bug, and a test must **fail if the friction is ever zeroed**. *e.g.: if the cardinal sin is scoring a past decision with information that would not have been available yet, inject that peek and assert the harness rejects it or the results collapse; plus a test that fails if real costs or minimums are ever zeroed (a frictionless simulation is a bug).*
4. **Metric-correctness tests — verify the measurement itself.** Any metric used to justify a go/no-go claim ("calibrated," "significant," "within tolerance," "converged") is itself tested against **hand-worked examples**, so the claim resting on it is a verified claim and not a computed-by-faith one. *e.g.: check a calibration or accuracy metric against known hand-worked examples, so "the metric says we are within tolerance" is itself a verified claim.*
5. **Safety-limit tests — drive past each guardrail, assert it blocks.** Every code-enforced safety limit has a test that drives the system **past** the limit and asserts it is blocked. These are safety-critical: treat any failure as **Critical**. *e.g.: each code-enforced limit (a rate cap, a resource ceiling, a kill-switch) has a test that pushes past it and asserts the block.*
6. **Irreversible-action path tested against a dry-run, never first against the real resource.** The path that performs the domain's irreversible / high-stakes action is tested against a **sandbox / dry-run** surface; the **first real action is a human-approval gate** (see the project constitution), not a test. *e.g.: the irreversible-action path (a payment, a deploy, a destructive write) is tested against a sandbox/dry-run surface; the first real action is a human gate, never a test.*

---

## E. Verification Before Completion (no claim without fresh evidence)

```
NO COMPLETION CLAIM WITHOUT FRESH VERIFICATION EVIDENCE.
```

- You may not say a thing "passes / works / is fixed / is done" unless you ran the verifying command **in the same step** and read its output. Confidence is not evidence.
- Read the *full* output, check the exit code, count the failures. "Should pass" / "looks right" / "probably" are red flags — run it.
- Pristine output is part of passing: warnings and noise are findings.
- When you delegate to a subagent, do **not** trust its "success" report — verify against the actual diff and the actual test output.

---

## F. Plain-English Audit Layer (so the operator can check the tests, not just trust them)

The operator can judge right from wrong but does not code. Trusting the *tests* requires being able to read what they guarantee. Therefore, for every component:

- Maintain a short **"What these tests guarantee"** list in plain English — one line per test, stating the real-world behavior it pins down (e.g., *"If an operation could ever violate its safety guarantee under any input, this test fails."*).
- At each phase/code checkpoint, surface this list to the operator for sanity-check. This is the human gate on **test legitimacy** — the operator confirms the tests assert things that actually matter, which is the whole point.
- Flag explicitly any behavior that is *not* covered by a test, so the operator knows where trust is unearned.

---

## G. The Code Workflow — Implementer + Independent Reviewer (per code task)

Adapted from Superpowers' subagent-driven development. Every code task runs as:

1. **Dispatch a fresh implementer subagent** in its own clean context with: the task brief (as a file), the interfaces it touches, the binding constraints, and the report-file path. It implements under full TDD (§A–§D), runs the focused tests while iterating and the full suite once before committing, self-reviews, commits, and writes a report containing its **RED/GREEN evidence** and test output.
2. **Generate the diff as a file**, then **dispatch a fresh reviewer subagent** that is explicitly told **not to trust the implementer's report** and to verify claims against the diff. It returns two verdicts — **spec compliance** (nothing missing, nothing extra, nothing misunderstood) and **code quality** (clean, real tests, edge cases, structure) — with `file:line` evidence and severity-rated findings (Critical / Important / Minor). Never tell the reviewer what not to flag, and never pre-rate a finding's severity for it.
3. **Fix loop:** dispatch a fix subagent for all Critical/Important findings (and re-run the covering tests with fresh evidence), then re-review. Repeat until both verdicts are clean. Minor findings are logged for the broad review.
4. **Only then** mark the task complete in the Coverage Register / Ledger.
5. **Broad whole-branch review at the end of each build phase**, on the most capable model, against the full set of requirements — plus the Minor-findings roll-up.

**Receiving review** (yours or a subagent's): verify before implementing, no performative agreement, push back with technical reasoning when a finding is wrong for this codebase, and apply YAGNI (grep for real usage before "implementing properly").

---

## H. Debugging Discipline

```
NO FIX WITHOUT ROOT-CAUSE INVESTIGATION FIRST.
```

When a test fails or behavior is wrong: read the error fully, reproduce it consistently, check recent changes, and — in multi-component flows (e.g. data → model → decision → action) — add instrumentation at each boundary to find *where* it breaks before proposing *how* to fix it. Then write a failing test that reproduces the bug, and only then fix it (the test proves the fix and prevents regression). Symptom-patching without root cause is a failure.

---

## I. Integration with Memory & the Project

- **Code/test ledger:** every code task's RED/GREEN evidence, reviewer verdicts, mutation-check proofs, and the plain-English guarantee list are written to the **Ledger** (append-only). The progress ledger of completed code tasks survives compaction — after any reset, trust the Ledger and `git log`, never re-implement a task already marked complete.
- **Reproducibility:** pin dependencies, seed every RNG, and snapshot the data an offline/historical test used, so any result can be reproduced exactly. A result that can't be reproduced is not a result.
- **Reviewer findings** that touch open questions are registered in the Coverage Register so nothing is silently dropped.

---

## J. The Bottom Line

Test first. Watch it fail for the right reason. Make it pass minimally. Verify with fresh evidence. Test *real* behavior — and for anything touching money, prove the test would catch a wrong answer. An independent reviewer re-checks every piece. The operator can read, in plain English, what every test guarantees. Code that has not been through this is not trusted, and untrusted code does not go near production or any irreversible action.

---

## K. Critical-Resource Path & External-Integration Hardening (additive)
### Regenerate the domain's standing hardenings — load with §D when touching the domain's critical-resource path (its irreversible resource, compliance surface, or security boundary) or its live external integration

> **Pattern.** Each domain accumulates these hardenings in its own **Ledger** as it builds the
> critical-resource path; codify them here additively (no §A–§J text is changed). The worked
> examples below are illustrative and domain-neutral.

1. **Mandatory independent (cross-family) review on every critical-resource path.** On every code
   path that touches the domain's **irreversible resource, compliance surface, or security
   boundary**, the §G independent-reviewer rule is **mandatory, not discretionary**, and is routed
   to an independent reviewer on a *different model family* (e.g. Codex/GPT) **before its verdict is
   trusted**. And **verify every finding in the code yourself before acting on OR relaying it** —
   never pass a reviewer's claim to the operator unchecked (the reviewer can be wrong for this
   codebase; a relayed-but-false finding is its own integrity failure). *e.g.: a cross-family
   reviewer catches a verdict-flipping bug in a validation harness, or a numeric-precision bug in a
   cost module, that same-model self-review had missed.*
2. **Exact / lossless types for the domain's critical quantity.** Compute the domain's critical
   quantity in the representation whose precision or rounding errors would be unacceptable to the
   core judgment — never a lossy default chosen for convenience. *e.g.: for money math, use exact
   types (`Decimal` / `Fraction`), never binary `float` — a float rate can silently produce a
   wrong rounded fee.*
3. **Authoritative sources + a pinned external-contract schema.** Take the domain's critical state
   **only** from its authoritative source — never infer it from a proxy or status signal — and
   **pin the external API/contract schema version and run a schema-smoke-test on startup**; never
   trust an unpinned external schema's field names. *e.g.: take critical state only from the
   authoritative endpoint (not an inferred status), pin the external API schema version, and
   smoke-test it on startup — an unpinned unit/format migration silently breaks clients.*
