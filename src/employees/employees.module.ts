import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from 'src/users/entities/users.entity';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { Employees } from './entities/employees.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Employees,users])
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService]
})
export class EmployeesModule {}
