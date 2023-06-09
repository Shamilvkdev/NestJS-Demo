import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bookmark } from './schemas/bookmark.schema';
import * as mongoose from 'mongoose';
import { Query } from 'express-serve-static-core'

@Injectable()
export class BookmarkService {
    constructor(
        @InjectModel(Bookmark.name)
        private bookmarkModel : mongoose.Model<Bookmark>
    ) {}

    async findAll(query : Query): Promise<Bookmark[]> {

        const booksInPage = 2;
        const initialPage = Number(query.page) || 1;
        const skip = booksInPage * (initialPage - 1);

        const bookname = query.bookname ? {
            title: {
                $regex: query.bookname,
                $options: 'i'
            }
        } : {}

        const bookmarks = await this.bookmarkModel
        .find({ ...bookname })
        .limit(booksInPage)
        .skip(skip)
        return bookmarks;
    }

    async create(bookmark : Bookmark): Promise<Bookmark> {
        const res = await this.bookmarkModel.create(bookmark);
        return res;
    }

    async findById(bookmarkid: string): Promise<Bookmark> {

        const isValidId = mongoose.isValidObjectId(bookmarkid)

        if (!isValidId) {
            throw new BadRequestException('please enter a valid id');
        }

        const bookmark = await this.bookmarkModel.findById(bookmarkid);

        if (!bookmark) {
            throw new NotFoundException('Book not found');
        }

        return bookmark;
    }

    async UpdateById(bookmarkid: string, bookmark: Bookmark): Promise<Bookmark> {
        return await this.bookmarkModel.findByIdAndUpdate(bookmarkid, bookmark, {
            new : true,
            runValidators: true
    });
    }

    async DeleteById(bookmarkid : string): Promise<Bookmark> {
        return await this.bookmarkModel.findByIdAndDelete(bookmarkid);
    }

}
function limit(booksInPage: number) {
    throw new Error('Function not implemented.');
}

