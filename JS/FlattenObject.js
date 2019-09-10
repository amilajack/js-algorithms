// Flatten an object
//
// Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it .
//
// If a certain key is empty, it should be excluded from the output (see e in the example below).

// input:  dict = {
//   "Key1" : "1",
//   "Key2" : {
//       "a" : "2",
//       "b" : "3",
//       "c" : {
//           "d" : "3",
//           "e" : {
//               "" : "1"
//           }
//       }
//   }
// }

// output: {
//   "Key1" : "1",
//   "Key2.a" : "2",
//   "Key2.b" : "3",
//   "Key2.c.d" : "3",
//   "Key2.c.e" : "1"
// }

const flattenDictionaryAux = (obj, parent, isRoot) => {
  if (typeof obj !== 'object') {
    return { [parent]: obj };
  }
  let res = {};
  Object.keys(obj).forEach(key => {
    const val = obj[key];
    let newParent = isRoot ? key : [parent, key].join('.');
    if (key === '') {
      newParent = parent;
    }
    res = {
      ...res,
      ...flattenDictionaryAux(val, newParent, key === '')
    };
  });
  return res;
};

export default function flattenDictionary(dict) {
  return flattenDictionaryAux(dict, '', true);
}
