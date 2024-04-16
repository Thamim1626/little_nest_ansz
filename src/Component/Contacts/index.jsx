import { BiArrowFromLeft } from 'react-icons/bi'
import './style.css'
import { useEffect, useState } from 'react'
import ProductDetail from '../../Context'

const Contacts = () => {
    const [formDetails, updateFormDetails] = useState({
        name: '',
        email: '',
        number: '',
        city: '',
        subject: ''
    })
    const [finalFormDetail, updateFinal] = useState({})
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ProductDetail.Consumer>
            {
                value => {
                    return (
                        <div className="contact-main">
                            <div className="contact-landing">
                                <button className="btn landing-path">Home  <BiArrowFromLeft /> Contact </button>
                                <h1 className='contact-landing-heading mt-3'>Contact</h1>
                            </div>
                            <div className="contact-body mt-5">
                                <p className="contact-body-heading w-100">Contact Little Smile Event</p>
                                <p className="contact-body-sub-heading w-100">Have question ?</p>
                                <p className="contact-body-des w-100 mb-5">Feel free to get in touch with our welcoming team for any inquiries or assistance you may need. Your feedback holds significant value for us, and we're committed to providing the support you require. Reach out to us today, and let's begin the dialogue.</p>
                                <div className="contact-body-inner  ">
                                    <h1 className="contact-body-inner-heading">Mobile</h1>
                                    <p className="contact-body-inner-des mb-2">Have any further Questions? Get in touch:</p>
                                    <a href="tel:+919019590310" className="contact-inner-link">9019590310</a>
                                </div>
                                <div className="contact-body-inner  ">
                                    <h1 className="contact-body-inner-heading">Email</h1>
                                    <p className="contact-body-inner-des  mb-2">Drop us a line</p>
                                    <a href="mailto:littlesmilesevents" className="contact-inner-link">littlesmilesevents</a>
                                </div>
                            </div>
                            <form action="" className="contact-form-main" onSubmit={(e) => {
                                e.preventDefault()
                                updateFinal(formDetails)
                            }}>
                                <h1 className="form-heading">Enquire Form</h1>
                                <div className="enquire-input-container">
                                    <label htmlFor="nameid" className="enquire-label">Name</label>
                                    <input type="text" id='nameid' placeholder='Enter Name' className="enquire-input" value={formDetails.name} required onChange={(e) => { updateFormDetails({ ...formDetails, name: e.target.value }) }} />
                                </div>
                                <div className="enquire-input-container">
                                    <label htmlFor="emailid" className="enquire-label">Email</label>
                                    <input type="email" id='emailid' placeholder='Enter Mail' className="enquire-input" value={formDetails.email} required onChange={(e) => { updateFormDetails({ ...formDetails, email: e.target.value }) }} />
                                </div>
                                <div className="enquire-input-container">
                                    <label htmlFor="numberId" className="enquire-label">Number</label>
                                    <input type="number" id='numberId' placeholder='Enter Number' className="enquire-input" value={formDetails.number} required onChange={(e) => { updateFormDetails({ ...formDetails, number: e.target.value }) }} />
                                </div>
                                <div className="enquire-input-container">
                                    <label htmlFor="cityId" className="enquire-label">City</label>
                                    <input type="text" id='cityId' placeholder='Enter City' className="enquire-input" value={formDetails.city} required onChange={(e) => { updateFormDetails({ ...formDetails, city: e.target.value }) }} />
                                </div>
                                <div className="enquire-input-container-text d-flex flex-column mt-4">
                                    <label htmlFor="subjectId" className="enquire-label">Subject</label>
                                    <textarea name="" id="subjectId" placeholder='Message...' cols="30" rows="6" className="enquire-input" value={formDetails.subject} required onChange={(e) => { updateFormDetails({ ...formDetails, subject: e.target.value }) }}></textarea>
                                </div>
                                <div className="button-container">

                                    <button type='submit' className='contact-form-button  mt-4'>Submit</button>
                                </div>
                            </form >
                        </div >
                    )
                }
            }
        </ProductDetail.Consumer>

    )
}

export default Contacts