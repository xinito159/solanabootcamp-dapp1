import { Component, OnInit } from '@angular/core';
import { TransferFormComponent, TransferFormPayload} from './transfer-form.component'

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
    onTransfer(payload: TransferFormPayload) {
        console.log('Hola transferito', payload)
    }
}
