import React, {useState} from 'react';
import * as firebase from 'firebase/app';
import { Axios, db, functions } from '../firebase/firebaseConfig'
import './styles/Contact.css';
import { emailMessage } from '../../../functions';

const Contact = (props) => {

    const [formData, setFormData] = useState({});

    const updateInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        sendEmail()
        setFormData({
            name: '',
            email: '',
            message: '',
        })
        alert('Thank you for your message! I will be in contact soon.')
    }

    const sendEmail = () => {
        const callable = functions.httpsCallable('emailMessage');
        return callable({
            name: formData.name,
            email: formData.email,
            message: formData.message
        })
        .then(res => {
        db.collection('emails').add({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            time: new Date(),
        })
        })
        .catch(error => {
        console.log(error)
        })
    }

    return (
        <section class='contact-wrapper'>
            <h3>>_Contact</h3>
            <section class='contact-con'> 
                <div class='contact-callout'>
                    <h4>Want to get in touch?</h4>
                    <h5>Let's talk!</h5>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={updateInput}
                        value={formData.name || ''}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={updateInput}
                        value={formData.email || ''}
                    />
                    <textarea
                        type="text"
                        name="message"
                        placeholder="Message"
                        onChange={updateInput}
                        value={formData.message || ''}
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </section>
    )
}

export default Contact;