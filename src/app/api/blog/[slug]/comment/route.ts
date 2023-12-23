import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import blogSchema, { IBlog, IComment } from "@/database/blogSchema";
import { NextApiRequest, NextApiResponse } from "next";

export type IParams = {
    slug: string;
    params: {
      slug: string;
    };
  };

export const addComment = async(comment: Comment)=>{
    const response = await blogSchema.db.collection('comments').insertOne(comment)
   return response.insertedId;
}

export async function POST(req: NextRequest, {params}: IParams) {
  try{
    await connectDB();
    console.log('inside the API');
    const {slug} = params;
    const requestBody = await req.json();
    console.log('API ' + JSON.stringify(requestBody))



    const blog = await blogSchema.findOne({ slugURL: slug }).orFail();
    if (blog){
      blog.comments.push({
        user: requestBody.user,
        comment: requestBody.comment,
      });
      await blog.save();
      return new NextResponse(JSON.stringify({message: "added the comment", status: 200}))
    }
  }
  catch (error){
    console.error("error", error)
  }
  
}