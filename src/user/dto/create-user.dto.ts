import { Min, IsString, IsAlpha, IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @Length(3)
    @IsNotEmpty()
    name: string;

    @IsAlpha()
    @Length(6)
    @IsNotEmpty()
    password: string;
}