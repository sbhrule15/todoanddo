import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Todo {
  @Prop({ required: true })
  content: string;

  @Prop({ required: true, default: false })
  completed: boolean;

  @Prop({ required: true, default: false })
  deleted: boolean;

  @Prop({ required: true })
  userId: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
