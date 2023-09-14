import DashboardHeader from "../../components/Dashboard/Header";
import { Row, Col, Divider } from 'antd';
import './style.scss';
import DashboardSidebar from "../../components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return ( 
        <div className="dashboard">
            <DashboardHeader />
            <div className="dashboard-content">
                <Row gutter={30}>
                    <Divider />
                    <Col md={6}>
                        <DashboardSidebar />
                    </Col>
                    <Col md={18} style={{ minHeight: 500 }}>
                        <Outlet />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default DashboardLayout;