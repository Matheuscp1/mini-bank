import { Account } from './Account';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstractEntity';

enum Type {
  SAQUE = 'Saque',
  DEPOSITO = 'Deposito',
}
@Entity()
export class Extracts extends AbstractEntity {
  @Column({ type: 'enum', enum: Type })
  type: Type;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  amount: number;

  @ManyToOne((type) => Account, (account) => Account, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'account_id' })
  accountId: number;
}
