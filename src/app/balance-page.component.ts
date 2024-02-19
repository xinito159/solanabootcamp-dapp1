import { Component } from '@angular/core';
import { TransactionsSectionComponent } from './transactions-section.component';
import { BalanceSectionComponent } from './balance-section.component';

@Component({
    standalone: true,
    selector: 'dapp1-balance-page',
    imports:[BalanceSectionComponent,TransactionsSectionComponent],
    template: `
    <div class="flex justify-center gap-4">
        <dapp1-balance-section></dapp1-balance-section>
        <dapp1-transactions-section></dapp1-transactions-section>
    </div>
    `

})
export class BalancePageComponent {
}