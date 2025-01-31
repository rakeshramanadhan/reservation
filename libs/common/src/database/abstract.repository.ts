import { FilterQuery, Model, Types, UpdateQuery } from 'mongoose';
import { AbstractDocument } from './abstract.schema';
import { Logger, NotFoundException } from '@nestjs/common';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  protected abstract readonly logger: Logger; //common logger
  constructor(protected readonly model: Model<TDocument>) {}

  //create a dcoument
  async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {
    const createdDocument = new this.model({
      ...document,
      _id: new Types.ObjectId(),
    });
    return (await createdDocument.save()).toJSON() as unknown as TDocument;
  }

  //find document
  async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
    const document = await this.model
      .findOne(filterQuery)
      .lean<TDocument>(true);
    if (!document) {
      this.logger.warn('Document was not found with filer query', filterQuery);
      throw new NotFoundException('Document was not found');
    }
    return document;
  }

  //find and update document
  async findOneAndUpdate(
    filterQuery: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>,
  ): Promise<TDocument> {
    const document = await this.model
      .findOneAndUpdate(filterQuery, update, {
        new: true,
      })
      .lean<TDocument>(true);
    if (!document) {
      this.logger.warn('Document was not found with filer query', filterQuery);
      throw new NotFoundException('Document was not found');
    }
    return document;
  }

  //find document
  async find(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
    const document = await this.model.find(filterQuery).lean<TDocument>(true);

    return document;
  }

  //find and delete document
  async findOneAndDelete(
    filterQuery: FilterQuery<TDocument>,
  ): Promise<TDocument> {
    const document = await this.model
      .findOneAndDelete(filterQuery)
      .lean<TDocument>(true);
    if (!document) {
      this.logger.warn('Document was not found with filter query', filterQuery);
      throw new NotFoundException('Document was not found');
    }
    return document;
  }
}
