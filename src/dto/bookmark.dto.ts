import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Category } from "src/bookmark/schemas/bookmark.schema";

export class CreateBookmarkDTO {

    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsString()
    @IsNotEmpty()
    readonly author: string

    @IsNumber()
    @IsNotEmpty()
    readonly price: number;

    @IsNotEmpty()
    @IsEnum(Category, {
        message : 'Please enter a valid Category'
    })
    readonly category: Category;
}