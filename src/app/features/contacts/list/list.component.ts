import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { ColumnKeys, Contact } from '../contacts.interface';
import { ContactService } from '../contact.service';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  ngOnInit(): void {
    this.getAllContacts();
  }

  data!: Contact[];
  displayedColumns: ColumnKeys<Contact> = [
    'id',
    'name',
    'email',
    'phone',
    'action',
  ];

  sortableColumns: ColumnKeys<Contact> = ['id', 'name', 'email', 'phone'];

  private readonly _contactSvc = inject(ContactService);
  private readonly _destroyRef = inject(DestroyRef);

  getAllContacts() {
    this._contactSvc
      .getAllContacts()
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        tap((contacts: Contact[]) => (this.data = [...contacts]))
      )
      .subscribe();
  }
}
