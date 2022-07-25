import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: 'user@test.com', description: 'Unique email address'})
    readonly email: string;

    @ApiProperty({example: '12345', description: 'password'})
    readonly password: string;
}