import { useState } from 'react';
import { Row, Col, Button } from 'antd';
import { userLogs } from '../../../../../configs/data';
import Transaction from './Transaction';
import { TRANSACTION_FILTER_BTN } from '../../../../../configs/constants';

const UserTransaction = () => {
    const [activeBtn, setActiveBtn] = useState('ALL');
    return (
        <Row gutter={[10, 10]}>
            <h2>Lịch sử giao dịch</h2>
            <Col md={24}>
                <div className="transaction-filter">
                    {TRANSACTION_FILTER_BTN.map(item => (
                        <Button key={item.id} className={(activeBtn === item.id) ? 'transaction-filter-active' : ''} onClick={() => setActiveBtn(item.id)}>{item.name}</Button>
                    ))}
                </div>
            </Col>
            <Col md={24}>
                <Row gutter={[10, 10]}>
                    {userLogs.map(item => (
                        <Col md={24}>
                            <Transaction item={item} />
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    );
}

export default UserTransaction;