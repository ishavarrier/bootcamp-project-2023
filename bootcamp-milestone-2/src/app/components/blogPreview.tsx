import React from "react";
import type { Blog } from '@/app/blogData';
import style from "./blogPreview.module.css";
import Image from 'next/image'; 


export default function BlogPreview(props: Blog) {
  return (
    <div>
      <div>
        <main>
          <h1 className="page-title">Blog</h1>
          <div className="blog_container"> </div>
        </main>

        <div className="footer">
          <footer>
            © 2023 Personal Website Isha Varrier | All Rights Reserved
          </footer>
        </div>
      </div>

      <div className={style.div}>
        <h3>{props.title}</h3>
        <div>
          <Image src={props.image} alt="Blog Image" width={500} height={500} />
          <p>{props.description}</p>
          <p>{props.date}</p>
          <p>{props.slugURL}</p>
        </div>
      </div>
    </div>
  );
}
