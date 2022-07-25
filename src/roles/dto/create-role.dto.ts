import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {

    @ApiProperty({example: 'ADMIN', description: `Role's unique value`})
    readonly value: string;

    @ApiProperty({example: 'Administrator', description: `Role's description`})
    readonly description: string;
}