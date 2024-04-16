import ProductDetail from "../../Context"
import { Link } from "react-router-dom"
import CartItem from "./cartItem"
import { useEffect } from "react"
import './style.css'

const sendWhatsappMessage = () => {
    const whatsappUrl = 'https://api.whatsapp.com/send/?phone=919361878011&text=Place+Order%0AName%20%3A%20Thamim%0A%0Aasdf%0Aasdf%0A&type=phone_number&app_absent=0';

    // Open the WhatsApp API link in a new window
    const whatsappWindow = window.open(whatsappUrl, '_blank');

    // Redirect the user to a success page
    window.location.href = '/success'; // Change '/success' to the URL of your success page
}


const Cart = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <ProductDetail.Consumer>
            {
                value => {
                    const { cartList } = value
                    const totalPrice = cartList.reduce((total, product) => parseInt(total) + parseInt(product.price), 0);
                    return (
                        <div className="cart-main">
                            <h1 className="cart-heading">Your Options</h1>

                            {cartList.length === 0 ? (
                                <div className="empty-cart">
                                    <img src='https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif' alt='cart' className="empty-cart-image" />
                                    <h1 className="empty-cart-heading">Your Cart Is Empty </h1>
                                    <Link to='/events' >
                                        <button className="btn btn-success fw-bolder mt-3 mb-4">Choose Events</button>
                                    </Link>

                                </div>
                            ) : (<ul className="cart-list">

                                {
                                    cartList.map((eachItem) => (
                                        <CartItem key={eachItem.id} eachItem={eachItem} />
                                    ))
                                }



                            </ul>)}

                            <div className="cart-total-main mt-5">
                                <h1 className="order-total">Order Total : <span className="order-total-span">{totalPrice}</span>   </h1>
                                <p className="number-order-item">1 items in cart</p>

                                {cartList.length !== 0 && (<button className="btn btn-success fw-bold mb-4 mt-2 cart-know-button " onClick={() => sendWhatsappMessage()}  >Checkout</button>)}
                            </div>
                        </div>
                    )
                }
            }
        </ProductDetail.Consumer>
    )
}

export default Cart


// <a href="https://api.whatsapp.com/send/?phone=919019590310&text=Place+Order%0AName%20%3A%20Thamim%0A%0Aasdf%0Aasdf%0A&type=phone_number&app_absent=0"><button className="btn btn-success fw-bold mb-4 mt-2 cart-know-button "  >Checkout</button></a>
