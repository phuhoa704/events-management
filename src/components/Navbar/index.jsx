import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import logo from '../../assets/logo.png';
import { router } from '../../configs/router';
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from '../../redux/slices/Lang';
import britain from '../../assets/lang/britain.png';
import vietnam from '../../assets/lang/vietnam.png';
import { Badge, Dropdown, Modal, Avatar, Row, Col } from 'antd';
import { translate } from '../../redux/slices/Lang/translator';
import { LogoutOutlined, UserOutlined, DashboardOutlined, ThunderboltOutlined, SmileOutlined } from '@ant-design/icons';
import './style.scss';
import { logout } from '../../redux/actions/Auth';
import ModalUserInfo from '../Modals/UserInfo';
import { ASSETS_URL } from '../../configs/apiUrl';

const { confirm } = Modal;

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const lang = useSelector(state => state.lang.language);
    const profile = useSelector(state => state.profile.profile);
    const { user, userDashboard } = useSelector(state => state.auth);
    const [modalUserInfo, setModalUserInfo] = useState(false);

    const items = [
        {
            key: '1',
            label: (
                <Link to={userDashboard}>
                    <DashboardOutlined />&nbsp;Trang quản lý
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to={userDashboard} onClick={(e) => {
                    e.preventDefault();
                    setModalUserInfo(true);
                }}>
                    <UserOutlined />&nbsp;Thông tin cá nhân
                </Link>
            )
        },
        {
            key: '3',
            label: (
                <span onClick={() => confirm({
                    title: 'Đăng xuất',
                    content: 'Bạn có muốn đăng xuất không ?',
                    cancelText: 'Hủy',
                    okText: 'Có',
                    async onOk() {
                        let rs = await dispatch(logout({}));
                        if (rs.payload.action) {
                            navigate(router.HOME)
                        }
                    }
                })}>
                    <LogoutOutlined />&nbsp;Đăng xuất
                </span>
            ),
        }
    ];

    const notifyItems = [
        {
            key: '1',
            label: <Row gutter={10} style={{ borderBottom: '1px solid #d9d9d9' }}>
                <Col md={4}>
                    <div className='notify-icon'>
                        <ThunderboltOutlined />
                    </div>
                </Col>
                <Col md={20}>
                    <div className="notify-content">
                        <p>Hi, this is first notification sent using Eventt</p>
                        <span>This is body of the custom notification</span><br/>
                        <small>a minute ago</small>
                    </div>
                </Col>
            </Row>
        },
        {
            key: '2',
            label: <Row gutter={10}>
                <Col md={4}>
                    <div className='notify-icon'>
                        <SmileOutlined />
                    </div>
                </Col>
                <Col md={20}>
                    <div className="notify-content">
                        <p>Test03 commented on your post</p>
                        <span>Test comment</span><br/>
                        <small>an hour ago</small>
                    </div>
                </Col>
            </Row>
        }
    ]

    return (
        <>
            <ModalUserInfo
                open={modalUserInfo}
                closeModal={() => setModalUserInfo(false)}
            />
            <div className="navbar">
                <div className="navbar-container">
                    <div className="logo-container">
                        <img src={logo} alt="" onClick={() => navigate(router.HOME)} />
                    </div>
                    <div className="menu-container">
                        <div className="menus">
                            <img src={vietnam} alt='VN' onClick={() => dispatch(setLang('VI'))} className={lang === 'VI' ? 'language-active' : 'language-inactive'} />
                            <img src={britain} alt='UK' onClick={() => dispatch(setLang('EN'))} className={lang === 'EN' ? 'language-active' : 'language-inactive'} />
                            <Link to={''}>{translate('support', lang)}</Link>
                            <Badge count={2}>
                                <Dropdown menu={{ items: notifyItems }} placement="bottom" arrow={{ pointAtCenter: true }}>
                                    <Icon icon='notifications' className='icon' onClick={() => navigate(`${router.DASHBOARD}/${router.NOTIFICATION}`)} />
                                </Dropdown>
                            </Badge>
                            {(Object.keys(user).length > 0) ? <Dropdown menu={{ items }}><span className='menu-user'><Avatar src={profile.avatar ? `${ASSETS_URL}${profile.avatar}` : ''}>{profile.avatar ? '' : user.name.charAt(0).toUpperCase()}</Avatar>&nbsp;{user.name}</span></Dropdown> : <Link to={router.LOGIN}>{translate('login', lang)}</Link>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;