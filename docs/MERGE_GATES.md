# Merge Gates

A vertical slice merges only when:
- core IDs/contracts are preserved;
- permission boundaries pass;
- critical transitions emit audit + domain events;
- offline/retry paths are idempotent where applicable;
- no negative stock or invalid quantities are possible;
- critical approvals remain human-authoritative;
- navigation/regression tests pass;
- media references use storage keys/signed delivery, not public permanent URLs.
