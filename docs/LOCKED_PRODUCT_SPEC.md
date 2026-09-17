# Palm92 MotionGuard AI: Locked Product Specification

Locked on 17 September 2026.

## Mission

Turn wearable and motion data into personalised, explainable movement-risk intelligence while keeping people in control of consequential decisions.

## Core proposition

**Personalised movement intelligence for safer bodies and safer work.**

**AI investigates. Humans decide. Evidence proves why.**

## Architecture

1. **Data Collection**: simulated wearable sensors for MVP; real wearables, smartphones and compatible sensors later.
2. **Personal Baseline Engine**: learns or stores an individual's normal movement ranges and exposure patterns.
3. **Movement Intelligence Engine**: derives movement features and detects material deviations.
4. **Risk & Explanation Layer**: applies transparent rules/thresholds and explains why an event was flagged.
5. **Human Governance & Approvals**: authorised reviewer accepts, amends, escalates or dismisses recommendations.
6. **Evidence & Audit Trail**: records inputs, derived metrics, rules, explanations, decisions, rationale and timestamps.
7. **Dashboards & Reports**: communicates trends and reviewed outcomes without presenting unvalidated diagnoses.

## MVP screens

### 1. Overview Dashboard
- Current monitoring status
- Personal baseline status
- Session risk summary
- Recent flags
- Movement trend chart
- Sensor health / simulated connection status

### 2. Live Monitor
- Simulated streaming readings
- Body / movement visualisation
- Flexion, rotation, asymmetry, repetition and static-posture indicators
- Start, pause and reset simulation controls
- Event timeline

### 3. Personal Baseline
- Baseline window and confidence/coverage indicator
- Normal ranges by movement metric
- Current-versus-baseline comparisons
- Baseline provenance and last-updated timestamp

### 4. AI Insights
Each insight shows:
- Observation
- Baseline comparison
- Triggering rule or threshold
- Severity / attention level
- Plain-English explanation
- Confidence / data-quality context
- Safe suggested next step
- Link to evidence

### 5. Human Review Centre
Reviewer roles can include physiotherapist, occupational-health professional, safety manager or other authorised reviewer.

Actions:
- Accept
- Amend
- Escalate
- Dismiss

Record reviewer identity/role, rationale, timestamp and resulting status.

### 6. Evidence & Audit Trail
Immutable-style chronological view of:
- Sensor event
- Derived metric
- Baseline used
- Rule triggered
- System explanation
- Human review
- Final decision

### 7. Session Report
- Session summary
- Movement exposure trends
- Flagged events
- Reviewed outcomes
- Limitations and disclaimer
- Export/print-friendly presentation

### 8. Governance
- Consent status
- Data minimisation
- Role-based access concept
- Retention controls
- Explainability
- Model/rule versioning
- Limitations
- Human oversight
- Future device-validation requirements

## Initial synthetic scenario

A demo session should include normal movement followed by realistic deviations, for example increased forward flexion, repeated twisting and a prolonged static period. The application should compare those events with a synthetic personal baseline and generate explainable flags.

Example:

> Forward-flexion exposure increased by 31% relative to this user's established baseline during the current session. The pattern may indicate increased musculoskeletal strain. A rest break or professional assessment may be appropriate depending on symptoms and context.

This wording is illustrative decision support, not diagnosis.

## Non-negotiable safety boundaries

- No diagnosis of injury, disease or pain source.
- No claim that a specific muscle is causing pain solely from wearable data.
- No autonomous treatment prescription.
- No simulated data presented as real patient evidence.
- No claim of clinical validation, medical-device certification or regulatory approval unless independently achieved and documented later.
- Consequential recommendations require human oversight.
- Users must be able to see why a flag was generated.
- Evidence must distinguish raw observation from inference and human judgment.

## MVP technology constraint

The demonstrator must work without a paid AI API. Core risk detection should be reproducible using local deterministic logic and synthetic data. Optional AI integrations may later enrich explanations but must not be required for the core safety workflow.

## Future phases

- Real phone IMU ingestion
- Smartwatch integration
- Dedicated IMU / wearable adapters
- Clinician / occupational-health portal
- Organisational fleet/workforce view using privacy-preserving aggregation
- Domain packs for rail, construction, care and warehouse/manual-handling contexts
- Validation studies and appropriate regulatory assessment before clinical claims or medical-device use

## Change-control rule

The product may gain features, but changes to the mission, evidence architecture, human-oversight principle or safety boundaries must be explicitly documented rather than silently overwritten.
