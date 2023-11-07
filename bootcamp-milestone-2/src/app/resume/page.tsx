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
                    <h3 className="entry-title">Crotchet Calculator</h3>
                    <p className="entry-info">Developed a Javascript function to calculate number of stitches necessary to create crotchet tops
                    </p>
                </div>

                <div className = "entry">
                    <h3 className="entry-title">Personal Website</h3>
                    <p className="entry-info">Developed personal website over the summer with HTML, CSS, and Javascript. 
                    </p>
                    
                </div>
            </section>

            <section> <h2 className = "section-title">Experience</h2> 
                <div className = "entry">
                    <h3 className="entry-title">Software Engineering Intern</h3>
                    <p className="entry-info">Optum</p>
                    <p className="entry-description">Utilized IoT devices and Machine Learning to design solutions for stress in front-line workers</p>
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