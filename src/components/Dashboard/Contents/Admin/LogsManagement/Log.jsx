import { Row, Col, Button, Tag } from 'antd';
import { formatNumberToMoney } from '../../../../../utils/number';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const LogItem = ({ item }) => {
    return (
        <Row className='log-item' gutter={10}>
            <Col md={3}>
                <div className="log-icon">
                    <img src={item.icon} alt='' />
                </div>
            </Col>
            <Col md={12} className='log-detail-col'>
                <h4>{item.title}</h4>
                <p>Người dùng: {item.user}</p>
                <small>{item.createdAt}</small>
            </Col>
            <Col md={5}>
                <div className="log-amount">
                    <h4>{formatNumberToMoney(item.amount)}</h4>
                    <Tag color={(item.status === 'PENDING') ? 'blue' : 'green'}>{item.status}</Tag>
                </div>
            </Col>
            <Col md={4}>
                <div className="log-actions">
                    <Button shape='circle' type='primary' icon={<CheckOutlined />}></Button>
                    <Button shape='circle' type='primary' icon={<CloseOutlined />} danger></Button>
                </div>
            </Col>
        </Row>
    );
}

export default LogItem;