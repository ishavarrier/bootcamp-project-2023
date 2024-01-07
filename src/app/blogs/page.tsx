import React from 'react';
import styles from './page.module.css'
import blogs from '@/app/blogData';
import BlogPreview from '@/app/components/blogPreview';
import '@/app/myhomepage.css';



export default function Portfolio() {

    // const mainStyle = {
    //   paddingTop: '20px'
    // };

    // const linkStyle1 = {
    //   backgroundColor: '#9c432d'
    // }
    const firstBlog = blogs[0]
    console.log("this is the first blog" + firstBlog)

return (
<div>
    <main>
      <div >
        <h1 className = "page-title">My Blogs: Click  to View</h1>
      </div>

      <div>
        
        {blogs.map(blog => 
      <BlogPreview  {...blog} /> // This is how we call the component
		)}
        </div>
    </main>
    <div className = "footer">
      <footer>© 2023 Personal Website Isha Varrier | All Rights Reserved</footer>
   </div>
</div>
  )
}
