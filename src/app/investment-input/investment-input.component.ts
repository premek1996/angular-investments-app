import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultsService } from '../investment-results/investment-results.service';

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

  private investmentResultsService = inject(InvestmentResultsService);

  onCalculateInvestmentResults() {
    this.investmentResultsService.calculateInvestmentResults(
      +this.initialInvestment,
      +this.annualInvestment, 
      +this.expectedReturn,
      +this.duration
    );
  }
  
}
