import styles from './page.module.css'
import './myhomepage.css';
import Link from "next/link";
import blogs from '@/app/blogData';
import BlogPreview from './components/blogPreview';

export default function Home() {
  return (
  <div>

    <main>
      <div className = "container1">
        <div className = "profile_pic">
        <img src="bootcamp-milestone-2/src/app/profile_pic.png"/>
        </div>
        <div className = "intro_text">
          <h1>Hi, I'm Isha!</h1>
          <p> Welcome to my website made for Hack4Impact! </p>
        </div>
      </div>


      <div className = "container2">
        <div className = "about_me">
            <h1>About Me</h1>
        </div>
        <div className = "about_text">
          <p>I am a freshman studying Computer Science! I am an avid chai drinker (so far my favorite is the Pumpkin Iced Chai from Starbucks.) 
            I also love photography, scroll down for a few pics taken during my WOW week!
          </p>
        </div>
      </div>


      <div className = "container3">
        <div className = "wow_picture">
            <img src="basketball.png" />
        </div>
        <div className = "wow_picture">
            <img src="beach.png" />
        </div>
        <div className = "wow_picture">
            <img src="night.png" />
        </div>
        <div className = "wow_picture">
            <img src="tree.png" />
        </div>
      </div>
    </main>
    
  <div className = "footer">
    <footer>© 2023 Personal Website Isha Varrier | All Rights Reserved</footer>
  </div>
   


{blogs.map((blog) =>(
  <BlogPreview 
    title={blog.title}
    date={blog.date}
    description={blog.description}
    slugURL={blog.slugURL}
    image={blog.image}
  />
))}
</div>
);
}
