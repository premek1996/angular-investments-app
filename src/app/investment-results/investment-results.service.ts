import { Injectable } from '@angular/core';
import type { InvestmentResult } from './investment-results.model';

@Injectable({ providedIn: 'root' })
export class InvestmentResultsService{

    calculateInvestmentResults(initialInvestment:number, annualInvestment: number, expectedReturn: number, duration: number): InvestmentResult[] {
        const investmentResults: InvestmentResult[] = [];
        let investmentValue = initialInvestment;

        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;

            const investmentResult: InvestmentResult = {
                year: year,
                interest: interestEarnedInYear, 
                valueEndOfYear: investmentValue,
                annualInvestment: annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: initialInvestment + annualInvestment * year,
            };

            investmentResults.push(investmentResult);
        }
        return investmentResults;
    }

}