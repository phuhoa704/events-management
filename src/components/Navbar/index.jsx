import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import logo from '../../assets/logo.png';
import { router } from '../../configs/router';
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from '../../redux/slices/Lang';
import britain from '../../assets/lang/britain.png';
import vietnam from '../../assets/lang/vietnam.png';
import { Badge, Dropdown, Modal } from 'antd';
import { translate } from '../../redux/slices/Lang/translator';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import './style.scss';
import { logout } from '../../redux/actions/Auth';

const { confirm } = Modal;

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const lang = useSelector(state => state.lang.language);
    const { user, userDashboard } = useSelector(state => state.auth);

    const items = [
        {
            key: '1',
            label: (
                <Link to={userDashboard}>
                    <UserOutlined />&nbsp;Tài khoản
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <span onClick={() => confirm({
                    title: 'Đăng xuất',
                    content: 'Bạn có muốn đăng xuất không ?',
                    async onOk() {
                        let rs = await dispatch(logout({}));
                        if(rs.payload.action) {
                            navigate(router.HOME)
                        }
                    }
                })}>
                    <LogoutOutlined />&nbsp;Đăng xuất
                </span>
            ),
        }
    ];

    return (
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
                            <Icon icon='notifications' className='icon' onClick={() => navigate(`${router.DASHBOARD}/${router.NOTIFICATION}`)} />
                        </Badge>
                        {(Object.keys(user).length > 0) ? <Dropdown menu={{ items }}><span className='menu-user'>{user.name}</span></Dropdown> : <Link to={router.LOGIN}>{translate('login', lang)}</Link>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;