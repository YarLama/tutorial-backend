import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
    @ApiProperty({example: 'USER', description: `Value of user's role`})
    @IsString({message: "Could be string parameter"})
    readonly value: string;

    @ApiProperty({example: '1', description: 'Id user'})
    @IsNumber({}, {message: "Could be integer parameter"})
    readonly userId: number;
}