import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('Sign In')
    signup() {
        return this.authService.signup()
    }

    @Post('Log In')
    signin() {
        return this.authService.signin()
    }
}