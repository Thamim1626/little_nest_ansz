import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
const bgUrl = ['https://images.pexels.com/photos/2093717/pexels-photo-2093717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/3534022/pexels-photo-3534022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/4262415/pexels-photo-4262415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']

const Landing = () => {
    const [bgUrlIndex, updateBgUrlIndex] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            updateBgUrlIndex(prevIndex => {
                if (prevIndex < 2) {
                    return prevIndex + 1;
                } else {
                    return 0;
                }
            });
        }, 3000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="main-landing" style={{ backgroundImage: `url(${bgUrl[bgUrlIndex]})` }}>

            <div className="main-landing-left">
                <div className="landing-text-section">
                    <p className="landing-des mb-4">Welcome to Little Events</p>
                    <h1 className="landing-heading mb-4">Makes Birthdays Extraordinary!</h1>

                    <button className="landing-button btn">
                        <Link to='/events' style={{ textDecoration: 'none', color: 'inherit' }} >Explore</Link>
                    </button>

                </div>

            </div>

            <div className="main-landing-right "></div>

        </div>
    )
}

export default Landing