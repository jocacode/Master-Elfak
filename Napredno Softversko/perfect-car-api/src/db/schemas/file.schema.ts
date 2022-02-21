import { ObjectId, Schema } from 'mongoose';

export type FileType = {
  _id?: ObjectId;
  name: string;
  type: string;
  key: string;
  url?: string;
};

export const FileSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
    },
    key: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  },
);
