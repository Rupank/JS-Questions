let data = [
    {
        id: 1,
        name: 'Asim Mitra',
        reportees: [2, 3, 4]
    },
    {
        id: 2,
        name: 'Gaurav Singh',
        reportees: [5, 6, 7]
    },
    {
        id: 3,
        name: 'Murali',
        reportees: [8, 9]
    },
    {
        id: 4,
        name: 'Sarma Sir',
        reportees: []
    },
    {
        id: 5,
        name: 'Bhupesh',
        reportees: []
    },
    {
        id: 6,
        name: 'Lalit',
        reportees: []
    }, {
        id: 7,
        name: 'Vaidy',
        reportees: []
    }
];


const idMapping = {};
data.forEach(item => {
    if (item.reportees != null && item.reportees.length > 0) {
        item.reportees.forEach(reportee => {
            idMapping[reportee] = item.id;
        })
    }
})


data = data.map(item => {
    let newItem = {
        ...item, ...{ parent_id: null }
    };
    if (idMapping[newItem.id]) {
        newItem['parent_id'] = idMapping[newItem.id];
    };
    return newItem;
})


const makeTree = (items, id = null, link = 'parent_id') => items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: makeTree(items, item.id) }))
const tree = makeTree(data);
// console.log(tree[0]);

printHeirarchy = (obj, nameStr = '') => {
    if (obj.children.length > 0) {
        nameStr += `${obj.name}(${obj.children.map(child => printHeirarchy(child, nameStr))})`;
    } else {
        nameStr += obj.name;
    }
    return nameStr;
}


console.log(printHeirarchy(tree[0]));


// let childArr = [];

// const idMapping = {};
// data.forEach(item => {
//     if (item.reportees.length > 0) {
//         item.reportees.forEach(element => {
//             idMapping[element] = item.id;
//         });
//     }
// })

// const finalData = data.map(item => {
//     let newItem = { ...item, ...{ parentId: null } };
//     if (idMapping[item.id]) {
//         newItem['parentId'] = idMapping[item.id];
//     }
//     return newItem;
// })
// // console.log(finalData);

// const nest = (items, id = null, link = 'parentId') =>
//     items
//         .filter(item => item[link] === id)
//         .map(item => ({ ...item, children: nest(items, item.id) }));

// const tree = nest(finalData);

// const print = (obj) => {
//     if (obj.children != null && obj.children.length > 0) {
//         console.log(`${obj.name} - ${obj.children.map(item => item.name)}`)
//         obj.children.forEach(item => print(item));
//     } else {
//         console.log(obj.name);
//     }
// }

//  console.log(JSON.stringify(tree, null, 4));
// //print(tree[0]);



