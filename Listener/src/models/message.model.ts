import { Schema, model, Document } from "mongoose";


//export default model<>

const messageSchema = new Schema<kafkaMessage>({
  sender: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  magicNumber: {
    type: Number,
    required: false
  },
  extra: {
    type: String,
    required: false
  }
})

export interface kafkaMessage extends Document {
  sender: string,
  content: string,
  magicNumber: number,
  extra: string
}

export default model<kafkaMessage>("Message", messageSchema);