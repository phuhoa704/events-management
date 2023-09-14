import { router } from "../../../configs/router";
import { NavLink, useLocation } from "react-router-dom";
import { HistoryOutlined, UserOutlined, LogoutOutlined, BellOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { translate } from '../../../redux/slices/Lang/translator';
import { useSelector } from "react-redux";

const DashboardSidebar = () => {
    const location = useLocation();
    const lang = useSelector(state => state.lang.language);
    const navLinks = [
        { id: 6, name: translate('information',lang), dest: router.DASHBOARD, icon: <UserOutlined /> },
        { id: 7, name: translate('history',lang), dest: router.USER_HISTORY, icon: <HistoryOutlined /> },
        { id: 8, name: 'Transaction', dest: router.USER_TRANSACTION, icon: <HistoryOutlined /> },
        { id: 9, name: translate('notification',lang), dest: router.NOTIFICATION, icon: <BellOutlined /> },
        { id: 5, name: translate('signout',lang), dest: router.HOME, icon: <LogoutOutlined /> }
    ]
    return (
        <section className="dashboard-sidebar">
            <div className="sidebar">
                <div className="sidebar-links">
                    <Row gutter={[10, 30]}>
                        {navLinks.map(item => (
                            <Col md={24} key={item.id} className={(location.pathname === `${router.DASHBOARD}/${item.dest}`) ? "sidebar-link-col sidebar-link-col-active" : "sidebar-link-col"}>
                                <NavLink to={item.dest} key={item.id}>{item.icon} {item.name}</NavLink>
                            </Col>
                        ))}
                    </Row>

                </div>
            </div>
        </section>
    );
}

export default DashboardSidebar;