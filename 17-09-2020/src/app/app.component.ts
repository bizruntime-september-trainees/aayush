export{}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Greeny tree',
      imageurl: '../assets/tree.jpeg',
      username: 'nature',
      content:'I saw this tree this morning'
    },
    {
      title: 'Snow on mountain',
      imageurl: '../assets/mountain.jpeg',
      username: 'mountain pic',
      content: 'mountain with snow'
    },
    {
      title: 'Biker',
      imageurl: '../assets/biking.jpeg',
      username: 'asrajput2468',
      content: 'i took a bike today'
    },
    {
      title: 'Biker',
      imageurl: '../assets/biking.jpeg',
      username: 'asrajput2468',
      content: 'i took a bike today'
    },


  ];
}
