
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import blogSchema, { IBlog, IComment } from "@/database/blogSchema";
import CommentForm from "@/app/components/commentForm";

export type IParams = {
  slug: string;
  params: {
    slug: string;
  };
};

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = params;

  try {
    console.log("in the correct route.ts " + slug);
    const blog = await blogSchema.findOne({ slugURL: slug }).orFail();
    
    console.log("blog id type " + typeof blog._id);

    const comments: IComment[] = blog.comments;

    console.log("Retrieved Blog:", blog);
    
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json("Blog is not found.", { status: 404 });
  }
}

function parseCommentTime(time: any) {
  const formattedTime = new Date(time).toLocaleString();
  return formattedTime;
}
