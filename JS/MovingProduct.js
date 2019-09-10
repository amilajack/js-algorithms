// Design a data structure to calculate the moving product of all elements in a sliding window of size k.
// All methods should work in O(1) time.

export default class MovingProduct {
  constructor(n) {
    this.n = n;
    this.prod = 1;
    this.nums = [];
    this.i = 0;
  }

  add(n) {
    this.nums.push(n);
    if (this.nums.length > this.n) {
      this.prod /= this.nums[this.i];
      this.i++;
    }
    this.prod *= n;
  }

  getProduct() {
    return this.prod;
  }
}

const window = new MovingProduct(3);
window.add(1); // [1]
window.add(2); // [1, 2]
window.getProduct(); // 2
window.add(3); // [1, 2, 3]
window.getProduct(); // 6
window.add(4); // [2, 3, 4]
window.getProduct(); // 24
