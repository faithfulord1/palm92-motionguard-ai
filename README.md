# Palm92 MotionGuard AI

**Personalised movement intelligence for safer bodies and safer work.**

> **AI investigates. Humans decide. Evidence proves why.**

Palm92 MotionGuard AI is a governed movement-risk decision-support prototype. It uses simulated wearable sensor data and an individual's own movement baseline to identify potentially important changes in posture and movement patterns, explain why a flag was raised, and route consequential decisions to an authorised human reviewer.

## Product principle

MotionGuard is designed around personalisation rather than one-size-fits-all thresholds. A person's current movement pattern is compared with their own established baseline, while configurable safety thresholds provide additional context.

## Locked MVP scope

- Personal movement baseline engine
- Simulated wearable / motion-sensor data stream
- Live movement monitoring dashboard
- Forward-flexion detection
- Twisting / rotation detection
- Left-right asymmetry monitoring
- Repetitive movement monitoring
- Prolonged static-posture monitoring
- Explainable movement-risk flags
- Personalised, cautious guidance
- Human Review Centre
- Reviewer actions: accept, amend, escalate or dismiss
- Mandatory reviewer rationale for consequential decisions
- Evidence and audit trail
- Session timeline and trend views
- Session report
- Consent and privacy controls
- Governance and model-limitations page
- Future adapter layer for real wearable, phone and smartwatch sensors

## Evidence flow

`Sensor observation -> Personal baseline comparison -> Risk signal -> Explanation -> Human review -> Decision -> Audit evidence`

Each important event should preserve the observation, baseline used, threshold or rule triggered, explanation, timestamp, review status and human rationale.

## Safety and governance boundaries

MotionGuard does **not** diagnose disease or injury. It must not claim that a particular muscle, joint or condition is the cause of pain. It must not present simulated data as clinical evidence, claim clinical validation or regulatory approval, prescribe treatment, or replace a clinician or physiotherapist.

Safe language includes statements such as:

> "Forward-flexion exposure is elevated compared with your personal baseline. This pattern may indicate increased musculoskeletal strain. Consider a rest break or professional assessment if symptoms persist."

The system should clearly distinguish **observed sensor data**, **derived metrics**, **AI/rule-based inferences**, and **human decisions**.

## Human oversight

Consequential recommendations remain subject to authorised human review. Reviewers may accept, amend, escalate or dismiss a flag and must be able to record their rationale. The audit trail must preserve both the machine-generated recommendation and the final human decision.

## MVP data strategy

The first release uses realistic synthetic data so the product can be demonstrated without collecting real health or wearable data. Real-device integrations are a later phase and should be added behind explicit consent and data-governance controls.

## Target applications

Potential future applications include occupational health, physiotherapy decision support, elderly mobility, care work, construction, rail, warehouse/manual-handling safety and rehabilitation. Each domain will require appropriate validation and governance before real-world consequential use.

## Build approach

The project is intended to remain portable and low-cost. The repository is the source of truth. The MVP should favour open-source components and free development/deployment tiers where practical, with no required paid AI API for the core demonstration. A deterministic local rules engine and synthetic-data simulator provide a working fallback.

## Status

**MVP specification locked: 17 September 2026.**

The repository will evolve through documented versions without silently changing the core safety boundaries above.
