import { Roles } from "src/roles/entities/roles.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class users {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({ type: 'varchar', length: 255, nullable:false })
    username:string;

    @Column({ type: 'varchar', length: 255, nullable:false })
    password:string;

    @ManyToOne(()=>Roles, { primary:true, cascade:true, onDelete:"CASCADE" })
    role_id:number;

    @CreateDateColumn({type: 'timestamp'})
    created_at:Date;

    @UpdateDateColumn({type: 'timestamp'})
    updated_at:Date;
}