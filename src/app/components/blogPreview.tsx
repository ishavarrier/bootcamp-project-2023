import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import { IBlog } from "@/database/blogSchema";
import Link from "next/link";
import { format } from "date-fns";

export default function BlogPreview(props: IBlog) {
  return (
    <div className={style.centeredcontainer}>
      <div>
        <div>
          <main>
            <div className="blog_container"> </div>
          </main>

          <div className="footer">
            <footer>
              © 2023 Personal Website Isha Varrier | All Rights Reserved
            </footer>
          </div>
        </div>

        <div className="row">
          <div className="card">
            <Link href={`/blogs/${props.slugURL}`}>
              <h2>{props.title}</h2>
            </Link>
            <h5>Published on, {format(new Date(props.date), 'LLLL d, yyyy')}</h5>
            <p>{props.shortdescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
