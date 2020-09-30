import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-generate',
  templateUrl: './form-generate.component.html',
  styleUrls: ['./form-generate.component.css']
})
export class FormGenerateComponent implements OnInit {

  registrationForm: FormGroup;
  dynamicFormArray: any;

  constructor(private httpClient: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {

    this.registrationForm = this.fb.group({

    });
    //we are creating blank formgroup
    //controls are bind dynamically by api responsw
    //so we are creating method for form binding method


    this.httpClient.get('/assets/DynamicFormControl.json').subscribe(data => {
      this.dynamicFormArray = data;
     //we call dynamic form here
      this.createFormControl();
    });
  }

  createFormControl() {
    //in this method we create form control based on dynamic form array
    this.dynamicFormArray.forEach(element => {
      this.registrationForm.addControl(element.ID, new FormControl(''));

      //here we are using id
      console.log(this.registrationForm);

    });

  }

}
