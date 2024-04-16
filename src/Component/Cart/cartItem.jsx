
import { useEffect, useState } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import ProductDetail from "../../Context";

function ModalFunction(props) {
    const { desDetails, heading } = props
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Events Description
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 className='mb-4'>{heading}</h4>
                <p>
                    {desDetails}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='danger' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}




const CartItem = (props) => {
    const { eachItem } = props
    const [modalShow, setModalShow] = useState(false);
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
                                    <button className="mt-3 btn btn-danger fw-bold" onClick={() => setModalShow(true)}>Know More</button>
                                    <ModalFunction
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                        desDetails={eachItem.miniDescription}
                                        heading={eachItem.eventName}
                                    />

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