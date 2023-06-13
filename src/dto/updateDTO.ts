import { IsEnum, IsOptional } from "class-validator";
import { Category } from "src/bookmark/schemas/bookmark.schema";

export class UpdateBookmarkDTO {

    @IsOptional()
    readonly title: string;
    
    @IsOptional()
    readonly description: string;
   
    @IsOptional()
    readonly author: string
   
    @IsOptional()
    readonly price: number;
   
    @IsOptional()
    @IsEnum(Category, {
        message : 'Please enter a valid Category'
    })
    readonly category: Category;
}