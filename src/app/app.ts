import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { InvestmentInputComponent } from "./investment-input/investment-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, InvestmentInputComponent, InvestmentResultsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
