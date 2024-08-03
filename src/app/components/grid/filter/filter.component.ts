import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';

const MATERIAL_MODULES = [
  MatLabel,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
];

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, MATERIAL_MODULES],
  templateUrl: './filter.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  filter = model('');
  label = input<string>('Filter');
  placeholder = input<string>('Searching...');
}
