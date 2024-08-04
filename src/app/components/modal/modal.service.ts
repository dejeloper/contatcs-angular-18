import { ComponentType } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from '@features/contacts/contacts.interface';

@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor() {}

  private readonly _dialog = inject(MatDialog);

  openModal<CT, T = Contact>(
    componentRef: ComponentType<CT>,
    data?: T,
    isEditing = false
  ): void {
    const config = { data, isEditing };
    this._dialog.open(componentRef, {
      data: config,
      width: '600px',
    });
  }

  closeModal(): void {
    this._dialog.closeAll();
  }
}
