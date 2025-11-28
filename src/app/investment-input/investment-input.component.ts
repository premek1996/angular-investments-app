import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from './investment-input';

@Component({
  selector: 'app-investment-input',
  imports: [FormsModule],
  templateUrl: './investment-input.component.html',
  styleUrl: './investment-input.component.css',
})
export class InvestmentInputComponent {

  initialInvestment = '1000';
  annualInvestment = '100';
  expectedReturn = '5';
  duration = '10';

  @Output() calculateInvestmentResultsEventEmitter = new EventEmitter<InvestmentInput>();

  onCalculateInvestmentResults() {
    const investmentInput: InvestmentInput = {
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,  
      expectedReturn: +this.expectedReturn,
      duration: +this.duration
    };
    this.calculateInvestmentResultsEventEmitter.emit(investmentInput);
  }
  
}
