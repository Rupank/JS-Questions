function outer(b){
    function inner(){
        console.log(a+b);
    }
    let a = 10;

    return inner;
}
var a =100;
outer(2)();


