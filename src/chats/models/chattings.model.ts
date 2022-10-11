import { IsNotEmpty, IsString } from 'class-validator';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaOptions, Types } from "mongoose";
import { Socket as SocketModel} from './sockets.model'

const options: SchemaOptions = {
    timestamps: true,
}

@Schema(options)
export class Chatting extends Document {
    @Prop({
        type: {
            _id: {type: Types.ObjectId, required: true, ref: 'sockets'},
            id: {type: String},
            username: {type: String, required: true}
        }
    })
    @IsString()
    @IsNotEmpty()
    user: SocketModel;

    @Prop({
        required: true
    })
    @IsString()
    @IsNotEmpty()
    chat: string;
}

export const ChattingSchema = SchemaFactory.createForClass(Chatting);