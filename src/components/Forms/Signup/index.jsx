import { Row, Col, Form, Typography, Button, Input, DatePicker, Select } from 'antd';
import { router } from '../../../configs/router';
import { useNavigate } from 'react-router-dom';
import { FORM_MESSAGE, GENDER } from '../../../configs/constants';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/actions/Auth';
import moment from 'moment/moment';

const { Title, Text } = Typography;
const { Password } = Input;
const { Option } = Select;

const SignupForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const handleSignup = (values) => {
        dispatch(register({
            ...values,
            birthday: values.birthday ? moment(new Date(values.birthday)).format('YYYY-MM-DD') : null,
            gender: values.gender ? values.gender : null
        }))
    }
    return (
        <div className="signup-form">
            <Title level={3}>Signup</Title>
            <Text style={{ textAlign: 'right', marginBottom: 10 }}>Already have an account ? <Button size='small' onClick={() => navigate(router.LOGIN)}>Log in</Button></Text>
            <Form form={form} layout='vertical' onFinish={handleSignup} style={{ marginTop: 10 }}>
                <Row gutter={10}>
                    <Col md={12}>
                        <Form.Item label='Họ và tên' name={'name'} rules={[
                            {
                                required: true,
                                message: FORM_MESSAGE.NAME.REQUIRED
                            }
                        ]}>
                            <Input placeholder='Họ và tên' />
                        </Form.Item>
                    </Col>
                    <Col md={12}>
                        <Form.Item label='Số điện thoại' name={'phone'} rules={[
                            {
                                required: true,
                                message: FORM_MESSAGE.PHONE.REQUIRED
                            },
                            {
                                pattern: new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g),
                                message: FORM_MESSAGE.PHONE.INVALID
                            }
                        ]}>
                            <Input placeholder='Số điện thoại' />
                        </Form.Item>
                    </Col>
                    <Col md={12}>
                        <Form.Item label='Email' name={'email'} rules={[
                            {
                                required: true,
                                message: FORM_MESSAGE.EMAIL.REQUIRED
                            },
                            {
                                pattern: new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
                                message: FORM_MESSAGE.EMAIL.INVALID
                            }
                        ]}>
                            <Input placeholder='Email' />
                        </Form.Item>
                    </Col>
                    <Col md={12}>
                        <Form.Item label='Ngày sinh' name={'birthday'}>
                            <DatePicker placeholder='Ngày sinh' style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item label='Mật khẩu' name={'password'} rules={[
                            {
                                required: true,
                                message: FORM_MESSAGE.PASSWORD.REQUIRED
                            },
                            {
                                pattern: new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g),
                                message: FORM_MESSAGE.PASSWORD.INVALID
                            }
                        ]}>
                            <Password placeholder='Mật khẩu' />
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item label='Nhập lại mật khẩu' name={'password_confirm'} rules={[
                            {
                                required: true,
                                message: FORM_MESSAGE.PASSWORD.REQUIRED
                            },
                            {
                                pattern: new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g),
                                message: FORM_MESSAGE.PASSWORD.INVALID
                            }
                        ]}>
                            <Password placeholder='Nhập lại mật khẩu' />
                        </Form.Item>
                    </Col>
                    <Col md={12}>
                        <Form.Item label='Giới tính' name={'gender'}>
                            <Select placeholder='Giới tính' style={{ textAlign: 'left' }}>
                                {GENDER.map(item => (
                                    <Option value={item.id} key={item.id}>{item.name}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col md={12} style={{ paddingTop: 30 }}>
                        <Button type='primary' htmlType='submit' style={{ width: '100%' }}>Đăng ký</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default SignupForm;