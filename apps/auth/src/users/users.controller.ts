import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { CurrentUser } from '../../../../libs/common/src/decorators/current-user.decorator';
import { UsersDocument } from './models/users.schema';
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @Get()
  @UseGuards(JwtAuthGuard)
  async getUser(@CurrentUser() user: UsersDocument) {
    return user;
  }
}
