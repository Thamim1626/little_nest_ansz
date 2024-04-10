import { BiArrowFromLeft } from 'react-icons/bi'
import './style.css'
import { useEffect } from 'react';

const packageList = [
    {
        id: 101,
        imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
        eventName: 'Basic decoration',
        tabId: 'PACKAGE',
        price: '3499',
        miniDescription: [
            {
                "id": "1011",
                "name": "Balloon decoration includes 200 number of balloons"
            },
            {
                "id": "1012",
                "name": "Happy birthday Banner"
            },
            {
                "id": "1013",
                "name": "Kid’s name in foil balloon"
            }
        ]
    },
    {
        id: 102,
        imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
        eventName: 'Simple decoration',
        tabId: 'PACKAGE',
        price: '4999',
        miniDescription: [
            {
                "id": "1021",
                "name": "Birthday foil drapes backdrop"
            },
            {
                "id": "1022",
                "name": "Happy birthday banner"
            },
            {
                "id": "1023",
                "name": "kid’s name in foil balloon"
            },
            {
                "id": "1024",
                "name": "2 small balloon Pilers"
            },
            {
                "id": "1025",
                "name": "Balloon bunches around the hall"
            }
        ]

    },
    {
        id: 103,
        imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
        eventName: 'Silver Package',
        tabId: 'PACKAGE',
        price: '6999',
        miniDescription: [
            {
                "id": "1031",
                "name": "6x6 Round ring"
            },
            {
                "id": "1032",
                "name": "Organic shape arch"
            },
            {
                "id": "1033",
                "name": "1-Cylinder cake stand"
            },
            {
                "id": "1034",
                "name": "Table props for decor"
            },
            {
                "id": "1035",
                "name": "LED Name"
            },
            {
                "id": "1036",
                "name": "happy birthday banner or neon light"
            },
            {
                "id": "1037",
                "name": "Balloon Bunches."
            }
        ]

    },
    {
        id: 104,
        imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
        eventName: 'Golden Package',
        tabId: 'PACKAGE',
        price: '7999',
        miniDescription: [
            {
                "id": "1041",
                "name": "6x6 Round ring with customized backdrop"
            },
            {
                "id": "1042",
                "name": "Organic shape arch"
            },
            {
                "id": "1043",
                "name": "2 or 3 Cylinder cake stand"
            },
            {
                "id": "1044",
                "name": "Table props for decor"
            },
            {
                "id": "1045",
                "name": "LED Name"
            },
            {
                "id": "1046",
                "name": "Happy birthday banner or neon light Balloon Bunches."
            },
            {
                "id": "1047",
                "name": "Complimentary (knife & candle)"
            }
        ]

    },
    {
        id: 105,
        imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
        eventName: 'Platinum Package',
        tabId: 'PACKAGE',
        price: '19999',
        miniDescription: [
            {
                "id": "1051",
                "name": "10x16 backdrop Frame or 10x12 back drop depends on decor"
            },
            {
                "id": "1052",
                "name": "Chrome or retro balloons"
            },
            {
                "id": "1053",
                "name": "Happy birthday neon light & bday kid Age in neon light"
            },
            {
                "id": "1054",
                "name": "Theme based cutouts"
            },
            {
                "id": "1055",
                "name": "Balloon for backdrop"
            },
            {
                "id": "1056",
                "name": "3 to5 Theme based Cylinder"
            },
            {
                "id": "1057",
                "name": "Cake Stand"
            },
            {
                "id": "1058",
                "name": "Table props & LED Name"
            },
            {
                "id": "1059",
                "name": "BABY box Grass Mat"
            },
            {
                "id": "1060",
                "name": "4 Par Lights & Welcome Board"
            },
            {
                "id": "1061",
                "name": "Balloon bunches & arch"
            }
        ]
        ,
        disclaimer: 'complimentary E-INVITE (20- caps, eye mask, blowouts 1 knife & 1-candle) '
    },
    {
        id: 106,
        imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
        eventName: 'Grand Package',
        tabId: 'PACKAGE',
        price: '24999',
        miniDescription: [
            {
                "id": "1061",
                "name": "10x16 Back drop in wood panel with flower bouquet organic shape retro balloon"
            },
            {
                "id": "1062",
                "name": "Cake cylinder 6 numbers"
            },
            {
                "id": "1063",
                "name": "Cup cake stands"
            },
            {
                "id": "1064",
                "name": "Props for the decor"
            },
            {
                "id": "1065",
                "name": "1 number neon light & Grass mat"
            },
            {
                "id": "1066",
                "name": "Happy birthday neon light"
            },
            {
                "id": "1067",
                "name": "Par lights 4 numbers"
            },
            {
                "id": "1068",
                "name": "Baby name in LED light"
            },
            {
                "id": "1069",
                "name": "Welcome board"
            },
            {
                "id": "1070",
                "name": "Entrance designer arch and balloon bunches for the hall butterfly cutouts confetti balloons on stands"
            }
        ]
        ,
        disclaimer: 'complimentary- E-INVITE  chalk board (30- caps, eye mask, blowouts 1-knife & 1-candle)'
    },
    {
        id: 107,
        imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
        eventName: 'Diamond Package',
        tabId: 'PACKAGE',
        price: '29999',
        miniDescription: [
            {
                "id": "1071",
                "name": "10x20 Back drop with flowers organic shape retro balloon"
            },
            {
                "id": "1072",
                "name": "Cake table cart"
            },
            {
                "id": "1073",
                "name": "Cup cake stands & Props for the decor"
            },
            {
                "id": "1074",
                "name": "Neon light & Grass mat"
            },
            {
                "id": "1075",
                "name": "Happy birthday neon light + baby name"
            },
            {
                "id": "1076",
                "name": "Par lights 10 numbers"
            },
            {
                "id": "1077",
                "name": "Baby name in LED light & Welcome board"
            },
            {
                "id": "1078",
                "name": "Entrance designer arch and balloon bunches for the hall butterfly cutouts, confetti balloons on stands"
            }
        ]
        ,
        disclaimer: 'complimentary- E-INVITE  chalk board (30- caps, eye mask, blowouts 1-knife & 1-candle)'
    },
    {
        id: 108,
        imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
        eventName: 'Theme decor Package',
        tabId: 'PACKAGE',
        price: '14999',
        miniDescription: [
            { "id": 1081, "name": "10x16 Back drop with organic shape pastel balloon" },
            { "id": 1082, "name": "Cake cylinders, Cup cake stands" },
            { "id": 1083, "name": "Props for the decor" },
            { "id": 1084, "name": "Theme based cutouts & BABY box" },
            { "id": 1085, "name": "Neon number light & Grass mat" },
            { "id": 1086, "name": "Happy birthday neon light" },
            { "id": 1087, "name": "Par lights 4 numbers" },
            { "id": 1088, "name": "Baby name in LED light" },
            { "id": 1089, "name": "Welcome board & Balloon bunches for the hall." }
        ]

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
                        packageList.map((eachItem) => {


                            return (

                                <li className="package-item" key={eachItem.id}>
                                    <div className="package-image-item">
                                        <img src={eachItem.imageUrl} alt="package" className="package-image w-100" />
                                    </div>
                                    <div className="package-text-item mt-4 mt-md-0">
                                        <div className="package-text-item-header mt-4 mt-md-0">
                                            <p className="package-title">{eachItem.eventName}</p>
                                            <p className="package-price"> &#8377;  {Number(eachItem.price).toLocaleString()} </p>
                                        </div>
                                        <ul className="package-des-list">
                                            {
                                                eachItem.miniDescription.map((items) => {
                                                    console.log(items)
                                                    return (

                                                        <li className="package-des-item mt-2" key={items.id}>{items.name}</li>
                                                    )
                                                })
                                            }

                                        </ul>
                                        {/* <p className="package-des">{eachItem.miniDescription}</p> */}
                                    </div>
                                    <div className="package-button-item mt-4 mb-4 mb-md-0 mt-md-0">
                                        <button className="package-cart-button btn btn-success fw-bold">Add Cart</button>
                                    </div>
                                </li>
                            )
                        })
                    }



                </ul>
            </div>
        </div>
    )
}

export default Packages