import { useRef, useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    //Toaster
    const notify = () => toast.success('📧 Email Sent Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    // Error
    const errorToast = () => toast.error('❌ Error sending email', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_wlu74gc",
                "template_ykprq0c",
                formRef.current,
                "FYizqcCGK2NT0fWyT"

            )
            .then(
                (result) => {
                    setSuccess(true);
                    setError(false);
                    formRef.current.reset();
                    notify()
                },
                (error) => {
                    setError(true);
                    setSuccess(false);
                    errorToast();
                }
            );

    };

    return (
        <>

            <section id='Contact' className='contact-wrapper' >
                <div className="contact-container" >
                    <div className='content-width'>
                        <div
                            className="contact">
                            <div className="textContainer" >
                                <div className='get_in_touch_container'>
                                    <div className='touch-me'>
                                        <span className="touch-icon ri-shake-hands-line"></span>
                                        <p className='touch-text'>
                                            Get in touch
                                        </p>
                                    </div>
                                </div>
                                <h1 >Let's make your brand brilliant!</h1>
                                <p className="contact-text">
                                    Feel free to reach out if you have any questions or need help with a project
                                </p>

                            </div>

                            <div className="formContainer">
                                <form
                                    ref={formRef}
                                    onSubmit={sendEmail}>
                                    <div className="name-or-email">
                                        <input type="text" required placeholder="Name" name="name" />
                                        <input type="email" required placeholder="Email" name="email" />
                                    </div>
                                    <input type="tel" placeholder="Phone (Optional)" name="phone" />
                                    <textarea required rows={8} placeholder="Message" name="message" />
                                    <button type="submit">Submit</button>
                                    {error && "Error"}
                                    {success && "Email Sent Successfully"}


                                </form>
                            </div>


                        </div>

                    </div>

                </div>

            </section>
        </>
    );
};

export default Contact;
