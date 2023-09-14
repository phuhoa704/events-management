import { cardData } from '../../configs/data';
import Card from '../../components/Card';
import { Row, Col } from 'antd';
import './style.scss';

const Deals = () => {
    return (
        <div className="deals">
            <div className="deals-content">
                <Row gutter={[10, 20]}>
                    {cardData.map(item => (
                        <Col md={24}>
                            <Card props={item} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Deals;