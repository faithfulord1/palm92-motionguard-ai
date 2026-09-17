# MotionGuard roadmap

## MVP v1.0
Working browser prototype: synthetic feed, personal baseline, movement visualisation, explainable alerts, human review, evidence timeline, report, consent/governance and MCP/wearable architecture.

## v1.1 - stronger demo
- scenario selector: warehouse lifting, care worker transfer, rail/maintenance task, desk/static posture, older-adult mobility
- baseline calibration wizard
- risk-event drill-down with provenance
- exportable JSON evidence bundle
- accessibility review and keyboard support
- PWA/offline demo mode

## v1.2 - MCP reference server
- implement vendor-neutral MCP server for read tools
- schema validation and audit logging
- guarded human-review write tool
- local demo client and tests

## v2 - real sensor pilot
- Android DeviceMotion / supported phone sensor adapter where technically appropriate
- Bluetooth IMU adapter
- smartwatch/wearable feasibility review
- signal quality and calibration metadata
- explicit consent, deletion and retention workflow
- pseudonymous participant IDs

## Validation gate before consequential real-world use
- domain expert and physiotherapist/occupational-health review
- usability testing with intended users
- false-positive/false-negative analysis
- demographic and movement-pattern performance analysis where appropriate
- privacy/data-protection assessment
- medical-device/regulatory classification assessment if intended use moves into regulated territory
- security threat model and penetration testing

## Additional product ideas
- fatigue/change-from-baseline trend rather than single-event alarms
- contextual task tags so identical movement can be interpreted in the right work context
- worker-controlled privacy mode and transparent "what is being sensed" panel
- team dashboard using aggregated/de-identified trends, not employee medical surveillance
- intervention outcome loop: did a break or task change return movement toward baseline?
- clinician/safety-manager annotations linked to evidence
- multilingual plain-language explanations
- accessibility-first voice summaries
- calibration confidence and sensor-quality score
- tamper-evident evidence hashes for higher-assurance deployments
- organisational policy engine separated from the personal baseline engine

The roadmap preserves the core rule: AI investigates, humans decide, evidence proves why.
