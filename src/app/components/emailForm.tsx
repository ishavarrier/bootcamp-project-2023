"use client"
import React, {useState} from "react"
import emailjs from '@emailjs/browser'




const EmailForm = () => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_pxw9nl7';
        const templateId = 'template_roosgfl';
        const publicKey = 'zoBfP4SqqzZlYfkAe';

        const templateParams = {
            from_name: name,
            to_name: 'Isha',
            message: message
        };

        emailjs.send(serviceId,templateId,templateParams, publicKey)
            .then((response) => {
                console.log("success sent email" , response)
                setName('');
                setMessage('');
            })
            .catch((error) => {
                console.error('error during email' , error)
            });
    }

    return (
        <form onSubmit = {handleSubmit} className = 'emailForm'>
        <input
            type = "text"
            placeholder ="Your Name"
            value={name}
            onChange = {(e) => setName(e.target.value)}
        />
        <textarea
            cols = {30}
            rows = {10}
            placeholder="Your Message"
            value = {message}
            onChange = {(e) => setMessage(e.target.value)}
        ></textarea>
        <button type = "submit">Send Message</button>
        </form>
    )
}

export default EmailForm
