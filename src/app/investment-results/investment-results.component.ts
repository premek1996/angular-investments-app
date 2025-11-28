import { Component, Input } from '@angular/core';
import { inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentResultsService } from './investment-results.service';
import type { InvestmentResult } from './investment-results.model';
import type { InvestmentInput } from '../investment-input/investment-input';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {

  private investmentResultsService = inject(InvestmentResultsService);

  @Input({required: true}) investmentInput!: InvestmentInput;

  get investmentResults(): InvestmentResult[] {
    return this.investmentResultsService.calculateInvestmentResults(
      this.investmentInput.initialInvestment,
      this.investmentInput.annualInvestment,
      this.investmentInput.expectedReturn,
      this.investmentInput.duration
    );
  }

}
