import { Component, inject } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { injectPublicKey } from '@heavy-duty/wallet-adapter';
import { computedAsync } from 'ngxtension/computed-async';
import { ShyftApiService } from './shyft-api.service';

@Component({
    standalone: true,
    selector: 'dapp1-balance-section',
    imports: [MatTableModule, MatCard],
    template: `
    <mat-card class="w-[600px] px-4 py-8">
      <h2 class="text-center text-3xl mb-4">Tus Tokens</h2>

      @if (!account()) {
        <p class="text-center">Conecta tu wallet para ver tus tokens.</p>
      } @else {
        <div class="flex justify-center items-center gap-2">
          <img [src]="account()?.info?.image" class="w-12 h-12" />
          <p class="text-3xl font-bold">{{ account()?.balance }}</p>
        </div>
      }
    </mat-card>
  `,
})
export class BalanceSectionComponent {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _publicKey = injectPublicKey();

  readonly account = computedAsync(() =>
    this._shyftApiService.getAccount(this._publicKey()?.toBase58()),
  );
}