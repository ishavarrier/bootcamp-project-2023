import Image, { StaticImageData } from "next/image";
import mongoose from "mongoose";
import { Schema, Types } from "mongoose";


export type IComment = {
  user: string;
  comment: string;
  time: Date;
}


export type IBlog = {
  title: string;
  date: Date;
  shortdescription: string
  description: string;
  slugURL: string;
  image: string;
  comments: IComment [];
};

// mongoose schema
export const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  shortdescription: { type: String, required: true },
  description: { type: String, required: true },
  slugURL: { type: String, required: true },
  image: { type: String, required: true }, // Adjust this based on your needs
  comments: [{
    user: {type: String, required: true},
    comment: {type: String, required: true},
    time: {type: Date, required: false, default: new Date()}
}]
});

// defining the collection and model
//const Blog =
  //mongoose.models["blogs"] || mongoose.model("blogs", blogSchema , "test.blogs");
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema)

export default Blog;
