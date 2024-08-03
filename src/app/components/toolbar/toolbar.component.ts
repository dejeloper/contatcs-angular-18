import { Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIAL_MODULES = [MatToolbarModule, MatIconModule, MatButtonModule];

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './toolbar.component.html',
  styles: ``,
})
export class ToolbarComponent {
  onNewContactEvent = output<void>();
  emitClick(): void {
    this.onNewContactEvent.emit();
  }
}
