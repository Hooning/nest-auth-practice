import { Injectable } from '@nestjs/common';
import { UserEntity } from './entity';

@Injectable()
export class UsersService {
  private readonly _users: UserEntity[] = [
    {
      userId: 1,
      username: 'David',
      password: 'whoami',
    },
    {
      userId: 2,
      username: 'Jiyeon',
      password: 'whoareu',
    },
  ];

  async findOne(username: string): Promise<UserEntity | undefined> {
    return this._users.find((user) => user.username === username);
  }
}
