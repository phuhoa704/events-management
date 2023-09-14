import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { dataPopular } from '../../configs/data';
import PopularCard from './Card';
import './style.scss';

const Popular = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (
        <section className="popular">
            <h2>Tìm kiếm phổ biến</h2>
            <Carousel responsive={responsive} itemClass='popular_carousel_item' className="popular_carousel">
                {dataPopular.map(item => (
                    <PopularCard record={item} key={item.id}/>
                ))}
            </Carousel>
        </section>
    );
}

export default Popular;