import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import './styled.css'
import { useState } from "react";
const HeaderOne = () => {
    const [hoverNumber, updateHoverNumber] = useState(false)
    return (
        <div className="header-one-main">
            <div className="header-one-left d-none d-md-flex ">
                <a href="tel:+91 9019590310" className="headerone-number" onMouseEnter={(e) => (updateHoverNumber(true))} onMouseLeave={(e) => (updateHoverNumber(false))}>
                    {hoverNumber ? 'Click to Call' : '  +91 9019590310'}
                </a>
            </div>
            <div className="header-one-left d-flex d-md-none"></div>
            <div className="header-one-right d-flex f-row align-center justify-content-center">
                <a href="http://">                <FaFacebookSquare style={{ color: '#076feb' }} className="headerone-icons" /></a>

                <FiInstagram style={{
                    color: '#ff00cc',
                }} className="headerone-icons" />
                <FaLinkedin style={{ color: '#0b66c2' }} className="headerone-icons" />
                <FaSquareXTwitter style={{ color: 'black' }} className="headerone-icons" />
            </div>

        </div>
    )
}

export default HeaderOne