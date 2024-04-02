import { Link } from "react-router-dom"
const Welcome = () => {
    return (
        <div className="welcome-main">
            <div className="welcome-inner d-flex flex-row justify-content-center  ">
                <img src='https://images.pexels.com/photos/7100327/pexels-photo-7100327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='birthday banner' className='welcome-image' />
            </div>
            <div className="welcome-inner p-5 d-flex flex-column">
                <p className='welcome-welcome'>Welcom to ....</p>
                <p className='welcome-welcome-des'>Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis iste natus error sitdolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent. Magna est consectetur interdum modest dictum.</p>
                <button className='btn welcome-button'>
                    <Link to='/contacts' style={{ textDecoration: 'none', color: 'inherit' }} >Contact</Link>
                </button>
            </div>

        </div>
    )
}

export default Welcome