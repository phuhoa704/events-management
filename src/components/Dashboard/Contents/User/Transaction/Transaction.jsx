import { Row, Col } from 'antd';
import { formatNumberToMoney } from '../../../../../utils/number';

const Transaction = ({ item }) => {
    return ( 
        <Row className='transaction-item' gutter={10}>
            <Col md={4}>
                <div className="transaction-icon">
                    <img src={item.icon} alt='' />
                </div>
            </Col>
            <Col md={14} className='transaction-detail-col'>
                <h4>{item.title}</h4>
                <p>{item.createdAt}</p>
                <small>Số dư tài khoản: **********</small>
            </Col>
            <Col md={6}>
                <div className="transaction-amount">
                    <h4>{(item.type === 'DEPOSIT') ? formatNumberToMoney(item.amount) : `-${formatNumberToMoney(item.amount)}`}</h4>
                </div>
            </Col>
        </Row>
    );
}

export default Transaction;