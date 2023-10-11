import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { DashboardOutlined, HourglassOutlined, UserOutlined, FileProtectOutlined, ApartmentOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import Footer from '../../components/Footer';
import { router } from '../../configs/router';
import './style.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const { Content, Sider } = Layout;

const AdminDashboardLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { pathname } = useLocation();
    const permissions = useSelector(state => state.permissons.listPermissions);
    const menus = [
        { id: 1, name: 'Bảng điều khiển', icon: <DashboardOutlined />, to: router.ADM_DASHBOARD },
        { id: 2, name: 'Quản lý nhóm', icon: <UsergroupAddOutlined />, to: router.ADMIN_ROLES },
        { id: 3, name: 'Nhân viên', icon: <UserOutlined />, to: router.ADMIN_USER_MANAGEMENT },
        { id: 4, name: 'Danh mục', icon: <ApartmentOutlined />, to: router.ADMIN_CATEGORIES },
        { id: 5, name: 'Sự kiện', icon: <HourglassOutlined />, to: router.ADMIN_PUSH_EVENT },
        { id: 6, name: 'Nhật ký', icon: <FileProtectOutlined />, to: router.ADMIN_LOG_MANAGEMENT },
    ];
    useEffect(() => {
        if(permissions.length > 0) {

        }
    }, [permissions])
    return (
        <Layout>
            <Sider collapsible onCollapse={(value) => setCollapsed(value)} collapsed={collapsed}>
                <Menu theme="dark" defaultSelectedKeys={[pathname]} mode="inline">
                    {menus.map(item => (
                        <Menu.Item icon={item.icon} key={item.to} className='admin-menu-item'>
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