import { Component } from '@angular/core';
import { FeaturesSectionComponent } from './features-section.component';
import { HeroSectionComponent } from './hero-section.component';

@Component({
    standalone: true,
    selector: 'dapp1-home-page',
    imports:[HeroSectionComponent,FeaturesSectionComponent],
    template: `
        <dapp1-hero-section></dapp1-hero-section>
        <dapp1-features-section></dapp1-features-section>
    `

})
export class HomePageComponent {
}