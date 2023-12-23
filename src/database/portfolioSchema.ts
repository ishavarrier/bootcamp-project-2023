import mongoose from "mongoose";
import { Schema, Types } from "mongoose";
import { IComment } from "./blogSchema";

export type IPortfolio = {
  heading: string;
  description: string;
  comments: IComment[];
  image: string;
  link: string;
};

// mongoose schema
export const portfolioSchema = new Schema<IPortfolio>({
  heading: { type: String, required: true },
  description: { type: String, required: true },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: false, default: new Date() },
    },
  ],
});

// defining the collection and model
const Portfolio =
  mongoose.models["portfolios"] ||
  mongoose.model("portfolios", portfolioSchema);

export default Portfolio;
