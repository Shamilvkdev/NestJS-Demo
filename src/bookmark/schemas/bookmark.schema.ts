import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
    ADVENTURE = 'Adventure',
    CLASSICS = 'Classics',
    CRIME = 'Crime',
    FANTASY = ' Fantasy',
    ROMANCE = 'Romance'
}

@Schema({
    timestamps: true
})
export class Bookmark {

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    category: Category;
}

export const BookmarkSchema = SchemaFactory.createForClass(Bookmark)