import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './schemas/item.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDto, UpdateDto } from './dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<Item>) {}

  async create(createDto: CreateDto): Promise<Item> {
    const newItem = new this.itemModel({
      ...createDto,
    });
    return await newItem.save();
  }

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<Item> {
    const item = await this.itemModel.findById(id).exec();
    if (!item) throw new NotFoundException(`Item #${id} not found`);
    return item;
  }

  async update(id: string, updateDto: UpdateDto): Promise<Item> {
    const existingItem = await this.itemModel
      .findByIdAndUpdate(id, updateDto, { new: true })
      .exec();
    if (!existingItem) throw new NotFoundException(`Item #${id} not found`);
    return existingItem;
  }

  async remove(id: string): Promise<Item> {
    const deletedItem = await this.itemModel.findByIdAndDelete(id).exec();
    if (!deletedItem) throw new NotFoundException(`Item #${id} not found`);
    return deletedItem;
  }
}
