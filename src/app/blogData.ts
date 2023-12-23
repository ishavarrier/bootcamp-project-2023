import Image, { StaticImageData } from "next/image";
import riceimage from "./images/rice.png";
import phoimage from "./images/pho.jpg";
import connectDB from "@/helpers/db";
import Blog from "@/database/blogSchema";
import {IBlog} from "@/database/blogSchema";

// export interface Blogs {
//   title: string;
//   date: string;
//   description: string;
//   slugURL: string;
//   image: StaticImageData;
// }

// const blogs: Blogs[] =
// [
//   {
//     title: "slay",
//     date: "October 21, 2023",
//     description: "This is my first blog. Here's a picture of some rice I made.",
//     slugURL: "blog1",
//     image: riceimage,
//   },
//   {
//     title: "Blog2",
//     date: "October 21, 2023",
//     description: "This is my second blog. Here's a picture of this awesome pho from Downtown SLO",
//     slugURL: "blog2",
//     image: phoimage,
//   },
// ];

const blogs: IBlog[] = await getBlogs()

  export default blogs;

  async function getBlogs() {
    await connectDB(); // function from db.ts before
  
    try {
      console.log('Isha....page')
  
      // query for all blogs and sort by date
      const blogs = await Blog.find().sort({ date: -1 }).orFail();
      // send a response as the blogs as the message
      console.log('Isha....blogs ' + blogs)
      return blogs;
    } catch (err) {
  
      console.log('Isha....error ' + err)
      return [];
    }
  }
  
  getBlogs();