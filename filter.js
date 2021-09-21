const arr = [1, 2, 3, 4, 5];

const greaterThan2 = (a) => {
    if (a > 2) {
        return a;
    }
}

Array.prototype.myFilter = function (fn) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if(fn(this[i])){
            result.push(this[i]);
        }
    }
    return result;
}

console.log(arr.filter(greaterThan2));
console.log(arr.myFilter(greaterThan2));