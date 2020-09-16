import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includenumbers = false;
  includesymbols = false;

  password = '';
  onChangeLength(value: string) {
    const parsedValue = parseInt(value)

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }

  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includenumbers = !this.includenumbers;
  }
  onChangeUseSymbols() {
    this.includesymbols = !this.includesymbols;
  }

  onButtonClick() {
    // console.log(`about to generate password with following: includes letters:${this.includeLetters}
    //includes numbers: ${this.includenumbers}
    //includes symbols: ${this.includesymbols}`)
    //this.password = 'my password-xxxxx';
    const numbers = 123456789;
    const letters = 'abcdefghijklmnopxyz';
    const symbols = '!@#$%^&*(_+';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;

    }
    if (this.includenumbers) {
      validChars += numbers;

    }
    if (this.includesymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++){
    const index = Math.floor(Math.random() * validChars.length);
    generatedPassword += validChars[index];
  }
  this.password = generatedPassword;
}
}

