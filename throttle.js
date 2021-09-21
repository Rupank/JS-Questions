const throttle = (fn, delay) => {
    let last = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - last < delay) {
            return;
        }
        last = now;
        return fn(...args);
    }
}

const throttleUsingTimeout = function (fn, delay) {
    let flag = true;
    return function (...args) {
        if (flag) {
            flag = false;
            fn(...args);
            setTimeout(() => {
                flag = true;
            }, delay)
        }
    }
}

const thottleUsingTimeout = (fn, delay) => {
    let flag = true;
    return (...args) => {
        if (flag) {
            flag = false;
            fn(...args);
            setTimeout(() => {
                flag = true;
            }, delay)
        }
    }
}

const throttle2 = function (fn, delay) {
    let last = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - last < delay) { return; }
        last = now;
        return fn(...args);
    }
}

const throttle1UsingTimeOut = function (fn, delay) {
    let flag = true;
    return function (...args) {
        if (flag) {
            fn(...args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay)
        }
    }
}

const throttle1UsingDate = function (fn, delay) {
    let last;
    return function (...args) {
        let now = new Date().getTime();
        if (now - last < delay) { return; }
        last = now;
        fn(...args);
    }
}