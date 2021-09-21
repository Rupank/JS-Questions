// return new Promise((resolve, reject) => {
//     return resolve('new Message');
// }).then(data => {

//     console.log(data);
//     return 'another message';
// }).then(data => console.log(data));

// function MyPromise(initFunction) {
//     var nextSuccessCallback, nextResolve;
//     initFunction(function (message) { // resolve handler
//         setTimeout(() => {
//             if (nextSuccessCallback) {
//                 var result = nextSuccessCallback(message);
//                 if(result && result.then){
//                     result.then(nextResolve);
//                 }else{
//                     nextResolve && nextResolve(result);
//                 }
//             }
//         }, 0);
//     });

//     return {
//         then: function (successCallBack) {
//             nextSuccessCallback = successCallBack;
//             return new MyPromise(function (resolve) {
//                 nextResolve = resolve;
//             });
//         }
//     }
// }

function MyPromise(initMethod) {
    var nextResolve, nextSuccessCallback;
    initMethod(function (message) {
        setTimeout(() => {
            if (nextSuccessCallback) {
                var result = nextSuccessCallback(message);
                if (result && result.then) {
                    result.then(nextResolve)
                } else {
                    nextResolve && nextResolve(result);
                }
            }
        }, 0);
    });
    return {
        then: function (callBack) {
            nextSuccessCallback = callBack;
            return new MyPromise(function (resolve) {
                nextResolve = resolve;
            })
        }
    }
}

return new MyPromise((resolve, reject) => {
    return resolve('new Message');
}).then(data => {

    console.log(data);
    return new Promise(resolve => resolve('another function'));
}).then(data => console.log(data));