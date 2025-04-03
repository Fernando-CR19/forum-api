import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, NotFoundException, ValidationPipe } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.tdo';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    async signupUser(
        @Body(new ValidationPipe()) CreateUserDto: CreateUserDto,
    ): Promise<UserModel> {
        return this.userService.createUser(CreateUserDto);
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    async getUser(@Param('id', ParseIntPipe) id: number): Promise<Omit<UserModel, 'password'>> {
        const user = await this.userService.user({ id });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    async updateUser(
        @Body(new ValidationPipe()) userData: UpdateUserDto,
        @Param('id', ParseIntPipe) id: number,
    ): Promise<UserModel> {
        return this.userService.updateUser({ where: { id }, data: userData });
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<UserModel> {
        return this.userService.deleteUser({ id })
    }
}
