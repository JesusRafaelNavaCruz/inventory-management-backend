import { PartialType } from '@nestjs/swagger';
import { CreateDto } from './create-item.dto';

export class UpdateDto extends PartialType(CreateDto) {}
