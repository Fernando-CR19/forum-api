import { Min, IsString, IsAlpha, IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsAlpha()
    @IsNotEmpty()
    password: string;
}