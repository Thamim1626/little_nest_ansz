import { MdOutlineDeleteOutline } from "react-icons/md";
import Popup from 'reactjs-popup';
import ProductDetail from "../../Context";
const CartItem = (props) => {
    const { eachItem } = props
    const { id, imageUrl, eventName, price, miniDescription, description } = eachItem

    return (
        <ProductDetail.Consumer>
            {
                value => {
                    const { removeCartItem } = value
                    const removeCartItemTrigger = (id) => {
                        removeCartItem(id)
                    }
                    return (
                        <li className="cart-item">
                            <div className="cart-item-left">
                                <img src={imageUrl} alt={eventName} className="cart-item-images" />
                                <div className="cart-item-text">
                                    <h1 className="cart-item-text-heading">{eventName}</h1>
                                    <p className="cart-items-price">{price}</p>
                                    <Popup

                                        trigger={
                                            <button className="btn cart-know-button">Know More</button>
                                        }
                                        position='center center'
                                        on={['hover', 'focus']}
                                        arrow={false}
                                        contentStyle={{
                                            transition: ' 0.6s ease-in-out', // Example transition timing
                                        }}
                                    >
                                        <p className='event-item-modal'>{description}</p>
                                    </Popup>

                                </div>
                            </div>
                            <div className="cart-item-right">
                                <MdOutlineDeleteOutline className="cart-del-button " onClick={() => { removeCartItemTrigger(id) }} />
                            </div>
                        </li>
                    )
                }
            }
        </ProductDetail.Consumer>

    )
}

export default CartItem