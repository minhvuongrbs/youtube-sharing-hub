import { UserEntity } from 'src/users/user.entity';

export const DATABASE_CONNECTION = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'youtube_sharing',
  entities: [UserEntity],
  synchronize: true,
};
