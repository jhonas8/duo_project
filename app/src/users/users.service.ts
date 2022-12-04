/* ----------- External ---------- */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

/* ----------- Entities ---------- */
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  public findAllPaginated = async function* (page: number) {
    let current = 0;
    while (true) {
      const users = await this.userRepository.query(
        `SELECT * FROM users LIMIT ${page} OFFSET ${current}`,
      );

      current += page;
      if (!users.length) break;

      for (const user of users) yield user;
    }
  };

  public findById(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  public findByEmail(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email });
  }

  public create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  public update(user: User): Promise<UpdateResult> {
    return this.userRepository.update({ id: user.id }, user);
  }

  public delete(id: number): Promise<DeleteResult> {
    return this.userRepository.delete({ id });
  }
}
