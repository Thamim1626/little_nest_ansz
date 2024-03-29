import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiShoppingCart } from "react-icons/gi";

const HeaderTwo = () => {
    return (
        <div className="headerTwo-main">
            <img src='https://ik.imagekit.io/9pisu4akvm/logo%20lse%20(4).png?updatedAt=1711686228905' alt='website logo' className='header-logo' />
            <div className="sm-icons-con d-flex">
                <div className="header-cart-container d-flex">
                    <GiShoppingCart className="headertwo-menu  " />
                    <p className="header-cart-count m-0">0</p>
                </div>
                <RxHamburgerMenu className="headertwo-menu d-sm-none" />

            </div>

            <ul className="header-nav-list d-none d-sm-flex">
                <li className="header-nav-items">
                    <a href="http://" className="header-nav-items-link">Home</a>
                </li>
                <li className="header-nav-items">
                    <a href="http://" className="header-nav-items-link">About</a>
                </li>
                <li className="header-nav-items">
                    <a href="http://" className="header-nav-items-link">Events</a>
                </li>
                <li className="header-nav-items">
                    <a href="http://" className="header-nav-items-link">Contact</a>
                </li>
            </ul>
            <div className="header-cart-container d-flex">
                <GiShoppingCart className="headertwo-menu" />
                <p className="header-cart-count m-0">0</p>
            </div>
        </div >
    )
}
export default HeaderTwo