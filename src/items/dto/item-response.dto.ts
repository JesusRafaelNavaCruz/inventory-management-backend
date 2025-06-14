import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ItemResponseDto {
  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  type: string;

  @ApiProperty()
  @Expose()
  category: string;

  @ApiProperty()
  @Expose()
  description: string;

  @ApiProperty()
  @Expose()
  serialNumber: string;

  @ApiProperty()
  @Expose()
  barcode: string;

  @ApiProperty()
  @Expose()
  locationId: string;

  @ApiProperty()
  @Expose()
  status: string;

  @ApiProperty()
  @Expose()
  stock: number;

  @ApiProperty()
  @Expose()
  minimunStock: number;

  @ApiProperty()
  @Expose()
  unit: string;

  @ApiProperty()
  @Expose()
  createdAt: Date;

  @ApiProperty()
  @Expose()
  updatedAt: Date;
}
