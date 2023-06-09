import { Category } from "src/bookmark/schemas/bookmark.schema";

export class UpdateBookmarkDTO {
    readonly title: string;
    readonly description: string;
    readonly author: string
    readonly price: number;
    readonly category: Category;
}