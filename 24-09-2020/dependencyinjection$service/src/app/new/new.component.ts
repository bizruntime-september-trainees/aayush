import { Component, OnInit } from '@angular/core';
import { NewserviceService} from '../newservice.service'
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  new: {};

  constructor(newservice: NewserviceService) {
    this.new = newservice.getnew();
  }

  ngOnInit(): void {
  }

}
