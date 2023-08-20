import Marquee from "react-fast-marquee";
import agoda from '../../assets/marquee/agoda.jpg';
import booking from '../../assets/marquee/booking.png';
import expedia from '../../assets/marquee/expedia.png';
import traveloka from '../../assets/marquee/traveloka.png';
import trip from '../../assets/marquee/trip.png';
import vietnambooking from '../../assets/marquee/vietnambooking.png';
import './style.scss';

const FastMarquee = () => {
    const items = [
        { id: 1, content: <div className='marquee_container'><img src={agoda} alt='' /></div> },
        { id: 2, content: <div className='marquee_container'><img src={booking} alt='' /></div> },
        { id: 3, content: <div className='marquee_container'><img src={expedia} alt='' /></div> },
        { id: 4, content: <div className='marquee_container'><img src={traveloka} alt='' /></div> },
        { id: 5, content: <div className='marquee_container'><img src={trip} alt='' /></div> },
        { id: 6, content: <div className='marquee_container'><img src={vietnambooking} alt='' /></div> }
    ]
    return (
        <Marquee style={{ margin: '20px 0' }}>
            {items.map(item => (
                <div key={item.id}>
                    {item.content}
                </div>
            ))}
        </Marquee>
    );
}

export default FastMarquee;