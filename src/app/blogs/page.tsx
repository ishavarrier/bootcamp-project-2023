import React from 'react';
import styles from './page.module.css'
import blogs from '@/app/blogData';
import BlogPreview from '@/app/components/blogPreview';
import '@/app/myhomepage.css';



export default async function BlogMain() 
{
  console.log("props for Blog Preview" + blogs)

return (
<div>
    <main>
      <div >
        <h1 className = "page-title">My Blogs: Click  to View</h1>
      </div>

      <div>
        
        {blogs.map((blog) => (
          <BlogPreview {...blog}          /> // This is how we call the component
		))}
        </div>
    </main>
    <div className = "footer">
      <footer>© 2023 Personal Website Isha Varrier | All Rights Reserved</footer>
   </div>
</div>

  )
}
