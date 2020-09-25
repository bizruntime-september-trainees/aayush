import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = [];
  cardsForHandset = [];
  cardForWeb = [];
  isHandset: boolean = false;
  isHandsetObserver: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return true;
      }

      return false;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
   public appService: AppService) { }

  ngOnInit() {
    this.isHandsetObserver.subscribe(currentObserverValue => {
      this.isHandset = currentObserverValue;
      this.loadcards();
    })
    this.appService.getDeals().subscribe(
      response => {
        this.cardsForHandset = response.handsetCards;
        this.cardForWeb = response.webCard;
        this.loadcards();
      },
      error => {

      }

    );
  }
  loadcards() {
    this.cards = this.isHandset ? this.cardsForHandset : this.cards
  }
}
