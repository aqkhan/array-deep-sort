# Object Deep Compare
A simple JS array sort with capability to sort array of objects by object key values. 

# Install
npm install [--save] [-S] @alphasquad/array-deep-sort

// OR

yarn add @alphasquad/array-deep-sort

# Usage
const deepSort = require('@alphasquad/array-deep-sort')

// OR

import deepSort from '@alphasquad/array-deep-sort'

const arr = [...];

const sortedArr = deepSort(arr, 'ASC', 'someKey');

# Example
Sort an array of objects.
```
const arr = [
    {
        key1: 1,
        key2: {
            key21: 'A', 
            key22: {
                key221: 'A'
            }
        }
    },
    {
        key1: 3,
        key2: {
            key21: 'C', 
            key22: {
                key221: 'C'
            }
        }
    },
    {
        key1: 2,
        key2: {
            key21: 'B', 
            key22: {
                key221: 'B'
            }
        }
    }
];

console.log(deepSort(arr, 'ASC', 'key1'));
console.log(deepSort(arr, 'ASC', 'key2.key21'));
console.log(deepSort(arr, 'ASC', 'key2.key22.key221'));

// [
//     {
//         key1: 1,
//         key2: {
//             key21: 'A', 
//             key22: {
//                 key221: 'A'
//             }
//         }
//     },
//     {
//         key1: 2,
//         key2: {
//             key21: 'B', 
//             key22: {
//                 key221: 'B'
//             }
//         }
//     },
//     {
//         key1: 3,
//         key2: {
//             key21: 'C', 
//             key22: {
//                 key221: 'C'
//             }
//         }
//     }
// ];

```