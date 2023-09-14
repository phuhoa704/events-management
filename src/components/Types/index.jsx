import Carousel from 'react-multi-carousel';
import TypeItem from './Item';
import { types } from '../../configs/data';
import './style.scss';

const Types = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 6
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 5
        }
    };
    return ( 
        <Carousel responsive={responsive} itemClass='type_carousel_item' className="type_carousel">
            {types.map(item => (
                <TypeItem item={item} key={item.id}/>
            ))}
        </Carousel>
    );
}

export default Types;