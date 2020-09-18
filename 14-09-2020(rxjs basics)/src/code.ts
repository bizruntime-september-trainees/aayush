//importing observable from rxjs
import { Observable } from 'rxjs';
//creating new observable
//An Observable is just a function that emits values over time from a data source. 
const observable = new Observable(subscriber => {
  //When the observable is created, to execute the observable we need to subscribe to it
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  //unsubscribe
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});
//print this value before subscribe
console.log('just before subscribe');
observable.subscribe({
  //observer with three methods called when there is interaction with observables
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});
console.log('just after subscribe');