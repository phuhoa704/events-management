import { Form, Input, Row, Typography, Button, Col } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { router } from "../../../configs/router";
import './style.scss';

const { Title } = Typography;

const LoginForm = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    return (
        <div className="login-form">
            <Title level={4}>Login to access your account</Title>
            <Form form={form} layout="vertical" onFinish={() => navigate(router.DASHBOARD)}>
                <Row>
                    <Col md={24}>
                        <Form.Item label='Email' name={'email'}>
                            <Input placeholder="E-mail Address" size="large" />
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item label='Password' name={'Password'}>
                            <Input placeholder="Password" type="password" size="large" />
                        </Form.Item>
                    </Col>
                    <Col md={24} style={{ textAlign: 'right' }}>
                        <Link to={router.FORGOTPWD}>Forgot password ?</Link>
                    </Col>
                    <Col md={24}>
                        <Button htmlType="submit" size="large" style={{ width: '100%' }}>Log In</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default LoginForm;