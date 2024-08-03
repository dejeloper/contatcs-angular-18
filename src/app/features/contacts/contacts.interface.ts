import { Timestamp } from '@angular/fire/firestore';

export type ColumnKeys<T> = Array<keyof T>;

export interface Contact {
  id: number;
  name: number;
  email: number;
  phone: number;
  action: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
