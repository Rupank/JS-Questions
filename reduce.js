const arr = [1, 2, 3];

const sum = (a, b) => {
    return a + b;
}

Array.prototype.myReduce = function (fn, initialValue) {
    var acc = initialValue == undefined ? undefined : initialValue;
    for (let i = 0; i < this.length; i++) {
        if (acc != undefined) {
            acc = fn(this[i], acc);
        }
        else {
            acc = this[i];
        }
    }
    return acc;
}
console.log(arr.reduce(sum));
console.log(arr.myReduce(sum));

