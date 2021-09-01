import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({example: 'user@gmail.com', description: 'email'})
    readonly email: string;

    @ApiProperty({example: '123password456', description: 'password'})
    readonly password: string;
}
