import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  userId: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password?: string;
}
