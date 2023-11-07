//import styles from './page.module.css'
import '../myhomepage.css';

export default function Portfolio() {
return (
<div>
    <main>
        <h1 className = "page-title">Contact</h1>
        <form id="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Name" required />
            <br /><br />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Email" required />
            <br/><br/>

        <label htmlFor="message">Message:</label>
        <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
        ></textarea>
        <br /><br />

        <input type="submit" value="Submit" />
        </form>
    </main>
    <div className = "footer">
      <footer>© 2023 Personal Website Isha Varrier | All Rights Reserved</footer>
   </div>
</div>
  )
}