
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import ProductDetail from '../../Context';


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



const EventItems = (props) => {
    const { eachItem } = props
    const [modalShow, setModalShow] = useState(false);
    return (
        <ProductDetail.Consumer>
            {
                value => {
                    const { allProductList, addCartItem } = value
                    const addCartItemTrigger = (id) => {
                        addCartItem(id)

                    }
                    console.log(eachItem.miniDescription)
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


                                <>
                                    <button className="event-item-footer-left" onClick={() => setModalShow(true)}>Know More</button>

                                    <ModalFunction
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                        desDetails={eachItem.miniDescription}
                                        heading={eachItem.eventName}
                                    />
                                </>

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

