import { users } from "../../users/entities/users.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('clients')
export class Clients {
    @PrimaryGeneratedColumn()
    id:number;

    @OneToOne(() => users, { primary:true, cascade:true, onDelete:"CASCADE" })
    @JoinColumn({referencedColumnName: "id"})
    users: number;

    @Column({ type: 'varchar', length: 255, nullable:false })
    name:string;

    @Column({ type: 'varchar', length: 255, nullable:false })
    lastname:string;

    @Column({ type: 'varchar', length: 255, nullable:false })
    address:string;

    @Column({ type: 'varchar', length: 255, nullable:false })
    phone:string;
}