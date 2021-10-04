import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from 'src/users/entities/users.entity';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { Clients } from './entities/clients.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Clients, users])
  ],
  controllers: [ClientsController],
  providers: [ClientsService]
})
export class ClientsModule {}
