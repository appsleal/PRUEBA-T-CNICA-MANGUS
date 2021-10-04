import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mydb_user',
      password: 'your_password',
      database: 'prueba',
      entities: [__dirname+'../migration/**/*{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    RolesModule,
    UsersModule,
    ClientsModule,
    EmployeesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
