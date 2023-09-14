import { Row, Col } from 'antd';
import { dataAbout } from '../../configs/data';
import AboutCard from './Card';
import './style.scss';

const About = () => {
    return ( 
        <section className="about-container">
            <h2>Về chúng tôi</h2>
            <Row gutter={[15, 15]}>
                {dataAbout.map(item => (
                    <Col md={12} key={item.id}>
                        <AboutCard record={item}/>
                    </Col>
                ))}
            </Row>
        </section>
    );
}

export default About;