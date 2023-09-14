import { Row, Col, Button, Pagination } from "antd";
import { logManagement } from '../../../../../configs/data';
import LogItem from './Log';
import { useState } from "react";
import { FILTER_BUTTON } from '../../../../../configs/constants';

const LogsManagement = () => {
    const [activeBtn, setActiveBtn] = useState('ALL');
    return (
        <Row gutter={[10, 10]}>
            <h3>Lịch sử sự kiện</h3>
            <Col md={24}>
                <div className="log-filter">
                    {FILTER_BUTTON.map(item => (
                        <Button key={item.id} className={(activeBtn === item.id) ? 'log-filter-active' : ''} onClick={() => setActiveBtn(item.id)}>{item.name}</Button>
                    ))}
                </div>
            </Col>
            <Col md={24}>
                <Row gutter={[10, 10]}>
                    {logManagement.map(item => (
                        <Col md={24} key={item.id}>
                            <LogItem item={item} />
                        </Col>
                    ))}
                </Row>
            </Col>
            <Col md={24}>
                <Pagination defaultCurrent={1} total={logManagement.length}/>
            </Col>
        </Row>
    );
}

export default LogsManagement;