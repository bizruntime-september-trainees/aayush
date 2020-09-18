"use strict";
exports.__esModule = true;
var Rx_1 = require("rxjs/Rx");
var foo = new Rx_1.Observable(function (subscriber) {
    console.log('Hello');
    subscriber.next(42);
    subscriber.next(100);
    subscriber.next(200);
    setTimeout(function () {
        subscriber.next(300); // happens asynchronously
    }, 1000);
});
console.log('before');
foo.subscribe(function (x) {
    console.log(x);
});
console.log('after');
