import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { AnnualDataComponent } from "./annual-data/annual-data.component";
import { type UserInput } from './user-input/user-input.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, AnnualDataComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  userInput!: UserInput;

  onCalculateInvestmentResults(userInput: UserInput) {
    this.userInput = userInput;
  }
  
}
