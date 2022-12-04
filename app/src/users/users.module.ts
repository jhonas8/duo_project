/*---------- External ----------*/
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/*---------- Services ----------*/
import { UsersService } from './users.service';

/*---------- Schemas ----------*/
import { UserSchema } from './schemas/users.schema';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  providers: [UsersService],
  exports: [TypeOrmModule],
})
export class UsersModule {}
