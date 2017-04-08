

(exports.__esModule = true, exports.default = DivideArray, require('safe-access-check'));
// Recursively divide an array into half until it only has one element
const items = [];

function DivideArray(array) {
  switch (array.length) {
    case 1:
      items.push(array);
      return items;
    default:
      {
        const middle = Math.ceil(safeCoerce(array.length, '/', 2));
        const first = array.splice(middle);
        DivideArray(first);
        DivideArray(array);
        return items;
      }
  }
}
module.exports = exports.default;
