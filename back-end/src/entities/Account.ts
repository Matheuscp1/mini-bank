import { Extracts } from './Extracts';
import { Column, Entity, OneToMany, Unique } from 'typeorm';
import { AbstractEntity } from './abstractEntity';

@Entity()
export class Account extends AbstractEntity {
  @Unique('index_name', ['cpf'])
  @Column({ length: 14 })
  cpf: string;

  @Column({ type: 'numeric', precision: 20, scale: 2 })
  amount: number;

  
  @OneToMany('Extracts', (extracts: Extracts) => extracts.accountId, { onDelete: 'CASCADE' })
  extracts: Promise<Extracts[]>
}
// { cascade: true, eager: true }