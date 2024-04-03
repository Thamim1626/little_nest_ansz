import { Link, useLocation } from "react-router-dom";
import Popup from 'reactjs-popup';
import { RxHamburgerMenu } from "react-icons/rx";
import { GiShoppingCart } from "react-icons/gi";
import { useEffect, useState } from "react";
import ProductDetail from "../../Context";
const HeaderTwo = () => {
    const [cartCount, updateCartCount] = useState(0)
    const location = useLocation();
    return (
        <ProductDetail.Consumer>
            {
                value => {
                    const { cartList } = value
                    updateCartCount(cartList.length)

                    return (
                        <div className="headerTwo-main">
                            <img src='https://ik.imagekit.io/9pisu4akvm/logo%20lse%20(4).png?updatedAt=1711686228905' alt='website logo' className='header-logo' />
                            <div className="sm-icons-con d-flex d-sm-none flex-row">
                                <Link to='/cartlist' >
                                    <div className="header-cart-container d-flex">
                                        <GiShoppingCart className="headertwo-menu  " />
                                        <p className="header-cart-count " style={{ backgroundColor: cartCount > 0 ? 'green' : 'rgb(31, 79, 130)' }} >{cartCount}</p>
                                    </div>
                                </Link>
                            </div>

                            <ul className="header-nav-list d-none d-sm-flex">
                                <li className="header-nav-items">
                                    <Link to='/' className="header-nav-items-link" style={location.pathname === '/' ? { color: 'white', backgroundColor: 'orange', padding: '4px 8px', borderRadius: '4px' } : { color: 'black' }}>Home</Link>
                                </li>
                                {/* <li className="header-nav-items">
                                    <Link to='/about' className="header-nav-items-link" style={location.pathname === '/about' ? { color: 'white', backgroundColor: 'orange', padding: '4px 8px', borderRadius: '4px' } : { color: 'black' }}>About</Link>
                                </li> */}
                                <li className="header-nav-items">
                                    <Link to='/events' className="header-nav-items-link" style={location.pathname === '/events' ? { color: 'white', backgroundColor: 'orange', padding: '4px 8px', borderRadius: '4px' } : { color: 'black' }}>Events</Link>
                                </li>
                                <li className="header-nav-items">
                                    <Link to='/contacts' className="header-nav-items-link" style={location.pathname === '/contacts' ? { color: 'white', backgroundColor: 'orange', padding: '4px 8px', borderRadius: '4px' } : { color: 'black' }}>Contact</Link>

                                </li>
                            </ul><Popup
                                trigger={<RxHamburgerMenu className="headertwo-menu mt-2 d-sm-none" />}
                                modal
                                nested
                            >
                                {close => (
                                    <div className="menu-main">
                                        <div className="menu-main-inner">
                                            <p className="close-button-menu" onClick={() => { close() }}>X</p>
                                            <div className="sm-menu-list">
                                                <li className="sm-menu-item" onClick={() => { close() }}>
                                                    <Link to='/' className="header-nav-items-link-sm" style={location.pathname === '/' ? { color: 'white', backgroundColor: 'orange', padding: '4px 8px', borderRadius: '4px' } : { color: 'black' }}>Home</Link>
                                                </li>
                                                {/* <li className="sm-menu-item" onClick={() => { close() }}>
                                                    <Link to='/about' className="header-nav-items-link-sm" style={location.pathname === '/about' ? { color: 'white', backgroundColor: 'orange', padding: '4px 8px', borderRadius: '4px' } : { color: 'black' }}>About</Link>
                                                </li> */}
                                                <li className="sm-menu-item" onClick={() => { close() }}>
                                                    <Link to='/events' className="header-nav-items-link-sm" style={location.pathname === '/events' ? { color: 'white', backgroundColor: 'orange', padding: '4px 8px', borderRadius: '4px' } : { color: 'black' }}>Events</Link>
                                                </li>
                                                <li className="sm-menu-item" onClick={() => { close() }}>
                                                    <Link to='/contacts' className="header-nav-items-link-sm" style={location.pathname === '/contacts' ? { color: 'white', backgroundColor: 'orange', padding: '4px 8px', borderRadius: '4px' } : { color: 'black' }}>Contact</Link>
                                                </li>
                                            </div>
                                            <div className="sm-menu-footer"></div>
                                        </div>

                                    </div>
                                )}
                            </Popup>


                            <Link to='/cartlist' >
                                <div className="header-cart-container d-none d-sm-flex">
                                    <GiShoppingCart className="headertwo-menu" />
                                    <p className="header-cart-count " style={{ backgroundColor: cartCount > 0 ? 'green' : 'rgb(31, 79, 130)' }}>{cartCount}</p>
                                </div>
                            </Link>
                        </div >
                    )
                }
            }
        </ProductDetail.Consumer >

    )
}
export default HeaderTwo