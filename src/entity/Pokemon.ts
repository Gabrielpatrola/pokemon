import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Pokemon extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipo: string;

    @Column()
    treinador: string;

    @Column({ default: 1 })
    nivel: number;
}