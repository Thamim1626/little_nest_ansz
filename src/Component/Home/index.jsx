import Landing from './landing'
import './style.css'
import Program from "./Program";
import UpperFooter from '../Footer/upperFooter';
import Welcome from './welcome';
import HomeCount from './homeCount';
import PopularEvent from './popular';
import WhyChooseUs from './whychooseus';
import { useEffect } from 'react';


const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='main-home'>
            <Landing />
            <Program />
            <Welcome />
            <HomeCount />
            <PopularEvent />
            <WhyChooseUs />
            <UpperFooter />
        </div>
    )
}

export default Home