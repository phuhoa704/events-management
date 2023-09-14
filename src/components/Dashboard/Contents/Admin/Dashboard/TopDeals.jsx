import { Row, Col, Avatar } from 'antd';
import { formatNumberToMoney } from '../../../../../utils/number';

const TopDeals = ({ item }) => {
    return ( 
        <Row gutter={5} className='top-deals-card'>
            <Col md={4}>
                <Avatar style={{ backgroundColor: item.color }}>{item.avatarCode}</Avatar>
            </Col>
            <Col md={13}>
                <h4>{item.name}</h4>
                <small>{item.email}</small>
            </Col>
            <Col md={7} style={{ textAlign: 'right' }}>
                <h4>{formatNumberToMoney(item.totalDeals)}</h4>
            </Col>
        </Row>
    );
}

export default TopDeals;