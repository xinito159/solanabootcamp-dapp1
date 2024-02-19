import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'dapp1-features-section',
    template: `
    <section class="p-16">
        <ul class="flex justify-center utens-center gap-4">
            <li>Heavy</li>
            <li>Duty</li>
            <li>Bootcamp</li>
        </ul>
    </section>
    ` 
})
export class FeaturesSectionComponent {}