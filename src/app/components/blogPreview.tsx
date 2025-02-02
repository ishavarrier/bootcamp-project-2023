import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import type { IBlog } from "@/database/blogSchema";
import Link from "next/link";
import { format } from "date-fns";

export default function BlogPreview(props: IBlog){
  const { title, date, description, slugURL, shortdescription, image } = props._doc;
  console.log("these r the props for blog preview" + JSON.stringify(props))
  console.log("this is the title: " + props._doc.title);
  //^^this is extracting the specific properties from props._doc which is just a way of retriving
  //the data from mongoose. 

  return (
    <div className={style.centeredcontainer}>
          <div className="footer">
            <footer>
              © 2023 Personal Website Isha Varrier | All Rights Reserved
            </footer>
          </div>    

        <div className="row">
          <div className="card">
            <Link href={`/blogs/${slugURL}`}>
              <h2>{title}</h2>
            </Link>
            {/* <h5>Published on, {format(new Date(date), 'LLLL d, yyyy')}</h5> */}
            <p>{shortdescription}</p>
          </div>
        </div>
    </div>
  );
}
