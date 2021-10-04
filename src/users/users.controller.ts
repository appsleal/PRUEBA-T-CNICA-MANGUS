import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateUsersDto } from './dtos';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService:UsersService){}

    @Post()
    createOne(
        @Body() dto:CreateUsersDto
    ){
        return this.userService.createOne(dto).catch(err => {
            throw new HttpException({
              message: err.message
            }, HttpStatus.BAD_REQUEST);
          })
    }
}
