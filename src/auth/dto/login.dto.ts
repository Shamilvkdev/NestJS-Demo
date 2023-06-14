import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";


export class LoginUpDto {

    @IsNotEmpty()
    @IsEmail({}, { message: 'Please enter a valid email' })
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    readonly password: string;
}