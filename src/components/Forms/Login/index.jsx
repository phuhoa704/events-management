import { Form, Input, Row, Typography, Button, Col } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { router } from "../../../configs/router";
import './style.scss';
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions/Auth";

const { Title, Text } = Typography;
const { Password } = Input;

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const handleLogin = async(values) => {
        let rs = await dispatch(login(values));
        if(rs.payload.action) {
            form.resetFields();
            navigate(rs.payload.route);
        }
    }
    return (
        <div className="login-form">
            <Title level={4}>Login to access your account</Title>
            <Text>Haven't account yet ? <Link to={router.SIGNUP}>Signup here</Link></Text>
            <Form form={form} layout="vertical" onFinish={handleLogin}>
                <Row>
                    <Col md={24}>
                        <Form.Item label='Email/Số điện thoại' name={'phone'}>
                            <Input placeholder="Email/Số điện thoại" size="large" />
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item label='Password' name={'password'}>
                            <Password placeholder="Password" size="large" />
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