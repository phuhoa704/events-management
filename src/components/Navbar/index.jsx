import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import logo from '../../assets/logo.png';
import { router } from '../../configs/router';
import './style.scss';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <img src={logo} alt="" onClick={() => navigate(router.HOME)}/>
                </div>
                <div className="menu-container">
                    <div className="menus">
                        <Link to={''}>
                            <Icon icon='globe-network'/>
                            Ngôn ngữ
                        </Link>
                        <Link to={''}>Hỗ trợ</Link>
                        <Icon icon='notifications' />
                        <Link to={router.LOGIN}>Đăng nhập</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;