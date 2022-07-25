import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@ApiTags('Authorization')
@Controller('/api/auth')
export class AuthController {

    constructor(private authService: AuthService) {

    }

    @ApiOperation({summary: 'authorization'})
    @Post('/login')
    login(@Body() dto: CreateUserDto) {
        return this.authService.login(dto);
    }

    @ApiOperation({summary: 'registration'})
    @Post('/registration')
    registration(@Body() dto: CreateUserDto) {
        return this.authService.registration(dto);
    }
}
