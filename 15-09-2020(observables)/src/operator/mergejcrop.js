"use strict";
exports.__esModule = true;
/**  import { merge, fromEvent, interval } from 'rxjs';

const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x)); */
//importing merge and interval in ts file 
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var timer1 = rxjs_1.interval(2000).pipe(operators_1.take(3));
var timer2 = rxjs_1.interval(3000).pipe(operators_1.take(5));
var timer3 = rxjs_1.interval(500).pipe(operators_1.take(5));
var concurrent = 2; // the argument
var merged = rxjs_1.merge(timer1, timer2, timer3, concurrent);
merged.subscribe(function (x) { return console.log(x); });
