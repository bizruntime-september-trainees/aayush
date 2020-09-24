import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  new = [
    {id:1 ,name: 'new title', description: "this is new description to be added 1"},
    {id:1 ,name: 'new title', description: "this is new description to be added 1"},
    {id:1 ,name: 'new title', description: "this is new description to be added 1"},
    {id:1 ,name: 'new title', description: "this is new description to be added 1"},
    {id:1 ,name: 'new title', description: "this is new description to be added 1"},
  ]

  constructor() { }

  getnew() {
    return this.new;
  }
}
