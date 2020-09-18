import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name;
  date;


  onnamechange(value: String) {
    this.name = value;
  }

  ondatechange(value: String) {
    this.date = value;
    
  }
}
