import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository } from 'typeorm';
import { CreateUsersDto } from './dtos';
import { users } from './entities/users.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(users)
        private readonly userRepository: Repository<users>
    ){}
    
    async createOne(dto:CreateUsersDto){
        const user = this.userRepository.create(dto)
        return await this.userRepository.save(user)
    }

}
