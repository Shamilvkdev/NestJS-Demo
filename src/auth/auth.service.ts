import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signup() {
        return { msg: 'Signup successful' }
    }

    signin() {
        return { msg: 'Signin successful' }
    }
}