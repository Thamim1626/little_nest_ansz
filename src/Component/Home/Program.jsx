import { BiCustomize } from "react-icons/bi";
import { FaPersonCircleCheck, FaTrophy } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Program = () => {
    return (
        <div className="program-main">
            <div className="program-card" style={{ backgroundColor: '#fd4d40' }}>
                <div className="program-card-head" style={{ backgroundColor: '#fd4d40' }}>
                    <BiCustomize className="program-card-head-icons" />
                </div>
                <h1 className='program-card-heading'>CUSTOMIZED THEME DECOR</h1>
                <h3 className='program-card-sub-heading'> CONTACT US TODAY!</h3>
                <p className='program-card-des'>Immerse your child in a world of enchantment with our bespoke theme decor. From
                    underwater aquariums to captivating nature scenes, and even space adventures – we' l
                    tailor the decorations to match your child's unique interests and desires. Just name it,
                    and we' l make it a reality!</p>
                <button className="program-button btn btn-success">
                    <Link to='about' style={{ color: "white", textDecoration: 'none' }}>LEARN MORE</Link>  </button>
            </div>
            <div className="program-card" style={{ backgroundColor: '#f1c22e' }}>
                <div className="program-card-head" style={{ backgroundColor: '#f1c22e' }}>
                    <FaPersonCircleCheck className="program-card-head-icons" />
                </div>
                <h1 className='program-card-heading'> EXPERIENCED PROFESSIONALS</h1>
                <h3 className='program-card-sub-heading'>Unleashing Creativity</h3>
                <p className='program-card-des'> Our team of upmarket seasoned professionals is dedicated to delivering the highest
                    quality experience for your child's special day. With their exceptional ski ls and
                    attention to detail, we exceed your satisfaction with an attitude of care and passion</p>

                <button className="program-button btn btn-success"><Link to='about' style={{ color: "white", textDecoration: 'none' }}>LEARN MORE</Link></button>
            </div>

            <div className="program-card" style={{ backgroundColor: '#16c3b0' }}>
                <div className="program-card-head" style={{ backgroundColor: '#16c3b0' }}>
                    <FaTrophy className="program-card-head-icons" />
                </div>
                <h1 className='program-card-heading'> ARTISTS    GALOR</h1>
                <h3 className='program-card-sub-heading'> A World of Imagination!</h3>
                <p className='program-card-des'>
                    Make your celebration truly magical with our
                    range of talented artists. Watch in awe as
                    magicians perform mind-boggling tricks, let your imagination run wild with our ski led
                    tattoo and nail artists, capture memories with a delightful caricature, indulge in
                    delicious popcorn and cotton candy, and let our lively emcees keep the party spirit
                    alive!
                </p>

                <button className="program-button btn btn-success">
                    <Link to='about' style={{ color: "white", textDecoration: 'none' }}>LEARN MORE</Link>
                </button>
            </div>
        </div>
    )
}

export default Program