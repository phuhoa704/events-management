import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { DashboardOutlined, HourglassOutlined, UserOutlined, FileProtectOutlined, ApartmentOutlined } from '@ant-design/icons';
import Footer from '../../components/Footer';
import './style.scss';
import { router } from '../../configs/router';
import { useSelector } from 'react-redux';

const { Content, Sider } = Layout;

const AdminDashboardLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { listPermissions } = useSelector(state => state.permissons)
    const { pathname } = useLocation();
    const menus = [
        { id: 1, name: 'Dashboard', icon: <DashboardOutlined />, to: router.ADM_DASHBOARD },
        { id: 2, name: 'Users', icon: <UserOutlined />, to: router.ADMIN_USER_MANAGEMENT },
        { id: 3, name: 'Categories', icon: <ApartmentOutlined />, to: router.ADMIN_CATEGORIES },
        { id: 4, name: 'Logs', icon: <FileProtectOutlined />, to: router.ADMIN_LOG_MANAGEMENT },
        { id: 5, name: 'Events', icon: <HourglassOutlined />, to: router.ADMIN_PUSH_EVENT },
    ];
    console.log(listPermissions);
    return (
        <Layout>
            <Sider collapsible onCollapse={(value) => setCollapsed(value)} collapsed={collapsed}>
                <Menu theme="dark" defaultSelectedKeys={[pathname]} mode="inline">
                    {menus.map(item => (
                        <Menu.Item icon={item.icon} key={item.to}>
                            <Link to={item.to}>{item.name}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout style={{ minHeight: '100vh' }}>
                <Content style={{ margin: '0 16px 10px 16px' }}>
                    <Outlet />
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
}

export default AdminDashboardLayout;