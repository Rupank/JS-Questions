const data = [
    [1,2,3],
    4,
    [5,[6,7,[8],9]],
    10
]


 Array.prototype.flat1 = function(){
    let flattened = [];
    for(let i=0;i<this.length;i++){
        if(Array.isArray(this[i])){
            flattened = flattened.concat(this[i].flat1());
        }else{
            flattened.push(this[i]);
        }
    }
    return flattened;
}
console.log(data.flat1());