//import styles from './page.module.css'
import '../myhomepage.css';

export default function Resume() {
  return (
<div>
    <main>

    <div className="resume.container">
        <h1 className = "page-title-resume">Resume</h1>
        
        <div className = " resume">
            <section> <h2 className = "section-title">Education</h2> 
                <div className = "entry">
                    <h3 className="entry-title">Bachelors of Science in Computer Science</h3>
                    <p className="entry-info">California Polytechnic State University, San Luis Obispo </p>
                    <p className="entry-info">May 2027</p>
                </div>
            </section>

            <section> <h2 className = "section-title">Coursework</h2>
                <ul className = "course-list">
                    <li>Fundamentals of Computer Science - Fall</li>
                    <li>Data Structures - Winter</li>
                    <li>Project-Based Object-Oriented Programming and Design - Spring</li>
                  </ul>
            </section>

            <section> <h2 className = "section-title">Skills</h2>
                <ul className = "skill-list">
                    <li>Python</li>
                    <li>Javascript</li>
                  </ul>
            </section>

            <section> <h2 className = "section-title">Projects</h2>
                <div className = "entry">
                    <h3 className="entry-title">Personal Website</h3>
                    <p className="entry-info">Developed personal website with Hack4Impact!
                    </p>
                    
                </div>
            </section>

            <section> <h2 className = "section-title">Experience</h2> 
                <div className = "entry">
                    <h3 className="entry-title">Software Developer</h3>
                    <p className="entry-info">Hack4Impact</p>
                    <p className="entry-description">Utilized React and NextJS for my Personal Website</p>
                </div>
            </section>

            <section> <h2 className = "section-title">Interests</h2> </section>
                <ul className = "interest-list">
                <li>Hiking</li>
                <li>Drinking Chai</li>
                <li>Trying New Foods</li>
                <li>Watching The Office</li>
              </ul>
        </div>
    </div>
    </main>

    <div className = "footer">
        <footer>© 2023 Personal Website Isha Varrier | All Rights Reserved</footer>
     </div>

</div>
  )
}