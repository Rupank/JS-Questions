let sum = a => b => b ? sum(a + b) : a;
let multiply = a => b => b ? multiply(a * b) : a;

let add = sum(1)(2)(3)(4)();
let mul = multiply(1)(2)(3)(4)();


function multiply2(a) {
    return function (b) {
        if (b) {
            return multiply2(a * b);
        } else {
            return a;
        }
    }
}
let mul2 = multiply2(1)(2)(3)(4)();

console.log(mul2);