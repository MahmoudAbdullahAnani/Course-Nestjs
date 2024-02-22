import { Entity, Column } from 'typeorm';

@Entity()
export class User {
  @Column({ primary: true, generated: 'uuid' })
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
  @Column()
  age: number;
}
