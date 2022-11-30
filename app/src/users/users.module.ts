/*---------- External ----------*/
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/*---------- Services ----------*/
import { UsersService } from './users.service';

/*---------- Entities ----------*/
import { User } from '../entities/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  exports: [TypeOrmModule],
})
export class UsersModule {}
