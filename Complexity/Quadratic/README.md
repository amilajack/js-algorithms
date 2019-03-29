Question 1

A quadratic algorithm with processing time T(n) = cn2 uses 500 elementary operations for processing 10 data items. How many will it use for processing 1000 data items?

T(10) = c · 10^2 = 500, that is

c = 500/100 = 5

T(1000) = 5 · 10002 = 5 · 10^6

that is, 5 million operations to process 1000 data items.

In fact, we need not compute c, because T(1000)

T(10) = c · 10^6

c · 10^2 = 10^4, so

that T(1000) = 10^4 · T(10) = 10^4 · 500, or 5 million.

source: M.J.Dinneen, G. Gimel’farb, M. C. Wilson: Introduction to Algorithms and Data Structures. 4th ed. (e-book), 2016, p.18/210.
