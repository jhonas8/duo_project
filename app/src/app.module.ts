/*---------- External ----------*/
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

/*---------- Controllers ----------*/
import { AppController } from './app.controller';

/*---------- Services ----------*/
import { AppService } from './app.service';

/*---------- Modules ----------*/
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './users/users.module';

/* ----------- Entities ---------- */
import { Entities } from './typeOrm/entities';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [...Entities],
      synchronize: process.env.ENVIRONMENT !== 'PROD',
    }),
    AuthenticationModule,
    UsersModule,
  ],
})
export class AppModule {}
