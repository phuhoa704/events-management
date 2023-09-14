import { Row, Col, Button, Radio, Input, Empty } from "antd";
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';

const Notification = () => {
    return (
        <Row gutter={[10, 10]}>
            <h2>Thông báo</h2>
            <Col md={24}>
                <Row gutter={10}>
                    <Col md={6}>
                        <Radio.Group>
                            <Radio.Button value="all">Tất cả</Radio.Button>
                            <Radio.Button value="unread">Chưa đọc</Radio.Button>
                        </Radio.Group>
                    </Col>
                    <Col md={14}>
                        <Input placeholder="Filter notifications" prefix={<FilterOutlined />}/>
                    </Col>
                    <Col md={4}>
                        <Button type="primary" icon={<SearchOutlined />}>Tìm kiếm</Button>
                    </Col>
                </Row>
            </Col>
            <Col md={24}>
                <Empty description='Không có thông báo'/>
            </Col>
        </Row>
    );
}

export default Notification;