import { Link } from 'react-router-dom'
import './style.css'

const UpperFooter = () => {
    return (
        <div className='upper-footer p-4'>
            <div className='upper-footer-left'>
                <h1 className="upper-footer-heading">Let's Connect with us</h1>
                <p className="upper-footer-des">We Provide the best custom Decoration For You</p>
            </div>
            <div className='upper-footer-right'>
                <Link to='/contacts'>
                    <button className="btn upper-footer-button">CONTACT US</button>
                </Link>

            </div>

        </div>
    )
}
export default UpperFooter