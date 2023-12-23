import React from "react";
import type {IPortfolio} from "../database/portfolioSchema";
import style from "@/app/home.module.css";
import { IComment } from "@/database/blogSchema";
import Link from "next/link";


export default function PortfolioPreview(props: IPortfolio) {
  return (
    <div>
      <div style = {{color: '#6e412b'}}>
      <h1>{props.heading}</h1>
      </div>
      <p>{props.description}</p>
      <Link href="/">
      <h3>{props.link}</h3>
    </Link>
      
      <h4>Comments:</h4>
      {props.comments.map((comment: IComment) => (
        <p key={comment.user}> {comment.user}: {comment.comment}</p>
      ))}
    </div>
  );
}

