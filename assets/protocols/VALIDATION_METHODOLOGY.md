# VALIDATION METHODOLOGY — Anti-Overfitting Technique

### Binding for any empirical claim that gates a decision.

> **Provenance & reference note (Origin/rationale).** This protocol was generalized from a proven quantitative-research system. It refers to a project **"constitution"** (the always-loaded core rules) and to sibling protocols; in the Depth Engine distribution the constitution role is played by the engine's laws (`engine/laws/`) + `BOOT.md`, and sibling protocols live beside this file in `protocols/`. It codifies the anti-overfitting discipline that separates a real, repeatable effect from a lucky artifact. It is the **statistical-discipline layer** that runs on top of whatever measurement/offline-test engine your domain uses.

---

## 1. Pre-specify every cut; cluster by event

- **Pre-specify ALL segment cuts BEFORE running** (whatever your domain's segments are — category, cohort, time bucket, side, size band). **No post-hoc slicing** — choosing segments after seeing the data manufactures false positives (the multiple-testing trap).
- **Event-clustering is mandatory.** When one real-world event drives many correlated observations, **each event counts as ONE observation — effective N = number of independent events**, not the raw row/record count. Compute significance on the event-clustered series.
- **A result that dies under event-clustering is an artifact** — this is the decisive test, not optional sensitivity analysis.

<example>
A signal appears strong across "hundreds of records," but those records all trace to a handful of correlated real-world events. Re-counted as one-observation-per-event, the effective N collapses and the signal vanishes — it was within-event correlation, not a repeatable effect.
</example>

## 2. Cheapest test first

**Validate the IDEA on the data already in hand BEFORE any heavy build.** Never build a large pipeline (new corpus, new data source, complex model) to test a hypothesis a cheap proxy on existing data could kill first. A clean negative from a cheap test is a fully valid outcome and a large saved cost.

## 3. Freeze parameters before out-of-sample; a peeked hold-out is BURNED

- Freeze every parameter **before** touching the out-of-sample (hold-out) set.
- **If the hold-out is peeked — even once, even informally — it is BURNED.** It is no longer out-of-sample; a fresh, never-seen hold-out is required before any out-of-sample claim. There is no "I only glanced at it."

## 4. Effect-vs-bug diagnostic

A model-vs-reference gap that **survives shrinkage** toward the reference value is as likely a **bug as a real effect.** Before committing anything to it, **re-check the measurement definition, the data, and the cost model** — a large persistent gap usually means a misread source or a data error, not free value. The response to a surviving gap is a **re-check, never a bigger commitment.**

---

> **§5–§8 govern the forward (live/prospective) test and the small-sample frontier.** §1–§4 above govern *cross-sectional* validation on data in hand. Additive — nothing above changes.

## 5. Forward-tests are SEQUENTIAL — use an always-valid test + a futility boundary

A prospective test you *watch* is a hold-out you *peek at* — and §3 says a peeked hold-out is BURNED. A fixed-horizon test you glance at as it accrues inflates Type I error exactly the way post-hoc slicing does. So a forward test is **never** "run it N periods then look":

- **Use an always-valid sequential test** — a mixture SPRT (mSPRT) / e-values / confidence sequences — whose error guarantee holds **under continuous monitoring**. You may look every period; the inference stays valid.
- **Pre-register a futility boundary** that KILLS the hypothesis cheaply if it is flat: a lower bound the cumulative statistic must clear by milestone M, or the test stops and the effect is declared dead. This caps the cost of a null (the forward form of §2 cheapest-test-first) and is the structural defense against **"unfalsifiable theater"** — a long run of activity that can neither succeed nor prove the effect.
- The success boundary AND the futility kill are both **frozen before the first observation**. A prospective test that commits real resources is itself a human-approval gate.

## 6. Compute time-to-significance BEFORE running the forward test (the power calc)

A forward test that *cannot* reach significance inside the window over which the effect could persist is moot — running it is theater. The **decisive number is computed first**, not discovered late:

- For 80% power at two-sided 5%, required events **N ≈ (2.8·σ/δ)²**, where **σ** is the per-observation noise (standard deviation) and **δ** is the effect size you need to detect. Plug in **your domain's** σ and δ.
- **Verdict rule:** compute `required-N ÷ expected-events-per-period`. If that **exceeds the window in which the effect could plausibly persist, the test is structurally unable to answer — do not run it; say so.** Small effects relative to the noise can require orders of magnitude more observations than a realistic horizon provides.

<example>
With σ≈0.35, a large detectable effect might need a few hundred events (weeks–months), while an effect a fraction of that size needs thousands (years). If your setting produces ~100 events/period and the effect could decay within a few periods, only a large effect is testable at all — quantify this up front rather than discovering it after a wasted run.
</example>

## 7. Many small segments → Bayesian hierarchical / partial pooling

When an effect is spread thin across many correlated segments, the "how many segments individually survive multiple-comparison correction?" lens is **low-power by construction** (few survivors is consistent with a real population effect *and* with noise). The higher-power tool is **partial pooling**:

- Fit a hierarchical model (closed-form empirical-Bayes, or a probabilistic-programming library) that lets each segment's estimate **borrow strength** from the population. It returns a posterior on the **population-level effect** (the quantity you actually act on) plus **shrunken per-segment estimates** (honest about which segments are merely noisy).
- This is the **one method that adds effective power to the *existing* sample** without new data — so it is the sharpest *next* analysis on a parked small-sample effect, preferred over re-slicing. **Honest bound:** pooling *removes false confidence and sharpens estimates; it does not manufacture significance* — if the true effect is small relative to the noise on the sample you have, it still won't cross. Past that, **only more data helps** (§5/§6).

## 8. Net at the ACTUAL action size — not a notional one

"An effect is net of its cost, or it isn't an effect" is **size-dependent** whenever real per-unit costs include **fixed fees, rounding, or minimums** — these bite hardest at the **smallest action size**. Re-price the effect at the **quantity you will actually act at**, where a fixed or rounded-up per-unit cost can **erase** a margin that looked fine on a larger notional. Always evaluate the net effect at the real size; never quote an effect net of a cost computed on a larger notional.

---

## Cross-references
- `TDD_AND_CODE_INTEGRITY.md` (calibration + cardinal-sin/anti-fabrication tests — the code form of these guards).
- The project constitution (exhaustiveness & anti-overfitting: pre-registration, hold-out, multiple-comparison correction, red-team).
