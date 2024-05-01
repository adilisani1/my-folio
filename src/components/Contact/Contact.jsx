import { useRef, useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";


const Contact = () => {
    const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

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
                    setSuccess(true)
                },
                (error) => {
                    setError(true);
                }
            );
    };

    return (
        <>

            <section id='Contact' className='contact-wrapper' data-scroll-section>
                <div className="contact-container" >
                    <div className='content-width'>
                        <div
                            ref={ref}
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
                                {/* <div className="contact-info" >
                                    <div className="item " >
                                        <h2>Mail</h2>
                                        <span>hello@react.dev</span>
                                    </div>
                                    <div className="item ">
                                        <h2>Phone</h2>
                                        <span>+1 234 5678</span>
                                    </div>
                                </div> */}

                                {/* <ul
                                    className="social-links flex items-center gap-3"
                                >
                                    <li>
                                        <a className=" shadow" href="#">
                                            <i className="icon ri-whatsapp-line"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="shadow " href="#">
                                            <i className="icon ri-twitter-line"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="shadow" href="#">
                                            <i className="icon ri-mail-line"></i>
                                        </a>
                                    </li>
                                </ul> */}

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
                                    <button>Submit</button>
                                    {error && "Error"}
                                    {success && "Success"}
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
