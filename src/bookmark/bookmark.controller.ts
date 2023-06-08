import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { Bookmark } from './schemas/bookmark.schema';

@Controller('bookmark')
export class BookmarkController {
    constructor(private bookmarkService: BookmarkService) {}

    @Get()
    async getAllBookmarks(): Promise<Bookmark[]> {
        return this.bookmarkService.findAll();
    }

    @Get(':bookmarkid')
    async getBook(
        @Param('bookmarkid')
         bookmarkid: string,
    ): Promise<Bookmark> {
        return this.bookmarkService.findById(bookmarkid);
    }

    @Post()
    async createAllBookmarks
    (@Body()
    bookmark,
    ): Promise<Bookmark> {
        return this.bookmarkService.create(bookmark);
    }
}
