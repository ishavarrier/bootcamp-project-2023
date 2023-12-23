//import styles from './page.module.css'
import EmailForm from '../components/emailForm';
import '../myhomepage.css';

export default function Contact() {
return (
<div>
    <main>
        <h1 className = "page-title">Contact Me</h1>
        <EmailForm />
    </main>
    <div className = "footer">
      <footer>© 2023 Personal Website Isha Varrier | All Rights Reserved</footer>
   </div>
</div>
  )
}