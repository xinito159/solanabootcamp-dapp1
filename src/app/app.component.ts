import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';
import { ShyftApiService } from './shyft-api.service';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { toSignal } from '@angular/core/rxjs-interop';
import { computedAsync } from 'ngxtension/computed-async';
import { MatAnchor } from '@angular/material/button'
import { MatDialog } from '@angular/material/dialog';



@Component({
  standalone: true,
  imports: [ RouterModule, HdWalletMultiButtonComponent, MatAnchor],
  selector: 'dapp1-root',
  template: `
    <header class="py-8">
      <h1 class="text-2xl text-center mb-4"> Bienvenido Xinitono.</h1>
      <div class="flex justify-center">
      <hd-wallet-multi-button></hd-wallet-multi-button>
      </div>
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
  private readonly _matDialog = inject(MatDialog);
  readonly account = computedAsync(
    () => this._shyftApiService.getAccount(this. _publicKey()?.toBase58()),
    { requireSync: true },
  );
}
