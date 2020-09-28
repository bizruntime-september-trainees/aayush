import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-generate',
  templateUrl: './form-generate.component.html',
  styleUrls: ['./form-generate.component.css']
})
export class FormGenerateComponent implements OnInit {
  dynamicFormArray: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/assets/DynamicFormControl.json').subscribe(data => {
      this.dynamicFormArray = data;
      console.log(this.dynamicFormArray);
    });
  }

}
