import Link from "next/link";

export default async function PortfolioHTML() {

  return (
      <div style={{ textAlign: "center" }}>
          <main>
              
              <div>
                <h1>Welcome to my Portfolio</h1>
                <Link href={"/portfolio/subpage"}>
                 <h3>Click Here to check out my Website</h3>
              </Link>

              </div>
          </main>

          
      </div>
  );
}
<div className="footer">
<footer>© 2023 Personal Website Isha Varrier | All Rights Reserved</footer>
</div>

