import { Account } from './Account';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, Unique } from 'typeorm'
import { AbstractEntity } from './abstractEntity'
@Entity()


export class Extracts extends AbstractEntity {
    
    @Column()
    type: string
    
    @ManyToOne(type => Account, account => Account, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'account_id' })
    accountId: number

}
