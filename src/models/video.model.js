import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    video: {
      type: String, // Provide by cloudnary
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    view: {
      type: Number,
      default: 0,
    },
    isPublish: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("User", videoSchema);
