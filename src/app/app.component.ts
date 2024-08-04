import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '@components/toolbar/toolbar.component';
import { MatCardModule } from '@angular/material/card';
import { ModalService } from '@components/modal/modal.service';
import { ModalComponent } from '@components/modal/modal.component';
import { Contact } from '@features/contacts/contacts.interface';

const MATERIAL_MODULES = [MatCardModule];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToolbarComponent, MATERIAL_MODULES],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Demo Angular';

  private readonly _modalSvc = inject(ModalService);

  onClickNewContact(): void {
    this._modalSvc.openModal<ModalComponent>(ModalComponent);
  }
}
