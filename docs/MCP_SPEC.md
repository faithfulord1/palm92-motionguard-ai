# Palm92 MotionGuard AI MCP Tool Contract

MotionGuard is designed to expose governed capabilities through Model Context Protocol (MCP) without giving an AI client authority to diagnose or silently approve consequential actions.

## Proposed tools

### `motionguard.get_session_summary`
Read-only. Returns session metadata, data-source type, baseline version, aggregate movement metrics, flags and review counts.

### `motionguard.get_current_movement`
Read-only. Returns the latest normalised sensor observation with provenance and timestamp.

### `motionguard.list_risk_flags`
Read-only. Returns explainable flags including observation, personal baseline, deviation, rule, severity, status and evidence ID.

### `motionguard.explain_risk_flag`
Read-only. Returns the evidence chain for one flag. It must distinguish observation from inference.

### `motionguard.submit_human_review`
Write action. Requires authenticated authorised reviewer, one of `accept | amend | escalate | dismiss`, and non-empty rationale. The original AI flag must remain immutable in the audit history.

### `motionguard.get_audit_evidence`
Read-only. Returns timestamped sensor, analysis and human-decision events appropriate to the caller's permissions.

### `motionguard.generate_session_report`
Creates a report from stored evidence. Reports must carry the non-diagnostic limitation and identify whether data is synthetic or real.

## Normalised sensor event

```json
{
  "event_id": "evt_...",
  "session_id": "MG-...",
  "source": {"adapter":"simulator","synthetic":true},
  "captured_at": "ISO-8601",
  "metrics": {
    "forward_flexion_deg": 18,
    "twist_deg": 9,
    "asymmetry_pct": 4,
    "static_posture_minutes": 6,
    "repetition_count": 10
  },
  "consent_context": "demo-synthetic"
}
```

## MCP governance rules

1. Tool descriptions must say this is movement-risk decision support, not medical diagnosis.
2. Read tools should be least-privilege and minimise identifiable information.
3. Human review cannot be fabricated by an AI agent. `submit_human_review` requires an authenticated human-review context in production.
4. The system stores AI recommendation and human disposition as separate events.
5. Real wearable adapters must declare provenance, timestamp quality, calibration state where available, and consent context.
6. MCP clients must not convert a MotionGuard risk flag into a medical diagnosis.
7. High-impact external actions should require explicit human confirmation.

## Future MCP resources

- `motionguard://sessions/{id}`
- `motionguard://baselines/{person_id}/current`
- `motionguard://evidence/{evidence_id}`
- `motionguard://governance/model-card`

This specification is intentionally vendor-neutral so the MVP can remain free/open-source and later connect to compatible MCP hosts and clients.
