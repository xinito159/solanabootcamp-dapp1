import { Component } from '@angular/core';
import { TransferFormComponent, TransferFormPayload} from './transfer-form.component'
import { injectTransactionSender } from '@heavy-duty/wallet-adapter';
import { createTransferInstructions } from '@heavy-duty/spl-utils'


@Component({
    selector: 'dapp1-transfer-modal',
    standalone: true,
    template: `
    <div class="px-8 pt-16 pb-8">
        <h2 class="text-3xl text-center mb-4">Transferir Fondos</h2>

        <dapp1-transfer-form (submitForm)="onTransfer($event)"></dapp1-transfer-form>
    </div>
    `,
    imports: [TransferFormComponent]

})

export class TransferModalComponent{
    private readonly _transactionSender = injectTransactionSender();

    onTransfer(payload: TransferFormPayload) {
        console.log('Enviando transferencia', payload);
        
        this._transactionSender.send(({publicKey}) => createTransferInstructions({
            amount: payload.amount,
            mintAddress: '7EYnhQoR9YM3N7UoaKRoA44Uy8JeaZV3qyouov87awMs',
            receiverAddress: payload.receiverAddress,
            senderAddress: publicKey.toBase58(),
            fundReceiver: true,
            memo: payload.memo

        })) .subscribe({
                next: (signature) => console.log(`Firma: ${signature}`),
                error: error => console.error(error),
                complete: () => console.log('Transacción lista.')
            })
    }
}
