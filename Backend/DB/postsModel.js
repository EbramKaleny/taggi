import { Schema, model } from "mongoose";

const postsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      updatedAt: false,
      createdAt: true,
    },
  }
);


const postsModel = model("post", postsSchema)

export default postsModel