import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInput } from './user-input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {

  initialInvestment: number = 1000;
  annualInvestment: number = 100;
  expectedReturn: number = 5
  duration: number = 10;

  @Output() calculateInvestmentResultsEventEmitter = new EventEmitter<UserInput>();

  onCalculateInvestmentResults() {
    const userInput: UserInput = {
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,  
      expectedReturn: this.expectedReturn,
      duration: this.duration
    };
    this.calculateInvestmentResultsEventEmitter.emit(userInput);
  }
  
}
