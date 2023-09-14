import { Card, Row, Col } from "antd";

const CardAdminDashboard = ({ item }) => {
    return (
        <Card className="dashboard-card">
            <Row gutter={10}>
                <Col md={4} style={{ paddingTop: '1rem' }}>
                    <div className="icon-container" style={{ backgroundColor: item.color }}>
                        {item.icon}
                    </div>
                </Col>
                <Col md={15}>
                    <div className="content-container">
                        <p>{item.name}</p>
                        <h2>{item.value}</h2>
                    </div>
                </Col>
                <Col md={5}>
                    <div className="desc-container">
                        <p style={{ color: (item.val > 0) ? 'rgb(38,191,148)' : 'rgb(230,83,60)'}}>{(item.val > 0) ? `+${item.val}%` : `${item.val}%`}</p>
                        <small>this month</small>
                    </div>
                </Col>
            </Row>
        </Card>
    );
}

export default CardAdminDashboard;