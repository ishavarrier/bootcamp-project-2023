import React from 'react';
import styles from './page.module.css'
import blogs from '@/app/blogData';
import BlogPreview from '@/app/components/blogPreview';
import '@/app/myhomepage.css';



export default function Portfolio() {
  

    const mainStyle = {
      paddingTop: '20px'
    };

    const linkStyle1 = {
      backgroundColor: '#9c432d'
    }


return (
<div>
    <main style = {mainStyle}>
      <div >
        <h1 className = "page-title">My Blogs: Click  to View</h1>
      </div>

        <div >
        {blogs.map((blog: { title: string; date: Date; shortdescription: string; description: string; slugURL: string; image: string; }) =>(
        <BlogPreview 
            title={blog.title}
            date={blog.date}
            shortdescription = {blog.shortdescription}
            description={blog.description}
            slugURL={blog.slugURL}
            image={blog.image} comments={[]}  />
        ))}
        </div>
    </main>
    <div className = "footer">
      <footer>© 2023 Personal Website Isha Varrier | All Rights Reserved</footer>
   </div>
</div>
  )
}
