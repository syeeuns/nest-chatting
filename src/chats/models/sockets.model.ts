import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaOptions } from "mongoose";
import { IsString, IsNotEmpty } from "class-validator";

const options: SchemaOptions = {
    id: false,
    timestamps: true,
}

@Schema(options)
export class Socket extends Document {
    @Prop({
        unique: true,
        required: true
    })
    @IsString()
    @IsNotEmpty()
    id: string;

    @Prop({
        required: true
    })
    @IsString()
    @IsNotEmpty()
    username: string;
}

export const SocketSchema = SchemaFactory.createForClass(Socket);