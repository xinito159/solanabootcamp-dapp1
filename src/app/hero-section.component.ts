import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'dapp1-hero-section',
    template: `
    <section class="px-24 py-32 bg-white bg-opacity-5">
        <p class="text-center text-2xl">Este es el Hero</p>
    </section>
    ` 
})
export class HeroSectionComponent {}