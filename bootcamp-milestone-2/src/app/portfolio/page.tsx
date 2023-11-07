//import styles from './page.module.css'
import '../myhomepage.css';

export default function Portfolio() {
  return (
<div>
    <main>
        <h1 className = "page-title">Portfolio</h1>
        <div className = "container1">

            <div className = "homepage_pic">
                <a href="index.html">
                    <img src="homepage.png" alt="Filler" />
                </a>
            </div>

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