import { Module } from '@nestjs/common';
import { PostsResolvers } from './post.resolver';

@Module({
  providers: [PostsResolvers],
})
export class PostModule {}
