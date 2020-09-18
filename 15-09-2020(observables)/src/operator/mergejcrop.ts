/**  import { merge, fromEvent, interval } from 'rxjs';

const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x)); */
//importing merge and interval in ts file 
import { merge, interval } from 'rxjs';

import { take } from 'rxjs/operators';

const timer1 = interval(2000).pipe(take(3));
const timer2 = interval(3000).pipe(take(5));
const timer3 = interval(300).pipe(take(5));
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x));
