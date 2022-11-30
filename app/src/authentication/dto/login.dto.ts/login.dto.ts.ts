import { IsString, IsNotEmpty } from 'class-validator';

export class LoginDtoTs {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
