//import styles from './page.module.css'
import Link from 'next/link';
import '../myhomepage.css';
import homepagepic from '@/app/images/homepage.png'
import Image, { StaticImageData } from "next/image";


export default function Portfolio() {
  return (
<div>
    <main>
        <h1 className = "page-title">Portfolio</h1>
        <div className = "container1">

        <div className="project"><Link href="../"><Image src={homepagepic.src} alt="Homepage screenshot to show in portfolio." width={800} height={500} ></Image></Link></div>

            <div className = "project-details">
                <p className = "project-name">Isha Varrier's Website</p>
                <p className = "project-description">This project is designed using HTML and CSS from the Hack4Impact starter pack. Please check it out!</p>
                <a href="index.html">LEARN MORE</a>
            </div>

        </div>

    </main>

    <div className = "footer">
        <footer>© 2023 Personal Website Isha Varrier | All Rights Reserved</footer>
    </div>
</div>
  )
}