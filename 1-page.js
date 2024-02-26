const lekan= require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = lekan.flattenDeep(items);

console.log(newItems)