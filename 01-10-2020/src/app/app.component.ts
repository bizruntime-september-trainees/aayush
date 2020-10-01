import { Component } from '@angular/core';
import {FormGroup , FormBuilder} from '@angular/forms'


export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();


  }

  createContactForm() {

    this.contactForm = this.formBuilder.group({
      fullName: [''],
      email: [''],
      message: ['']
    });
  }

  onsubmit() {
    console.log('your form data : ', this.contactForm.value)

  }
   editor: EditorType = 'name';

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}


