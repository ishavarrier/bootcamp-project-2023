console.log("Reached subportfolio");

import Link from "next/link";
//import styles from './page.module.css'
import "../myhomepage.css";
import Portfolio, { IPortfolio } from "@/database/portfolioSchema";
import PortfolioPreview from "../portfolioPreview";
import connectDB from "@/helpers/db";
import { IComment } from "@/database/blogSchema";
import CommentForm from "../components/commentFormPortfolio";

async function getPortfolio() {
  await connectDB(); // function from db.ts before

  try {
    console.log("Reached port data");

    // query for all blogs and sort by date
    const portfolio = await Portfolio.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    console.log("Portfolio connection worked ");
    return portfolio;
  } catch (err) {
    console.log("Portfolio connection did not work " + err);
    return [];
  }
}

export default async function Portfolio1() {
  const portfolio = await getPortfolio();

  return (
    <div>
      <main style={{ display: "flex", alignItems: "center" }}>
        <img
          src={"/portfolio.png"}
          alt=""
          style={{ width: "50%", marginRight: "20px" }}
        />
        <div style={{ textAlign: "center", flex: 1 }}>
          {portfolio.map((portfolioItem) => (
            <PortfolioPreview
              heading={portfolioItem.heading}
              description={portfolioItem.description}
              link={portfolioItem.link}
              comments={portfolioItem.comments}
              image={portfolioItem.image} // Pass comments individually for each portfolio item
            />
          ))}
          <div></div>
          <CommentForm />
        </div>
      </main>
    </div>
  );
}
