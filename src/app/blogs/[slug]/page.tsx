import { IBlog, IComment } from "@/database/blogSchema";
import { IParams } from "../../api/blog/[slug]/route";
import connectDB from "@/helpers/db";
import { text } from "stream/consumers";
import CommentForm from "@/app/components/commentForm";
import ReactDOM from "react-dom";
import React from "react";

//import Blog from '../../../database/blogSchema'

async function getBlog(slug: string) {
  try {
    console.log("in getBlog " + slug);
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function Blog({ params }: { params: { slug: string } }) {
  let blog: IBlog; // Adjust the type based on your blog structure

  blog = await getBlog(params.slug);

  function html() {
    return (
      <div>
        {/* The blog details */}
        <div
          style={{ textAlign: "center", width: "60%", paddingLeft: "250px" }}
        >
          <div style={{ textAlign: "center" }}>
            <h1>{blog.title}</h1>
            <p>{blog.description}</p>
            <p>Published Date: {JSON.stringify(blog.date)}</p>
            <img src={blog.image} alt="Blog Image" style={{ width: "40%" }} />
          </div>
        </div>

        {/* Add a new comment  */}
        <div
          style={{
            float: "right",
            width: "40%",
            paddingRight: "50px",
            paddingTop: "100px",
          }}
        >
          <div>
            <CommentForm />
          </div>
        </div>

        {/* The list of comments  */}
        <div style={{ width: "50%" }}>
          <h3 style={{ paddingLeft: "220px" }}>Comments:</h3>
          {blog.comments.map((comment, index) => (
            <div>
              <div style={{}}>
                <div style={{ padding: "5px;" }}>
                  <div
                    style={{
                      float: "left",
                      width: "60%",
                      textAlign: "left",
                      paddingLeft: "220px",
                    }}
                  >
                    <strong>{comment.user}</strong>&nbsp;&nbsp;&nbsp;
                    <span
                      style={{
                        float: "right",
                        width: "40%",
                        color: "GrayText",
                        fontSize: "small",
                      }}
                    >
                      {JSON.stringify(comment.time)}
                    </span>
                    <p>{comment.comment}</p>
                  </div>
                  {/* <div style={{float:"left",width:"60%"}}> {comment.comment}</div>                 */}
                </div>
              </div>
              {/* <div style={{float:"left",width:"60%",textAlign:"left"}}>
                {comment.comment}
             </div> */}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return html();

  function parseCommentTime(time: Date) {
    throw new Error("Function not implemented.");
  }
}
