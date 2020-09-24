import { Component, OnInit } from '@angular/core';
import { NewserviceService } from '../newservice.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  new: {};

  constructor(newservice: NewserviceService) {
    this.new = newservice.getnew();
  }

  ngOnInit(): void {
  }

}
