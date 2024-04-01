import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoIosArrowRoundForward, IoIosTimer } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5"
import './style.css'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className='footer-main'>
            <div className='footer-main-inner'>
                <div className="footer-items">
                    <img src='https://ik.imagekit.io/9pisu4akvm/logo%20lse%20(4).png?updatedAt=1711686228905' alt='website logo' className='header-logo' />
                    <p className="footer-main-des">
                        At Little Smiles Events, we’re a passionate team of event planning and management
                        professionals who also happen to be dedicated to making a positive impact in our local and
                        global communities. We believe that events have the power to bring people together, to
                        inspire change, and to create moments of joy and connection that last a lifetime
                    </p>
                </div>
                <div className="footer-items">
                    <h1 className="footer-heading">Contact Info</h1>
                    <ul className="footer-contact-list">
                        <li className="footer-contact-item">

                            <CiLocationOn className="footer-contact-item-icons" />
                            <p className="footer-contact-item-des">99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>
                        </li>
                        <li className="footer-contact-item">

                            <IoCallOutline className="footer-contact-item-icons" />
                            <p className="footer-contact-item-des">
                                <a href="tel:+919019590310" style={{ textDecoration: 'none', color: 'inherit' }}>+91 9019590310</a>
                            </p>
                        </li>
                        <li className="footer-contact-item">

                            <CiMail className="footer-contact-item-icons" />
                            <p className="footer-contact-item-des">
                                <a href="tel:+91" style={{ textDecoration: 'none', color: 'inherit' }}>dummy main</a>
                            </p>
                        </li>
                        <li className="footer-contact-item">

                            <IoIosTimer className="footer-contact-item-icons" />
                            <p className="footer-contact-item-des">
                                <p style={{ textDecoration: 'none', color: 'inherit' }}>dummy timming</p>
                            </p>
                        </li>
                    </ul>

                </div>
                <div className="footer-items">
                    <h1 className="footer-heading">Useful Links</h1>
                    <ul className="footer-contact-list">
                        <li className="footer-contact-item">
                            <IoIosArrowRoundForward className="footer-contact-item-icons" />
                            <p className="footer-contact-item-des">
                                <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }} >Home</Link>
                            </p>
                        </li>
                        <li className="footer-contact-item">
                            <IoIosArrowRoundForward className="footer-contact-item-icons" />
                            <p className="footer-contact-item-des">
                                <Link to='/cartlist' style={{ textDecoration: 'none', color: 'inherit' }} >Cart</Link>
                            </p>
                        </li>
                        <li className="footer-contact-item">
                            <IoIosArrowRoundForward className="footer-contact-item-icons" />
                            <p className="footer-contact-item-des">
                                <Link to='/contacts' style={{ textDecoration: 'none', color: 'inherit' }} >Contact</Link>
                            </p>
                        </li>
                        <li className="footer-contact-item">
                            <IoIosArrowRoundForward className="footer-contact-item-icons" />
                            <p className="footer-contact-item-des">
                                <Link to='/events' style={{ textDecoration: 'none', color: 'inherit' }} >Events</Link>
                            </p>
                        </li>
                        <li className="footer-contact-item">
                            <IoIosArrowRoundForward className="footer-contact-item-icons" />
                            <p className="footer-contact-item-des">
                                <Link to='/about' style={{ textDecoration: 'none', color: 'inherit' }} >About</Link>
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="footer-items">
                    <h1 className="footer-heading">Get in Touch</h1>
                </div>
            </div>

        </div>
    )
}

export default Footer