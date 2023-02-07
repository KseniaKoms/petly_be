import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  fullName?: string;

  @ApiProperty({ example: 'test@test.com' })
  @IsEmail({ message: 'Invalid email' })
  email: string;

  @ApiProperty({ example: 'qwerty123' })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  password?: string;
}
