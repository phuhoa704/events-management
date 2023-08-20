import { Row, Col } from 'antd';
import LoginForm from '../../components/Forms/Login';
import './style.scss';

const Login = () => {
    return (
        <div className="login-page-container">
            <div className="login-form-container">
                <Row>
                    <Col md={14}>
                        <div className="bg-illusion">
                        </div>
                    </Col>
                    <Col md={10}>
                        <LoginForm />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Login;