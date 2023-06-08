import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bookmark } from './schemas/bookmark.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class BookmarkService {
    constructor(
        @InjectModel(Bookmark.name)
        private bookmarkModel : mongoose.Model<Bookmark>
    ) {}

    async findAll(): Promise<Bookmark[]> {
        const bookmarks = await this.bookmarkModel.find();
        return bookmarks;
    }

    async create(bookmark : Bookmark): Promise<Bookmark> {
        const res = await this.bookmarkModel.create(bookmark);
        return res;
    }
}
