import { Module } from '@nestjs/common';
import { BookmarkController } from './bookmark.controller';
import { BookmarkService } from './bookmark.service';
import { BookmarkSchema } from './schemas/bookmark.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Bookmark', schema: BookmarkSchema }])],
  controllers: [BookmarkController],
  providers: [BookmarkService]
})
export class BookmarkModule {}
