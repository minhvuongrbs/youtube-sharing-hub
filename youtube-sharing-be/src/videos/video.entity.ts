import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('video')
export class VideoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column({ unique: true })
  youtubeUrl: string;
  @Column()
  shareBy: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
