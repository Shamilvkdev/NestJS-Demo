import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { BookmarkModule } from "src/bookmark/bookmark.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { config } from "process";
import { UserSchema } from "./schema/user.schema";

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                return {
                    secret: config.get<string>('JWT_SECRET'),
                    signOptions: {
                        expiresIn: config.get<string | number>('JWT_EXPIRES'),
                    },
                };
            },
        }),
        MongooseModule.forFeature([{ name:'User', schema: UserSchema }]),
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}