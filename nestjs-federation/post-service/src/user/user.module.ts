import { Module } from '@nestjs/common';
import { UsersResolvers } from './user.resolver';

@Module({
  providers: [UsersResolvers],
})
export class UserModule {}
