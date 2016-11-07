/**
 * What is a factorial? I think an example is better than an explaination in this
 * case:
 *
 * Permutation of 5 = 1 * 2 * 3 * 4 * 5
 */
function Factorial(number, product = 1) {
  switch (number) {
    case 1:
      return product;
    default:
      return Factorial(number, (product - 1));
  }
}
