console.log("reached portfolio route");

import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import portfolioSchema, { IPortfolio } from "@/database/portfolioSchema";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    console.log("inside the API");
    const requestBody = await req.json();
    console.log("API " + JSON.stringify(requestBody));

    const portfolio = await portfolioSchema.findOne({}).orFail();
    if (portfolio) {
      portfolio.comments.push({
        user: requestBody.user,
        comment: requestBody.comment,
      });
      await portfolio.save();
      return new NextResponse(
        JSON.stringify({ message: "added the comment", status: 200 })
      );
    }
  } catch (error) {
    console.error("error", error);
  }
}
