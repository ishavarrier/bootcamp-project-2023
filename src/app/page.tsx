import styles from './page.module.css'
import './myhomepage.css';
import Link from "next/link";
import blogs from '@/app/blogData';
import BlogPreview from './components/blogPreview';

import profilepic from './images/profile_pic.png'
import basketballpic from './images/basketball.png'
import beachpic from './images/beach.png'
import treepic from './images/tree.png'
import nightpic from './images/night.png'
import connectDB from "@/helpers/db";
import Blog from "@/database/blogSchema";



export default function Home() {
  return (
  <div>

    <main>
      <div className = "container1">
        <div>
        <img src={profilepic.src} alt="" style={{ width: '250px' }} />
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
        <img src={basketballpic.src} alt="" style={{ width: '320px' }} />
        </div>
        <div className = "wow_picture">
        <img src={beachpic.src} alt="" style={{ width: '320px' }} />
        </div>
        <div className = "wow_picture">
            <img src={treepic.src} alt="" style={{ width: '320px' }} />
        </div>
        <div className = "wow_picture">
            <img src={nightpic.src} alt="" style={{ width: '320px' }} />
        </div>
      </div>
    </main>
    
  <div className = "footer">
    <footer>© 2023 Personal Website Isha Varrier | All Rights Reserved</footer>
  </div>
   


{/* {blogs.map((blog) =>(
  <BlogPreview 
    title={blog.title}
    date={blog.date}
    description={blog.description}
    slugURL={blog.slugURL}
    image={blog.image}
  />
))} */}

</div>
);
}




