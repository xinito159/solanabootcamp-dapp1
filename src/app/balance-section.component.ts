import { Component, inject } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { injectPublicKey } from '@heavy-duty/wallet-adapter';
import { computedAsync } from 'ngxtension/computed-async';
import { ShyftApiService } from './shyft-api.service';
import { MatDialog } from '@angular/material/dialog';
import { TransferModalComponent } from './transfer-modal.component';
import { MatButton } from '@angular/material/button';

@Component({
    standalone: true,
    selector: 'dapp1-balance-section',
    imports: [MatTableModule, MatCard, MatButton],
    template: `
    <mat-card class="w-[600px] px-4 py-8">
      <h2 class="text-center text-3xl mb-4">Tus Tokens</h2>

      @if (!account()) {
        <p class="text-center">Conecta tu wallet para ver tus tokens.</p>
      } @else {
        <div class="flex justify-center items-center gap-2 mb-4">
          <img [src]="account()?.info?.image" class="w-12 h-12" />
          <p class="text-3xl font-bold">{{ account()?.balance }}</p>
        </div>
        <footer class="flex justify-center">
          <button mat-raised-button color="primary" (click)="onTransfer()">Transferir Tokens</button>
      </footer>
      }
    </mat-card>
  `,
})
export class BalanceSectionComponent {
  private readonly _matDialog = inject(MatDialog);
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _publicKey = injectPublicKey();

  readonly account = computedAsync(() =>
    this._shyftApiService.getAccount(this._publicKey()?.toBase58()),
  );

  onTransfer() {
    this._matDialog.open(TransferModalComponent)
  }
}