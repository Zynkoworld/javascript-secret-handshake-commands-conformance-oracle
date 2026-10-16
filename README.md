# zynko-oracle · `javascript-secret-handshake-commands-conformance-oracle`

**A deterministic, re-checkable conformance oracle for `secret-handshake` (javascript).**

## Proven
Measured on the canonical Exercism corpus — **11 input/output pairs, 9 distinct outputs** — produced by *running* the reference in a sealed sandbox, not asserted.

## Scope (declared)
The corpus is the canonical Exercism test data for `secret-handshake`. Inputs outside that set are **not covered**; this oracle decides agreement on the published corpus only and makes no claim of general correctness.

## Provenance
Reference: the Exercism reference solution for `secret-handshake` (javascript; MIT, Exercism), body unchanged. Proven by the exercism testsuite (pin=de5eb1720f113b14), re-executed by harvest in a sealed sandbox (unshare -rn) before this bundle was generated.

## License
Apache-2.0 for the scaffolding; the reference body retains its upstream MIT (Exercism) license.
