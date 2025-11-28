import { Component, Input } from '@angular/core';
import { inject } from '@angular/core';
import { AnnualDataService } from './annual-data.service';
import { CommonModule } from '@angular/common';
import { type AnnualData } from './annual-data.model';

@Component({
  selector: 'app-annual-data',
  imports: [CommonModule],
  templateUrl: './annual-data.component.html',
  styleUrl: './annual-data.component.css',
})
export class AnnualDataComponent {

  private annualDataService = inject(AnnualDataService);

  @Input({ required: true }) initialInvestment!: number;
  @Input({ required: true }) annualInvestment!: number;
  @Input({ required: true }) expectedReturn!: number;
  @Input({ required: true }) duration!: number;   

  get annualData(): AnnualData[] {
    return this.annualDataService.calculateInvestmentResults(
      this.initialInvestment,
      this.annualInvestment,
      this.expectedReturn,
      this.duration
    );
  }

}
