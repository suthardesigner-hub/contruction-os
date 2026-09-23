# ConstructOS Architecture

Source of truth for parallel development.

## Core rules
- One Person ID and Business ID; roles are relationships, not duplicate users.
- Project → Location → BOQ/Cost Code → Activity → Evidence → Verification → Measurement → Certification → Payment.
- Critical state changes emit immutable audit/domain events.
- Large media uses object storage keys, never relational blobs.
- Financial, design, safety and legal authority remains human-approved.
- Magic links are action-scoped, expiring/revocable and permission-limited.
- No public punitive ratings.

## Parallel lanes
core, field, procurement, commercial, quality-client, automation-ai; integration/qa is the merge gate.
