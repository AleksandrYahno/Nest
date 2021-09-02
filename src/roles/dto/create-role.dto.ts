import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
    @ApiProperty({example: 'some example', description: 'some description'})
    readonly value: string;

    @ApiProperty({example: 'some example', description: 'some description'})
    readonly description: string;
}
