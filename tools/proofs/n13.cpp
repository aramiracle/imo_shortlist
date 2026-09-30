// tools/proofs/n13.cpp — machine verification for the shipped n13 claim.
//
// n13: for an odd prime p, let N(a) be the number of ordered pairs (x,y) of
// residues in [0,p) with x^2 + a*x*y + y^2 = 1 (mod p).
// Claim (answer field): sum_{a=0}^{p-1} N(a) = (p+1)^2.
//
// Method: exhaustive enumeration over all odd primes p <= 23 and all triples
// (a,x,y) — no sampling, fully deterministic. Overflow analysis: with
// a,x,y < p the term a*x*y < p^3, so uint64_t is safe for every p < 1.6e6,
// orders of magnitude beyond the checked range. Exit 0 only if every case
// matches the claimed closed form; printed values include the known anchors
// p=3 -> 16, p=5 -> 36.
//
// Build: g++ -std=c++17 -O2 -Wall -Wextra -Werror tools/proofs/n13.cpp -o tools/proofs/build/n13
// Run:   tools/proofs/build/n13        (exit 0 = PASS, 1 = FAIL)
//
// Replaces tools/proofs/n13.py (same check) when harnesses moved to C++ per
// METHODOLOGY.md flow step 3; supersedes the W1-era sigma=phi+tau check kept
// in tools/proofs/ before the 2026-09-30 archive prune (see CHANGELOG.example.md).

#include <cstdint>
#include <cstdlib>
#include <iostream>

namespace {

bool is_prime(std::uint64_t n) {
    if (n < 2) return false;
    if (n % 2 == 0) return n == 2;
    for (std::uint64_t d = 3; d * d <= n; d += 2) {
        if (n % d == 0) return false;
    }
    return true;
}

// N(a) = #{(x,y) in [0,p)^2 : x^2 + a*x*y + y^2 = 1 (mod p)}
std::uint64_t count_pairs(std::uint64_t p, std::uint64_t a) {
    std::uint64_t count = 0;
    for (std::uint64_t x = 0; x < p; ++x) {
        for (std::uint64_t y = 0; y < p; ++y) {
            const std::uint64_t v = x * x + a * x * y + y * y;
            if (v % p == 1 % p) ++count;
        }
    }
    return count;
}

}  // namespace

int main() {
    bool pass = true;
    for (std::uint64_t p = 3; p <= 23; p += 2) {
        if (!is_prime(p)) continue;
        std::uint64_t total = 0;
        for (std::uint64_t a = 0; a < p; ++a) {
            total += count_pairs(p, a);
        }
        const std::uint64_t want = (p + 1) * (p + 1);
        const bool ok = (total == want);
        pass = pass && ok;
        std::cout << "p=" << p << "  sum_a N(a)=" << total
                  << "  (p+1)^2=" << want << "  " << (ok ? "OK" : "MISMATCH")
                  << '\n';
    }
    std::cout << (pass ? "PASS (all odd primes <= 23)" : "FAIL") << '\n';
    return pass ? EXIT_SUCCESS : EXIT_FAILURE;
}
