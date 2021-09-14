import React from 'react'
import "./Contact.css"
import { FaFacebookSquare } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { MdCall } from "react-icons/md"
import { MdLocationOn } from "react-icons/md"

function Contact() {
    return (
        <section class="mainblock"> 
            <h2>Contact</h2> 
            <article className="contactcontainer">
            <p>You can use the following contact information to reach us:</p> 
            <ul>
                <li>
                    <FaFacebookSquare/>
                    <a href="https://facebook.com">Facebook</a>
                </li> 
                <li>
                    <MdEmail/>
                    <a href="mailto:john@example.com">Email</a>
                </li>
                <li>
                    <MdCall/>
                    <a href="tel:5551234567">Call us at 5551234567</a>
                </li>
                <li>
                    <MdLocationOn/>
                    <span>Bulevardul Tudor Vladimirescu, Iași 700305</span>
                </li>                 
            </ul>
            <p>Come meet us:</p> 
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.1171876920484!2d27.604073315825758!3d47.155559227019154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb919cde6215%3A0x5472ea6b8cbcbd4b!2sIulius%20Mall!5e0!3m2!1sen!2sro!4v1621523783313!5m2!1sen!2sro" 
            width="600" height="450" styles="border:0;" allowFullScreen="" loading="lazy"></iframe>
            

            </article>
        </section>
    )
}

export default Contact