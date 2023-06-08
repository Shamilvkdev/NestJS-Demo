import { Category } from "src/bookmark/schemas/bookmark.schema";

export class CreateBookmarkDTO {
    readonly title: string;
    readonly description: string;
    readonly price: number;
    readonly category: Category;
}