import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateDto {
  @ApiProperty({ example: true, description: 'Monitor HP' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ enum: ['Herramienta', 'Equipo', 'Insumo', 'Consumible'] })
  @IsString()
  @IsNotEmpty()
  @IsEnum(['Herramienta', 'Equipo', 'Insumo', 'Consumible'])
  type: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiProperty({
    example: true,
    description: 'Monitor HP de 22 pulgadas color negro con base',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  serialNumber: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  barcode: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsMongoId()
  locationId: string;

  @ApiProperty({
    enum: ['Operativo', 'Prestado', 'Dañado', 'Baja'],
    default: 'Operativo',
  })
  @IsEnum(['Operativo', 'Prestado', 'Dañado', 'Baja'])
  status: string;

  @ApiProperty({ required: false, default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  stock?: number;

  @ApiProperty({ required: false, default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minimunStock?: number;

  @ApiProperty({ required: false, default: 'pieza' })
  @IsOptional()
  @IsString()
  unit?: string;
}
