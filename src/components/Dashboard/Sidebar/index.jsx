import { Breadcrumbs } from "@blueprintjs/core";
import { router } from "../../../configs/router";
import { NavLink } from "react-router-dom";
import { Row, Col } from 'antd';

const DashboardSidebar = () => {
    const breadCrumb = [
        { href: router.DASHBOARD, icon: "home", text: "Dashboard" },
        { text: "Template" },
    ]
    const navLinks = [
        { id: 1, name: 'Dashboard', dest: router.DASHBOARD },
        { id: 2, name: 'Users management', dest: router.ADMIN_USER_MANAGEMENT },
        { id: 3, name: 'Logs management', dest: router.ADMIN_LOG_MANAGEMENT },
        { id: 4, name: 'Push event', dest: router.ADMIN_PUSH_EVENT },
    ]
    return (
        <section className="dashboard-sidebar">
            <div className="sidebar">
                <div className="sidebar-breadcrumb">
                    <Breadcrumbs items={breadCrumb} />
                </div>
                <div className="sidebar-links">
                    <Row gutter={[10, 10]}>
                        {navLinks.map(item => (
                            <Col md={24} className="sidebar-link-col">
                                <NavLink to={item.dest} key={item.id}>{item.name}</NavLink>
                            </Col>
                        ))}
                    </Row>

                </div>
            </div>
        </section>
    );
}

export default DashboardSidebar;