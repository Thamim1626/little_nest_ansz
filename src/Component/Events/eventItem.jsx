
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import ProductDetail from '../../Context';





const EventItems = (props) => {
    const { eachItem } = props
    return (
        <ProductDetail.Consumer>
            {
                value => {
                    const { allProductList, addCartItem } = value
                    const addCartItemTrigger = (id) => {
                        addCartItem(id)

                    }
                    return (
                        <li className="event-main-item" key={eachItem.id}>
                            <div className="event-item-image-section">
                                <img src={eachItem.imageUrl} className='event-item-image' alt={eachItem.eventName} />
                            </div>
                            <div className="event-item-second-section" >
                                <p className='event-item-name'>{eachItem.eventName}</p>
                                <p className='event-item-price'> $ {eachItem.price}</p>
                            </div>
                            <p className='event-item-mini-des'>{eachItem.miniDescription}</p>
                            <div className="event-item-footer">
                                <Popup

                                    trigger={
                                        <button className="event-item-footer-left">Know More</button>
                                    }
                                    position='center center'
                                    on={['hover', 'focus']}
                                    arrow={false}
                                    contentStyle={{
                                        transition: ' 0.6s ease-in-out', // Example transition timing
                                    }}
                                >
                                    <p className='event-item-modal'>{eachItem.description}</p>
                                </Popup>

                                <button className="event-item-footer-right" onClick={() => { addCartItemTrigger(eachItem.id, allProductList) }}  >Add to Cart</button>
                            </div>
                        </li>
                    )
                }
            }
        </ProductDetail.Consumer>

    )
}
export default EventItems

