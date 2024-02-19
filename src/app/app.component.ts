import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';
import { ShyftApiService } from './shyft-api.service';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { toSignal } from '@angular/core/rxjs-interop';
import { computedAsync } from 'ngxtension/computed-async';
import { MatAnchor } from '@angular/material/button'


@Component({
  standalone: true,
  imports: [ RouterModule, HdWalletMultiButtonComponent, MatAnchor],
  selector: 'dapp1-root',
  template: `
    <header class="py-8">
      <h1 class="text-2xl text-center mb-4"> Hola Soy Xinitono.</h1>

      <div class="flex justify-center">
      <hd-wallet-multi-button></hd-wallet-multi-button>
      </div>

      @if (account()){
      <div class="flex justify-center items-center py-4">
        <img [src]="account()?.info?.image" class="w-8 h-8"/>
        <p class="text-xl">{{ account()?.balance}}</p>
      </div>      
      }

      <nav>
        <ul class="flex justify-center items-center gap-4 py-4">
          <li>
            <a [routerLink]="['']" mat-raised-button>Home</a>
          </li>
          <li>
            <a [routerLink]="['settings']" mat-raised-button>Settings</a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);
  readonly account = computedAsync(
    () => this._shyftApiService.getAccount(this. _publicKey()?.toBase58()),
    { requireSync: true },
  );
}
