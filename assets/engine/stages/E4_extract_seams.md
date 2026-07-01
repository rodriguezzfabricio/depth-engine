<!--
PROMPT-QUALITY GATE (GOVERNANCE §2) — clear all 8 before marking this file "done":
[x] a. DoD quantified      — Acceptance checks enumerate four binary YES/NO checks, each tied to a named DoD item or output artifact.
[x] b. Scope manifest      — Four DoD items listed in task-11-report.md §manifest; reconciled with file:line evidence in §reconciliation before commit.
[x] c. Levers, deliberate  — Five-step Protocol (re-read sources → quote-then-extract S1–S10 → separate grounding pass → emit seams.json → sign-off) isolates each sub-task independently. Effort calibrated proportionately: one verbatim quote per extracted subclaim; no ritual exhaustion of surrounding context. Verifying-subagents: N/A — E4 produces seams.json, not a go/no-go verdict requiring cross-family overturn; L-A adversarial protocol reserved for load-bearing verdicts that gate downstream stage decisions. No ritual MAX.
[x] d. Countermeasures     — Context-rot: intent_brief.md, E2 Ledger entry, and scar_protocols.md all re-read from persisted files at Step 1, not recalled from context. Satisficing: 4 binary acceptance checks + citations-grounding pass with per-seam verdict. Sycophancy: P4 quote-then-extract makes the verbatim source span visible — an extracted claim cannot silently float free of its source; a grounding-FAILED claim must be demoted, never silently promoted. Hallucination: seams.json is Structured-Outputs schema-pinned; the per-claim grounding record in the Ledger (quote + extracted claim per subclaim) is the re-runnable artifact that makes false-provenance detectable without trusting a self-report of diligence.
[x] e. Cross-family audit  — codex (gpt) audited 2 rounds (task-11-codex-audit{,-r2}.txt): all 4 DoD met after fixes; caught the `low-confidence` evidence escape hatch (closed via uniform per-subclaim evidence invariant) + per-seam→per-claim evidence array (P4 is evidence-per-claim) + domain leaks (genericized) + perfection language (scoped to non-empty). Recorded B-0016. (GOVERNANCE/report short-paths deferred to Task 20.)
[x] f. Alignment trace     — UP: E4 → engine README stages table ("Extract the seams") → GOVERNANCE.md §2 → engine mission (domain-agnostic ingestion/research). DOWN: 5-step protocol (re-read → quote-extract → ground → emit → sign-off) is coherent with I1 spec (mine S1–S10 → seams.json via P4; grounding pass; Structured Outputs); E10 as downstream consumer is coherent with README; no contradictions found.
[x] g. Persisted           — Commit records this file; build LEDGER entry (task-11-report.md §manifest) links to it; reachable from REGISTER task entry.
[x] h. Honest ceiling      — The Honest ceiling section names the specific residual failure mode: a seam the E1–E3 stages did not surface stays missing — E4 can only extract what the upstream material contains; a seam the operator never mentioned and research never found stays empty.
-->

# E4 — Extract the seams

### Binding · Load WHEN:
INITIATOR loads this stage immediately after E3 is signed off. Trigger: the E3 sign-off gate (E3 Step 6) is explicitly cleared and `work/<session-id>/scar_protocols.md` exists in a valid terminal state (State A or State B). E4 is complete when (a) `work/<session-id>/seams.json` is produced and schema-valid, (b) the citations-grounding record is appended to the Tier-1 Ledger under `## E4 Seam Extraction — <domain name>`, and (c) the Step 5 sign-off gate is explicitly cleared by the operator or controller. Do not load before E3 is signed off. **E10 cannot run until this stage is signed off.**

## Purpose (one paragraph)
E4 is the engine's seam-extraction pass. With E1–E3 in hand — a confirmed Intent Brief, the E2 knowledge-base in the Ledger, and a set of scar-tissue protocols — this stage mines the ten parameterization seams (S1–S10) from that accumulated material and emits them as a machine-readable `seams.json` artifact. The extraction follows the P4 quote-then-extract pattern: for every seam claim, the INITIATOR first locates and records the verbatim source span that grounds the claim, then derives the extracted value from that span, and attaches both in an `<evidence>` block. A claim that has no grounding `<evidence>` block is not an extraction — it is an assertion, and it fails the gate. After extraction, a *separate* citations-grounding pass verifies that each quoted span actually appears in the named artifact and actually grounds the extracted value — catching fabricated, mis-attributed, or over-interpreted evidence before it enters `seams.json`. The result is a structured output whose every non-empty field is traceable to a real source span and auditable by artifact; a seam genuinely absent from the E1–E3 material is recorded empty, not invented — a reviewer can follow any non-empty seam's evidence block to the upstream material and confirm the quote is real. `seams.json` is consumed by E10, which renders it into the domain-specific scaffold; the quality of E4's extraction determines whether the scaffold is domain-specific or generic.

## Kalshi referent (what proven mechanism this generalizes)
**Step I1 — Mine transcript → seams.json** (`adapter/notes/07_adapter_design.md`, pipeline step table, I1 row) from the Kalshi adapter project. In its original context, I1 was the LLM mining step that took the operator's input transcript and extracted S1–S10 into a structured JSON artifact, applying the P4 prompting pattern (quote-then-extract `<evidence>` per claim; Structured-Outputs schema; separate Citations grounding pass) to prevent the adapter from fabricating seam values that were not grounded in the original transcript. The pattern — *for every extracted claim, quote the source span first; ground claims to real span evidence before emitting; verify grounding in a separate pass* — is domain-general and applies unchanged to any pipeline that extracts structured parameterization from a primary input. In E4, the "transcript" is generalized to the three upstream artifacts E1–E3 produce; the extraction method (P4) is unchanged; and the downstream consumer (E10) fills the same structural role as the deterministic scaffold renderer in the original adapter. Companion referent: **P4 — Miner grounding** (`adapter/notes/06_research.md`, P1–P7 pattern summary, P4 entry): "quote-then-extract `<evidence>` requirement + a separate Citations grounding pass; Structured Outputs for the schema. *(F4)*" The schema is located at `adapter/schema/seams.schema.json`.

## Protocol (the steps the INITIATOR executes)

### Step 1 — Re-read and orient from upstream artifacts

Re-read the three upstream artifacts from their persisted files — not from context. Context degrades across long sessions; re-reading the file is the context-rot countermeasure.

**Load in this order:**

1. **`intent_brief.md`** — at `work/<session-id>/intent_brief.md`. Primary source for S1 (Mission), S2 (Operator profile), S3 (Irreversible action), S4 (Phase roadmap), S7 (DoD items). Re-read the file in full.

2. **E2 knowledge-base (Tier-1 Ledger entry)** — locate `## E2 Knowledge-Base — <domain name>` in the session Ledger file. Primary source for S5 (Question taxonomy), S8 (Ledger topic-tags + phase labels). Supplementary source for S6 (failure-mode register seeds the domain protocol list).

3. **`scar_protocols.md`** — at `work/<session-id>/scar_protocols.md`. Primary source for S9 (cardinal sin — E3's structural prevention is the S9 value). Supplementary source for S6 (each scar protocol entry is a domain-specific protocol).

Record the domain name (from E2's knowledge-base heading) as the first line of the Step 5 Ledger entry before beginning Step 2. Place all three artifacts at the top of working context.

### Step 2 — Extract S1–S10 via P4 quote-then-extract

For each of the ten seams, execute the P4 pattern in three sub-moves:

**(a) Locate the source span.** Find the specific passage in the upstream material that grounds the seam's value. This must be a real passage in one of the three loaded artifacts — not engine-generated content, not a synthesis of multiple ambiguous clauses, not a paraphrase.

**(b) Quote the source span verbatim.** Record the exact text of the grounding passage. Do not paraphrase. Do not reconstruct from memory. If a seam's value must span multiple passages, quote each separately.

**(c) Extract the claim and attach an `<evidence>` block.** State the seam value as a discrete, actionable claim derived only from the quoted span. Attach:

```
<evidence>
  source: <artifact name and section — e.g. "intent_brief.md §Mission" or "Ledger §E2 Knowledge-Base — <domain name>, Target D failure-mode register">
  quote: "<verbatim source span>"
  extracted: "<the seam value derived from this span — only what the span supports>"
</evidence>
```

**Multi-claim seams:** If the seam's value is composed of multiple distinct subclaims (e.g., S5's taxonomy categories, S6's protocol list, S8's tag vocabulary), execute sub-moves (a)–(c) for each subclaim separately, producing one claim-record per subclaim. Each subclaim carries its own `<evidence>` block and its own grounding verdict in `seams.json`. A seam with a single discrete value has one claim-record; a seam with multiple discrete values has one claim-record per value.

**Gate rule (enforced from this step):** A subclaim is only valid if it carries a populated `<evidence>` block with a non-empty `quote` field. An extracted subclaim with no grounding `<evidence>` block is an unsupported assertion under L-E and fails this gate. It must not appear in any `claims` array under a non-empty seam status (`confirmed`, `inferred`, or `low-confidence`). If a seam's grounding span cannot be located in the upstream material, record the seam as `"status": "empty"` — do not fabricate a quote to fill it.

Work through all ten seams in order:

---

**S1 — Mission**
*What is being built or decided, and the honesty clause for it.*

Source primarily from `intent_brief.md` §Mission. The Intent Brief's mission field is the direct source; the honesty clause (E1's provenance tag `operator-stated` vs `engine-inferred`) is part of the extraction. Extract: a one- to two-sentence statement of what the project is building or deciding, suitable for wiring into a scaffold's mission slot.

---

**S2 — Operator profile**
*Resources, risk posture, technical level, deadline, key constraints.*

Source from `intent_brief.md` (operator-edge field and constraints). Extract: a structured summary of who is operating the system and under what constraints — the information that determines whether a plan is realistic for this operator.

---

**S3 — Irreversible/high-stakes action**
*The specific action that defines the human-approval gate.*

Source from `intent_brief.md`. The Intent Brief's success-criteria or operator-edge fields typically name the irreversible action explicitly. Extract: the specific action that, once taken, cannot be undone cheaply — the irreversible commitment this domain is built around. This slot wires directly into the scaffold's human-approval gate.

---

**S4 — Phase roadmap**
*The domain's workflow phases and their exit gates.*

Source primarily from `intent_brief.md` (success criteria and non-goals may map to phases). Supplement from E2's knowledge-base (Target A microstructure often surfaces the domain's natural workflow phases). Extract: the ordered phases the project walks through and the exit condition for each phase.

---

**S5 — Question taxonomy**
*The domain's coverage categories (replaces a generic A–J taxonomy).*

Source from E2's knowledge-base: the domain summary (Target A), vocabulary glossary (Target B), and failure-mode register (Target D) collectively imply the taxonomy structure. The E2 exemplar questions also demonstrate which categories matter most. Extract: a list of named coverage categories that, together, cover the space a sharp question battery for this domain must address.

---

**S6 — Domain-specific protocols**
*For each cardinal failure mode, a protocol via the 8-slot anatomy.*

Source from E3's `scar_protocols.md` (each scar protocol entry is a domain-specific protocol) and from E2's failure-mode register (supplementary seed). Extract: one protocol entry per failure mode, summarizing the incident mechanism, structural prevention, and RED test specification in a form suitable for the scaffold's SPEC protocol slot. Where E3 produced State B (NULL — no external incidents found), S6 is set to `"status": "empty"` — do not substitute speculation.

---

**S7 — DoD items**
*The artifacts whose existence constitutes "done."*

Source from `intent_brief.md` §Success-criteria. Extract: the specific, nameable outputs or conditions whose presence allows the project to declare completion — concrete enough that their existence can be checked, not only felt.

---

**S8 — Ledger topic-tags + phase labels**
*The tagging categories and phase names for the session Ledger.*

Source from E2's knowledge-base (domain vocabulary, phase roadmap in S4, and taxonomy in S5 collectively imply the appropriate Ledger tagging structure). Extract: the topic-tag vocabulary and phase-label set that will organize this domain's session Ledger entries.

---

**S9 — The "cardinal sin"**
*The structural error to make impossible by design — the domain's cardinal failure that must be mutation-tested out of the system.*

Source from E3's `scar_protocols.md`. E3 identified the cardinal sin explicitly in its structural prevention entries; the structural prevention IS the S9 value. If E3 produced State B (NULL), S9 is set to `"status": "empty"` — record this explicitly and do not substitute a speculative cardinal sin. An empty S9 is a real, honest output that downstream stages must handle.

---

**S10 — Core go/no-go judgment + evidence bar**
*The central go/no-go judgment the project exists to get right, and the minimum evidence bar that would justify acting on it.*

Source from `intent_brief.md` §Success-criteria (what would make the result clearly right) and E2's prior-art map (Target C: what evidence has justified analogous decisions before). Extract: the specific judgment to be made and the minimum evidence standard — observable, not merely claimed — that would satisfy it.

---

### Step 3 — Citations-grounding pass (separate from extraction)

After completing Step 2, execute a distinct grounding pass. This pass is not part of extraction — it is a separate verification step whose purpose is to catch fabricated, mis-attributed, or over-interpreted evidence before it enters `seams.json`. Run this pass in a fresh review of the upstream artifacts, not from the extracted notes.

For each extracted claim within each seam — iterating seam by seam (S1 through S10), then claim-record by claim-record within the seam — in order:

1. **Navigate to the named source.** Open the artifact and section identified in the `<evidence>` block's `source` field.

2. **Confirm the quote is present.** Locate the verbatim text stated in the `quote` field in the actual artifact. A paraphrase is not a match. A reconstruction from memory is not a match.

3. **Confirm the extraction is faithful.** Verify that the `extracted` value is a supportable derivation from the quoted span — not adding content the span does not supply, not resolving an ambiguous quote as a confirmed fact.

4. **Record the per-subclaim verdict:**
   - **`GROUNDED`** — quote confirmed present at the stated location; extraction is a faithful derivation of the span.
   - **`PARTIAL`** — quote confirmed present; but the extracted value extends beyond what the span strictly supports (inference was added). Note the inference explicitly.
   - **`FAILED`** — quote not found at the stated location, or the extracted value is not supported by the quoted span.

**Resolution rule for FAILED verdicts:** A `FAILED` verdict means the seam must be revised before `seams.json` is emitted. Options: (a) re-extract from a real source span (correct the `<evidence>` block and re-run the grounding check), or (b) demote the seam to `"status": "empty"`. A `FAILED` claim must not enter the final `seams.json` under any non-empty status (`confirmed`, `inferred`, or `low-confidence`). Silently promoting a `FAILED` claim to any non-empty status is a hallucination under L-E.

**Resolution rule for PARTIAL verdicts:** Tag the seam `"status": "inferred"` in `seams.json`. The non-spanned inference portion is noted in the `extracted` field and visible to downstream stages.

**Append the grounding record to the Ledger.** Record the full per-claim grounding results in the session's Tier-1 Ledger entry under `## E4 Seam Extraction — <domain name>` as a `### Citations-grounding record`. Each entry states: seam ID, claim index or subclaim text, source location, the verbatim quote (exact text from the artifact), the extracted claim, and verdict (GROUNDED / PARTIAL / FAILED) — plus, for PARTIAL, the inference noted. A multi-claim seam produces one entry per subclaim. This record is self-contained: a reviewer can confirm that the quote is real and the extraction is faithful from the Ledger entry alone, without opening `seams.json` or the source artifact.

### Step 4 — Emit seams.json

Once all grounding verdicts are resolved, assemble `seams.json`. The schema is referenced at `adapter/schema/seams.schema.json` (Structured-Outputs schema). Emit the file as a JSON object with a top-level `seams` array of ten entries, one per seam:

```json
{
  "domain": "<domain name>",
  "session": "<session-id>",
  "produced_by": "E4",
  "consumed_by": "E10",
  "schema": "adapter/schema/seams.schema.json",
  "seams": [
    {
      "id": "S1",
      "name": "Mission",
      "status": "confirmed | inferred | low-confidence",
      "claims": [
        {
          "subclaim": "<the discrete value-fragment or subclaim this evidence supports>",
          "evidence": {
            "source": "<artifact name and section>",
            "quote": "<verbatim source span>",
            "extracted": "<the claim derived from this span>"
          },
          "grounding_verdict": "GROUNDED | PARTIAL | FAILED"
        }
        // one entry per extracted subclaim; a single-claim seam has one element
      ]
    },
    // empty seam — status "empty", value null, grounding_verdict N/A, claims omitted:
    {
      "id": "S9",
      "name": "Cardinal sin",
      "status": "empty",
      "value": null,
      "grounding_verdict": "N/A"
    }
    // ... remaining seams in the appropriate format
  ]
}
```

**Schema conditional (enforced at sign-off gate):**
- `"empty"` seam: `value` must be null; `grounding_verdict` must be `N/A`; `claims` omitted.
- `"confirmed"` seam: `claims` array required (minimum one element); each claim-record must carry an `evidence` block with a non-empty `quote` and `grounding_verdict: GROUNDED`. No claim-record may be left without its own evidence and GROUNDED verdict.
- `"inferred"` seam: `claims` array required (minimum one element); each claim-record must carry an `evidence` block with a non-empty `quote` and `grounding_verdict: PARTIAL`.
- `"low-confidence"` seam: `claims` array required (minimum one element); each claim-record must carry an `evidence` block with a non-empty `quote` and `grounding_verdict: PARTIAL` (weak but real grounding — never `GROUNDED`, never absent).

**Status semantics:**
- `"confirmed"` — all subclaims `GROUNDED`: every claim-record's quote confirmed present; every extraction faithful to its span.
- `"inferred"` — all subclaims `PARTIAL`: every claim-record's quote confirmed present; each extracted value extends the span with engine inference; noted in the `extracted` field of that claim-record.
- `"empty"` — source span not found in E1–E3 material; value is null; `grounding_verdict: N/A`; no `claims` array required.
- `"low-confidence"` — all subclaims `PARTIAL` (weak): every claim-record's quote located but grounding is weak (the span is ambiguous or tangential); every extracted value is a plausible reading, not a clear derivation; all `grounding_verdict` values must be `PARTIAL` (never `GROUNDED`, never absent); downstream stages treat it as provisional.

**Uniform evidence rule (net invariant):** There is no way to place a non-empty subclaim into `seams.json` without its own grounding `<evidence>` block and a real (non-`N/A`) `grounding_verdict` for that subclaim. Every non-empty seam — `confirmed`, `inferred`, or `low-confidence` — must carry a `claims` array where every element has both. A subclaim with no grounding source must not appear in any `claims` array; if that leaves a seam without any supported subclaim, the seam must be demoted to `empty` (value null, `grounding_verdict: N/A`) and never promoted to any non-empty status.

Write `seams.json` to `work/<session-id>/seams.json`. Also record the file's production and the per-seam status summary in the session's Tier-1 Ledger entry under `## E4 Seam Extraction — <domain name>`.

### Step 5 — E4 sign-off gate

E4 is signed off when all of the following conditions are met and explicitly confirmed by the operator or controller:

**(a)** `seams.json` exists at `work/<session-id>/seams.json`, contains all ten seams S1–S10, and each entry carries a `status` field set to one of the four valid values (`confirmed`, `inferred`, `empty`, `low-confidence`).

**(b)** Every seam with a non-empty status (`confirmed`, `inferred`, or `low-confidence`) carries a `claims` array where EVERY claim-record has a populated `evidence` block with a non-empty `quote` field and a real (non-`N/A`) `grounding_verdict`: `confirmed` → all claim-records `GROUNDED`; `inferred` → all claim-records `PARTIAL`; `low-confidence` → all claim-records `PARTIAL`. No seam passes if any of its claim-records lacks an `evidence` block or carries a `FAILED` verdict. Every seam with `status: "empty"` has `value: null`, `grounding_verdict: N/A`, and no `claims` array required.

**(c)** The citations-grounding record is appended to the session's Tier-1 Ledger under `## E4 Seam Extraction — <domain name>` as a `### Citations-grounding record`, with one entry per extracted subclaim across all ten seams (a multi-claim seam produces one entry per subclaim), each entry self-contained with verbatim quote and extracted claim.

**(d)** No claim-record in any seam carries `"grounding_verdict": "FAILED"` in the final `seams.json` — all `FAILED` verdicts at the per-subclaim level must have been resolved (re-extracted with a corrected `<evidence>` block, or the seam demoted to `"status": "empty"`).

**(e)** The operator or controller reviews the seam set (including which seams are empty or low-confidence) and gives explicit sign-off.

**Hard gate: E10 cannot run until E4 is signed off.** E10 renders the seam values from `seams.json` into the domain-specific scaffold skeleton, memory skeleton, role boot-blocks, and question battery anchor. Without a signed-off E4, E10 has no parameterized seam values to fill and emits a generic scaffold indistinguishable from a template — the operational failure that the adapter pipeline exists to prevent.

## Inputs / Outputs

**Inputs:**

- **`intent_brief.md`** — operator-confirmed Intent Brief produced by E1. Format: Markdown file. Location: `work/<session-id>/intent_brief.md`. Primary source for S1, S2, S3, S4, S7. Re-read at Step 1 from the file; do not rely on context recall.

- **E2 knowledge-base (Tier-1 Ledger entry)** — the structured domain knowledge-base appended to the session Ledger by E2. Format: Markdown section within the Tier-1 Ledger file, under `## E2 Knowledge-Base — <domain name>`. Location: session Ledger file. Primary source for S5, S8; supplementary source for S6.

- **`scar_protocols.md`** — the scar-tissue protocol set produced by E3. Format: Markdown file with YAML header. Location: `work/<session-id>/scar_protocols.md`. Primary source for S9; supplementary source for S6. Re-read at Step 1 from the file.

**Outputs:**

- **`seams.json`** — the ten-seam Structured-Outputs artifact. Format: JSON file, schema referenced at `adapter/schema/seams.schema.json`. Location: `work/<session-id>/seams.json`. Each seam entry carries: `id`, `name`, `status`, and either (for non-empty seams) a `claims` array — one element per extracted subclaim, each with `subclaim`, `evidence` (`source`, `quote`, `extracted`), and `grounding_verdict` — or (for empty seams) `value: null` and `grounding_verdict: N/A`. Consumed by E10 to render the domain-specific scaffold. Also recorded by summary in the Tier-1 Ledger entry under `## E4 Seam Extraction — <domain name>`.

- **Citations-grounding record (Ledger section)** — per-claim grounding verdict for all extracted subclaims across all ten seams, appended to the Tier-1 Ledger as a `### Citations-grounding record` subsection. Format: Markdown section within the Tier-1 Ledger file (append-only per L-B). Location: session Ledger file, under `## E4 Seam Extraction — <domain name>`. Each entry includes the verbatim quote and extracted claim, so a reviewer can spot-check any subclaim from the Ledger alone without opening `seams.json` or the source artifact.

## Acceptance checks (binary)

1. **All ten seams S1–S10 enumerated, defined, and covered in the Protocol?** YES if the Protocol names all ten seams explicitly — S1 Mission, S2 Operator profile, S3 Irreversible action, S4 Phase roadmap, S5 Question taxonomy, S6 Domain-specific protocols, S7 DoD items, S8 Ledger topic-tags + phase labels, S9 Cardinal sin, S10 Core go/no-go + evidence bar — and gives a source and extraction instruction for each. NO if any of the ten seams is absent from the extraction protocol, or if a seam is present by name but lacks a stated source artifact and extraction instruction.

2. **P4 quote-then-extract `<evidence>` per claim enforced as a binary gate?** YES if (a) the Protocol requires a verbatim `quote` from the source artifact and an `extracted` value for every extracted subclaim within every confirmed or inferred seam, both placed in an `<evidence>` block inside that subclaim's claim-record; AND (b) the Protocol explicitly states that a subclaim without a grounding `<evidence>` block — or with an empty `quote` field — fails the gate and must not appear in any `claims` array under a non-empty seam status; AND (c) `seams.json` in the output format carries a `claims` array for every non-empty seam, where each element carries `subclaim`, `evidence` (with `source`, `quote`, `extracted`), and `grounding_verdict`. NO if the quote-then-extract requirement is present only as guidance rather than a gate rule; if a seam can reach `"confirmed"` status without every claim-record carrying a populated `quote` field; or if the per-claim `evidence` structure is absent from the output format.

3. **Separate citations-grounding pass present and its results recorded as an auditable artifact?** YES if (a) Step 3 is a distinct protocol step executed after Step 2, separate from the extraction itself; (b) it instructs the INITIATOR to navigate to the named source artifact and confirm the quoted text is physically present there; (c) it produces per-subclaim verdicts (GROUNDED / PARTIAL / FAILED) — one per extracted claim within each seam — recorded in the Tier-1 Ledger as a `### Citations-grounding record` subsection, with each entry self-contained (verbatim quote + extracted claim + verdict) and auditable standalone without opening `seams.json`; AND (d) the Inputs / Outputs section lists the grounding record as a named output artifact — so the check is answerable by reading an artifact, not by trusting a self-report of diligence. NO if the grounding pass is folded into extraction as part of the same step; if it does not require navigating to the actual source artifact; if verdicts are per-seam rather than per-subclaim; if the grounding record omits the quote or extracted text; if the record is not persisted to the Ledger; or if this check cannot be answered from artifacts.

4. **`seams.json` emitted with a referenced Structured-Outputs schema, consumed by E10, and persisted at a stable path?** YES if (a) the Protocol produces `seams.json` as a named output artifact; (b) the file references the schema at `adapter/schema/seams.schema.json`; (c) the output format specifies all required fields including `produced_by: E4`, `consumed_by: E10`, and the `seams` array with per-entry `status` and — for non-empty seams — a `claims` array with per-subclaim `evidence` sub-fields; AND (d) the file is written to a stable, stated path (`work/<session-id>/seams.json`) that E10 can locate. NO if `seams.json` is not a named output; the schema is not referenced; the `consumed_by` annotation is absent; or the output path is unspecified.

## Honest ceiling
E4 cannot extract seams that E1–E3 did not surface. The extraction is bounded by the upstream material: if the operator's seed was thin and E1's interview did not elicit a concrete phase roadmap, S4 stays empty; if E2's domain research missed a critical vocabulary distinction, S5's taxonomy will reflect that gap; if E3 found no externally-documented cardinal sin (State B), S9 is empty and S6's protocol list may be sparse. These are honest outputs — an empty seam explicitly recorded is a known gap that downstream stages (and the operator's review at Step 5) can address; an empty seam silently populated with fabrication is a structural defect. A second specific failure mode: the P4 pattern grounds claims to verbatim source spans, but a source span can itself be wrong — if E2's knowledge-base recorded an incorrect domain microstructure (fluently wrong, in the sense named by E2's honest ceiling), E4 faithfully quotes the wrong claim, and the grounding pass confirms the quote is real. E4's grounding pass catches fabrication and mis-attribution; it does not catch an upstream stage's substantive error. A green E4 sign-off means: every non-empty seam has a real, traceable source span, and the grounding pass confirmed it; empty seams are honestly recorded gaps, not fabrications — and a green sign-off does not mean every seam value is factually correct.

## Cross-references
- **E1** (`stages/E1_operator_interview.md`) — E4's primary upstream producer for S1, S2, S3, S4, S7. `intent_brief.md` is the first artifact re-read at Step 1.
- **E2** (`stages/E2_domain_expert.md`) — E4's upstream producer for S5, S8, and the supplementary seed for S6. The E2 knowledge-base (Tier-1 Ledger entry) is the second artifact loaded at Step 1.
- **E3** (`stages/E3_scar_tissue.md`) — E4's upstream producer for S9 and the primary source for S6. `scar_protocols.md` is the third artifact loaded at Step 1. A State B (NULL) from E3 yields an empty S9 and a sparse S6; both are valid, honest outputs.
- **E10** (`stages/E10_emit_scaffold.md`) — E4's primary downstream consumer. E10 renders the seam values from `seams.json` into the domain-specific scaffold skeleton, memory skeleton, role boot-blocks, and question battery anchor. A signed-off E4 is E10's hard-gate precondition; E10 cannot run until this stage is signed off.
- **L-B** (`laws/L-B_3tier_memory.md`) — governs the grounding record in Step 3. The citations-grounding record is appended to the Tier-1 Ledger (append-only, never summarized over); it must survive a context reset and be readable in a fresh session. `seams.json` is also recorded by summary in the Ledger for the same reason.
- **L-E** (`laws/L-E_evidence_over_assertion.md`) — governs the quote-then-extract requirement throughout. A seam value presented without a grounding `<evidence>` block is an assertion without evidence under L-E; the gate rule in Step 2 makes this explicit. A FAILED grounding verdict means the claim is ungrounded; demoting it to `"empty"` rather than silently promoting it is the direct application of L-E's quarantine rule.
- **L-A** (`laws/L-A_adversarial_posture.md`) — the citations-grounding pass (Step 3) is the E4 application of L-A's C2 countermeasure (prefer re-runnable artifact check over self-report): the grounding record in the Ledger lets a reviewer independently re-derive whether each quote is real, without trusting the INITIATOR's summary.
- **GOVERNANCE.md §2** — the 8-line prompt-quality gate this file must clear; gate line (e) is the controller's responsibility and requires a codex audit result recorded in the LEDGER before this file is finalized.
