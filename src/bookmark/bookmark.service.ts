import { Injectable, NotFoundException } from '@nestjs/common';
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

    async findById(bookmarkid: string): Promise<Bookmark> {
        const bookmark = await this.bookmarkModel.findById(bookmarkid);

        if (!bookmark) {
            throw new NotFoundException('Book not found');
        }

        return bookmark;
    }

    async UpdateById(bookmarkid: string, bookmark: Bookmark): Promise<Bookmark> {
        return await this.bookmarkModel.findByIdAndUpdate(bookmarkid, bookmark, {
            new : true,
            runValidators: true,
    });
    }

    async DeleteById(bookmarkid : string): Promise<Bookmark> {
        return await this.bookmarkModel.findByIdAndDelete(bookmarkid);
    }

}
