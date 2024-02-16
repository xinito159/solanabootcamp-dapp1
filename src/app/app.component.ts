import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [ RouterModule],
  selector: 'dapp1-root',
  template: `
    <header>
      <h1> Hola Soy Xinitono.</h1>
    </header>
  `
})
export class AppComponent {
}
