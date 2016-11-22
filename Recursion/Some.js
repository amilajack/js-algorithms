// As usual, the zombie rabbits (zombits) are breeding... like rabbits!
// But instead of following the Fibonacci sequence like all good rabbits do,
// the zombit population changes according to this bizarre formula, where R(n) is
// the number of zombits at time n:
//
// R(0) = 1
// R(1) = 1
// R(2) = 2
// R(3), n = 1, R(0) + R(1) + 1
// R(4), n = 2 + R(2)+ R(3  ) + 2
// R(5), n = 2 + R(1) + R(2) + 1
// R(6), n = 3 + R(3) + R(4) + 1
//
// R(2n) = R(n) + R(n + 1) + n (for n > 1)
// R(2n + 1) = R(n - 1) + R(n) + 1 (for n >= 1)
//
// (At time 2, we realized the difficulty of a breeding program with only one
// zombit and so added an additional zombit.)
// Being bored with the day-to-day duties of a henchman, a bunch of Professo
// Boolean's minions passed the time by playing a guessinggame:
// "When will the zombit population be equal to a certain amount?"
// Then, some clever minion objected that this was too easy, and proposed a
// slightly different game: "When is the last time that the zombit population will
// be equal to a certain amount?"
// Write a function answer(str_S) which, given the base-10 string representation of
// an integer S, returns the largest n such that R(n) = S.
// Return the answer as a string in base-10 representation.
// If there is no such n, return "None".
// S will be a positive integer no greater than 10^25.
//
// @flow

function R(n) {
  return (n - 1) / 2
}
