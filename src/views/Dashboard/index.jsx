import DashboardHeader from "../../components/Dashboard/Header";
import { Row, Col } from 'antd';
import './style.scss';
import DashboardSidebar from "../../components/Dashboard/Sidebar";

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <DashboardHeader />
            <div className="dashboard-content">
                <Row gutter={10}>
                    <Col md={8}>
                        <DashboardSidebar />
                    </Col>
                    <Col md={16}>
                        This is content
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Dashboard;