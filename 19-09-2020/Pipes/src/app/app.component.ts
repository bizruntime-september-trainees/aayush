import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name;
  date;
  currency;
  height;
  miles;
  
  onmileschange(value) {
    this.miles = parseFloat(value);
  }

  onnamechange(value: String) {
    this.name = value;
  }

  ondatechange(value: String) {
    this.date = value;
    
  }
  oncurrencychange(value: string) {
    this.currency = value;
  }
  onheightchange(value:string)
  {
    this.height= value;
  }
}
