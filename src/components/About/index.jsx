import { Row, Col, Typography } from 'antd';
import { dataAbout } from '../../configs/data';
import AboutCard from './Card';
import './style.scss';

const { Title } = Typography;

const About = () => {
    return ( 
        <section className="about-container">
            <Title level={3} style={{ textAlign: 'left', fontWeight: 500 }}>Về chúng tôi</Title>
            <Row gutter={[15, 15]}>
                {dataAbout.map(item => (
                    <Col md={12}>
                        <AboutCard record={item}/>
                    </Col>
                ))}
            </Row>
        </section>
    );
}

export default About;