const arr = [1,2,3,4];
const multiply = (a,b) => {
    return a*2;
}

Array.prototype.map2 = function (fn)  {
    let arr1 = [];
    for(let i=0;i<this.length; i++){
        arr1.push(fn(this[i],i,this));
    }
    return arr1;
}


console.log(arr.map(multiply));
console.log(arr.map2(multiply));

