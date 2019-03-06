import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Message {
 @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  nick: string;

  @Column('text')
  message: string;
}
