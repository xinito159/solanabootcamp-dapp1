import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';
import { ShyftApiService } from './shyft-api.service';
import { ConnectionStore, injectPublicKey,WalletStore } from '@heavy-duty/wallet-adapter';
import { computedAsync } from 'ngxtension/computed-async';
import { MatDialog } from '@angular/material/dialog';



@Component({
  standalone: true,
  imports: [ RouterModule, HdWalletMultiButtonComponent],
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
export class AppComponent implements OnInit {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _publicKey = injectPublicKey();
  private readonly _matDialog = inject(MatDialog);
  private readonly _connectionStore = inject(ConnectionStore);
  readonly account = computedAsync(
    () => this._shyftApiService.getAccount(this. _publicKey()?.toBase58()),
    { requireSync: true },
  );

  ngOnInit() {
    this._connectionStore.setEndpoint(this._shyftApiService.getEndpoint());
  }
}
