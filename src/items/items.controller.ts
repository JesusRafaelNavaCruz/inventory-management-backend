import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateDto, ItemResponseDto, UpdateDto } from './dto';
import { ItemsService } from './items.service';

@ApiTags('Items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Item' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'New item created',
    type: ItemResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid data',
  })
  async create(@Body() createDto: CreateDto): Promise<ItemResponseDto> {
    return this.itemService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all items registered' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Items list',
    type: [ItemResponseDto],
  })
  async findAll(): Promise<ItemResponseDto[]> {
    return await this.itemService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get item by Id' })
  @ApiParam({
    name: 'id',
    description: 'ID del producto',
    example: '123',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Item not found',
    type: ItemResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Invalid data',
  })
  async findOne(@Param('id') id: string): Promise<ItemResponseDto> {
    return await this.itemService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Modify an exist item' })
  @ApiParam({
    name: 'id',
    description: 'Item id',
    example: '507f1f77bcf86cd799439011',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Updated Item',
    type: ItemResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Invalid data',
  })
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateDto,
  ): Promise<ItemResponseDto> {
    return await this.itemService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'Item id',
    example: '507f1f77bcf86cd799439011',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Deleted Item',
    type: ItemResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Invalid data',
  })
  async delete(@Param('id') id: string) {
    return await this.itemService.remove(id);
  }
}
