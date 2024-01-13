/* eslint-disable prettier/prettier */
// database.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseProviders } from './database.provider';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://faraazalisyed:finalflash006@botvluster.88bvgql.mongodb.net/")],
  providers: [...databaseProviders],
  exports: [MongooseModule], // Export MongooseModule for use in other modules
})
export class DatabaseModule {}
