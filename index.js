const arr = [1,2,3];

Array.prototype.myBind = function(){
    console.log("Hello World");
}

arr.myBind();

function max(a,b){
    return (a>b) ? a:b;
}

function sum(a,b){
    return a+b;
}

console.log(arr.reduce(sum,2));