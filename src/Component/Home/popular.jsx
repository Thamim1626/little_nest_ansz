import { Link } from "react-router-dom"
import EventItems from "../Events/eventItem"
const popularList = [
    {
        id: 19,
        imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
        eventName: 'Photography',
        price: '8500',
        miniDescription: `Candid moments captured with love, turning birthdays into timeless memories.`,
        description: ` From candid shots of children's laughter to group pictures
        showcasing the camaraderie among little friends, the
        photographs serve as cherished keepsakes that can be
        cherished for years to come. The photographer's keen eye
        also captures the intricate details of the party decor, the
        vibrant colors of balloons, and the delightfully decorated cake,
        preserving the efforts put into planning and organizing the
        event`
    }, {
        id: 20,
        imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
        eventName: 'Videography',
        price: '12000',
        miniDescription: `Vibrant video storytelling, encapsulating every birthday moment in cinematic brilliance.`,
        description: `Through the lens of the videographer, the essence of the party
        comes to life, showcasing the genuine emotions and uninhibited joy of
        the children as they partake in various games, dances, and activities.
        From the excitement of blowing out the candles to the delight of
        unwrapping gifts, every heartfelt moment is skillfully recorded.
        The video also becomes a fantastic way to share the celebration with
        friends and relatives who couldn't attend, enabling them to feel a
        part of the festivities from afar. Whether it's a traditional family
        gathering or a themed extravaganza, the videographer's artistry
        ensures that the essence of the kids' birthday party is preserved in a
        timeless and captivating manner.`
    }, {
        id: 21,
        imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
        eventName: 'Key Chain Making',
        price: '5000',
        miniDescription: `Key Chain Making – where every creation unlocks a world
        of joyful celebration!`,
        description: `Unlock the creativity at your child's birthday celebration with our
        Key Chain Making activity! Elevate the fun factor as young
        partygoers delve into the world of craftsmanship, creating
        personalized keychains that double as cherished keepsakes. Our
        crafting station is a hands-on haven where kids select their
        favorite colors, shapes, and charms, fashioning unique keychains to
        showcase their individual style`
    },
]
const PopularEvent = () => {
    return (
        <div className="event-main">
            <h1 className="popula-heading">- {'   '}Popular Events{'  '} -</h1>
            <ul className="event-main-list mt-3 mb-3">
                {
                    popularList.map((eachItem) => (
                        <EventItems eachItem={eachItem} key={eachItem.id} />
                    ))
                }
            </ul>

            <button className='btn btn-warning mb-4' style={{ width: '140px', alignSelf: 'center', fontWeight: 'bold' }}> <Link to='/events' style={{ textDecoration: 'none', color: 'white', width: '140px' }}>
                See More
            </Link></button>
        </div>
    )
}
export default PopularEvent