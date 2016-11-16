/**
 * In functional programming a way of representing immutable lists are like so:
 *
 * ex. A list of objects with values and pointers to other values
 *
 * vowels -> ['a', pointer] -> ['b', pointer] -> ['c', pointer]
 *            ^ head  ^ tail                     ^^^^^^^^^^^^^^ cell
 *
 * Isn't this slow? Yes. So why do we do this? It makes insertion really fast
 * If you want to insert an elemnt in a given position. So we can give the
 * illusion of mutability while we're actually creating new lists and creating
 * new pointers to objects.
 *
 * All you have to do is change the pointers intead of
 *
 * @flow
 */
