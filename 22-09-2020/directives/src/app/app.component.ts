import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentpage = 3;

  image = [
    {
      title: 'at a beache',
      url:
        'https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    },
    {
      title: 'at candolim beache',
      url:
        'https://images.unsplash.com/photo-1590602391331-45262cb1cb87?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'at panjim ',
      url:
        'https://images.unsplash.com/photo-1590602391165-edb096edb9de?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'at Pondy',
      url:
        'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'at a beache',
      url:
        'https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    },
    {
      title: 'at candolim beache',
      url:
        'https://images.unsplash.com/photo-1590602391331-45262cb1cb87?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'at panjim ',
      url:
        'https://images.unsplash.com/photo-1590602391165-edb096edb9de?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'at Pondy',
      url:
        'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'at a beache',
      url:
        'https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    },
    {
      title: 'at candolim beache',
      url:
        'https://images.unsplash.com/photo-1590602391331-45262cb1cb87?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'at panjim ',
      url:
        'https://images.unsplash.com/photo-1590602391165-edb096edb9de?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'at Pondy',
      url:
        'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'at a beache',
      url:
        'https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    },
    {
      title: 'at candolim beache',
      url:
        'https://images.unsplash.com/photo-1590602391331-45262cb1cb87?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'at panjim ',
      url:
        'https://images.unsplash.com/photo-1590602391165-edb096edb9de?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'at Pondy',
      url:
        'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    }
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentpage - index) < 5;
  }
}
