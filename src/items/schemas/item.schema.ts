import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Item extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({
    enum: ['Herramienta', 'Equipo', 'Insumo', 'Consumible'],
    required: true,
  })
  type: string;

  @Prop()
  category: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  serialNumber: string;

  @Prop()
  barcode: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
    required: true,
  })
  locationId: string;

  @Prop({
    enum: ['Operativo', 'Prestado', 'Dañado', 'Baja'],
    default: 'Operativo',
    required: true,
  })
  status: string;

  @Prop({ default: 0 })
  stock: number;

  @Prop({ default: 0 })
  minimunStock: number;

  @Prop({ default: 'pieza' })
  unit: string;

  @Prop({ default: Date.now() })
  createdAt: Date;

  @Prop({ default: Date.now() })
  updatedAt: Date;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
