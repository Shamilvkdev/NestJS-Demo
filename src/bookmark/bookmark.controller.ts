import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { Bookmark } from './schemas/bookmark.schema';

@Controller('bookmark')
export class BookmarkController {
    constructor(private bookmarkService: BookmarkService) {}

    @Get()
    async getAllBookmarks(): Promise<Bookmark[]> {
        return this.bookmarkService.findAll();
    }

    @Post()
    async createAllBookmarks
    (@Body()
    bookmark,
    ): Promise<Bookmark> {
        return this.bookmarkService.create(bookmark);
    }
}
