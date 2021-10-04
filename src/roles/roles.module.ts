import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from 'src/users/entities/users.entity';
import { Roles } from './entities/roles.entity';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Roles,users])
  ],
  controllers: [RolesController],
  providers: [RolesService]
})
export class RolesModule {}
