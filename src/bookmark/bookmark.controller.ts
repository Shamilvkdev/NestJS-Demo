import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { Bookmark } from './schemas/bookmark.schema';
import { UpdateBookmarkDTO } from 'src/dto/updateDTO';

@Controller('bookmark')
export class BookmarkController {
    constructor(private bookmarkService: BookmarkService) {}

    @Get()
    async getAllBookmarks(): Promise<Bookmark[]> {
        return this.bookmarkService.findAll();
    }

    @Get(':bookmarkid')
    async getBookmark(
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

    @Put(':bookmarkid')
    async UpdateBookmark(
        @Param('bookmarkid')
         bookmarkid: string,
         @Body()
         bookmark: UpdateBookmarkDTO,
    ): Promise<Bookmark> {
        return this.bookmarkService.UpdateById(bookmarkid, bookmark);
    }

    @Delete(':bookmarkid')
    async deleteBookmark(
        @Param('bookmarkid')
         bookmarkid: string,
    ): Promise<Bookmark> {
        return this.bookmarkService.DeleteById(bookmarkid);
    }
}
