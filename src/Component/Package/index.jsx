import { BiArrowFromLeft } from 'react-icons/bi'
import './style.css'

const packageList = [
    {
        id: 101,
        imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
        eventName: 'Basic decoration',
        tabId: 'PACKAGE',
        price: '3499',
        miniDescription: `Balloon decoration includes 200 number of balloons, Happy birthday Banner and kid’s name in foil balloon`
    },
    {
        id: 102,
        imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
        eventName: 'Simple decoration',
        tabId: 'PACKAGE',
        price: '4999',
        miniDescription: `Birthday foil drapes backdrop, Happy birthday banner, Kid’s Name, 2 small balloon Pilers and balloon bunches around the hall`
    },
    {
        id: 103,
        imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
        eventName: 'Silver Package',
        tabId: 'PACKAGE',
        price: '6999',
        miniDescription: `6x6 Round ring, organic shape arch, 1-Cylinder cake stand and table props for decor, LED Name, happy birthday banner or neon light, Balloon Bunches`
    },
    {
        id: 104,
        imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
        eventName: 'Golden Package',
        tabId: 'PACKAGE',
        price: '7999',
        miniDescription: `6x6 Round ring with customized backdrop, organic shape arch, 2 or 3 Cylinder cake stand and table props for decor, LED Name, happy birthday banner or neon light, Balloon Bunches, complimentary (knife & candle)`
    },
    {
        id: 105,
        imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
        eventName: 'Platinum Package',
        tabId: 'PACKAGE',
        price: '19999',
        miniDescription: `10x16 backdrop Frame or 10x12 back drop depends on decor, Chrome or retro balloons, happy birthday neon light & bday kid Age in neon light, Theme based cutouts, balloon for backdrop, 3 to5 Theme based Cylinder, Cake Stand, table props, LED Name, BABY box Grass Mat, 4 Par Lights, Welcome Board, Balloon bunches & arch, complimentary E-INVITE (20- caps, eye mask, blowouts 1 knife & 1-candle)`
    },
    {
        id: 106,
        imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
        eventName: 'Grand Package',
        tabId: 'PACKAGE',
        price: '24999',
        miniDescription: `10x16 Back drop in wood panel with flower bouquet organic shape retro balloon, cake cylinder 6 numbers, cup cake stands, props for the decor, 1 number neon light, grass mat, happy birthday neon light, par lights 4 numbers, baby name in LED light, welcome board, entrance designer arch and balloon bunches for the hall butterfly cutouts confetti balloons on stands, complimentary- E-INVITE chalk board (30- caps, eye mask, blowouts 1-knife & 1-candle)`
    },
    {
        id: 107,
        imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
        eventName: 'Diamond Package',
        tabId: 'PACKAGE',
        price: '29999',
        miniDescription: `10x20 Back drop with flowers organic shape retro balloon, cake table cart, cup cake stands, props for the decor, neon light, grass mat, happy birthday neon light + baby name, par lights 10 numbers, baby name in LED light, welcome board, entrance designer arch and balloon bunches for the hall butterfly cutouts, confetti balloons on stands, complimentary- E-INVITE chalk board (30- caps, eye mask, blowouts 1-knife & 1-candle)`
    },
    {
        id: 108,
        imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
        eventName: 'Theme decor Package',
        tabId: 'PACKAGE',
        price: '14999',
        miniDescription: `10x16 Back drop with organic shape pastel balloon, cake cylinders, cup cake stands, props for the decor, theme based cutouts & BABY box, neon number light, grass mat, happy birthday neon light, par lights 4 numbers, baby name in LED light, welcome board, balloon bunches for the hall, complimentary E-invite (knife & candle, 10 caps, 10 eye mask)`
    }
];

const Packages = () => {
    return (
        <div className='package-main'>
            <div className="contact-landing">
                <button className="btn landing-path">Home  <BiArrowFromLeft /> Package </button>
                <h1 className='contact-landing-heading mt-3'>Package</h1>
            </div>
            <div className="package-body">
                <h1 className="contact-landing-heading mt-4 mb-4">Choose Your Package</h1>
                <p className="package-main-des">
                    Immerse your child in a world of enchantment with our bespoke theme decor. From
                    underwater aquariums to captivating nature scenes, and even space adventures – we' l
                    tailor the decorations to match your child's unique interests and desires. Just name it,
                    and we' l make it a reality!
                </p>
                <ul className="package-list">
                    {
                        packageList.map((eachItem) => (
                            <li className="package-item">
                                <div className="package-image-item">
                                    <img src={eachItem.imageUrl} alt="package" className="package-image w-100" />
                                </div>
                                <div className="package-text-item mt-4 mt-md-0">
                                    <div className="package-text-item-header mt-4 mt-md-0">
                                        <p className="package-title">{eachItem.eventName}</p>
                                        <p className="package-price"> &#8377;  {Number(eachItem.price).toLocaleString()} </p>
                                    </div>
                                    <p className="package-des">{eachItem.miniDescription}</p>
                                </div>
                                <div className="package-button-item mt-4 mb-4 mb-md-0 mt-md-0">
                                    <button className="package-cart-button btn btn-success fw-bold">Add Cart</button>
                                </div>
                            </li>
                        ))
                    }



                </ul>
            </div>
        </div>
    )
}

export default Packages