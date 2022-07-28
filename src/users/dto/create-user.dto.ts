import { ApiProperty } from "@nestjs/swagger";
import { IsEAN, IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@test.com', description: 'Unique email address'})
    @IsString({message: 'Could be string parameter'})
    @IsEmail({}, {message: 'Uncorrect e-mail'})
    readonly email: string;

    @ApiProperty({example: '12345', description: 'password'})
    @IsString({message: 'Could be string parameter'})
    @Length(4, 16, {message: 'Password length could be 4-16 symbols'})
    readonly password: string;
}