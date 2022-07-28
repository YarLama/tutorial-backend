import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto {
    @ApiProperty({example: '1', description: 'Id user'})
    readonly userId: number;
    @ApiProperty({example: 'Bulling', description: 'Description of ban reason'})
    readonly banReason: string; 
}