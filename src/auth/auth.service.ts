import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signup() {
        return { msg: 'Sign In successful' }
    }

    signin() {
        return { msg: 'Log In successful' }
    }
}