const debounce = (fn, delay) => {
    let timeoutId;
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay)
    }
}


const debounce2 = function (fn, delay) {
    let timoutid;
    return function (...args) {
        if (timoutid) {
            clearTimeout(timoutid);
        }
        timoutid = setTimeout(() => {
            fn(...args);
        }, delay)
    }
}

const debounce3 = function(fn,delay){
    let timeoutid;
    return function(...args){
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutid = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}
