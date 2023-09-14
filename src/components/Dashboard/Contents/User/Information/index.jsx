import { Row, Col, Form, Input, Select, DatePicker } from 'antd';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GENDER } from '../../../../../configs/constants';
import moment from 'moment';

const { Option } = Select;

const UserInformation = () => {
    const [form] = Form.useForm();
    const { user } = useSelector(state => state.auth);
    useEffect(() => {
        if(Object.keys(user).length > 0) {
            form.setFieldsValue({
                fullname: user.name,
                email: user.email,
                phone: user.phone,
                birthday: moment(user.birthday, 'YYYY-MM-DD'),
                gender: user.gender
            })
        }
    }, [user, form])
    return (
        <Row>
            <h2>Thông tin tài khoản</h2>
            <Col md={24}>
                <Form form={form} layout='vertical'>
                    <Row gutter={10}>
                        <Col md={24}>
                            <Form.Item label='Họ và tên' name={'fullname'}>
                                <Input placeholder='Họ và tên' size='large'/>
                            </Form.Item>
                        </Col>
                        <Col md={24}>
                            <Form.Item label='Email' name={'email'}>
                                <Input placeholder='Email' size='large'/>
                            </Form.Item>
                        </Col>
                        <Col md={24}>
                            <Form.Item label='Số điện thoại' name={'phone'}>
                                <Input placeholder='Số điện thoại' size='large'/>
                            </Form.Item>
                        </Col>
                        <Col md={12}>
                            <Form.Item label='Ngày sinh' name={'birthday'}>
                                <DatePicker placeholder='Ngày sinh' style={{ width: '100%', fontSize: 16 }} size='large'/>
                            </Form.Item>
                        </Col>
                        <Col md={12}>
                            <Form.Item label='Giới tính' name={'gender'}>
                                <Select placeholder='Giới tính' style={{ textAlign: 'left', fontSize: 16 }} size='large'>
                                    {GENDER.map(item => (
                                        <Option key={item.id} value={item.id}>{item.name}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col md={24} style={{ textAlign: 'right' }}>
                            <button type='submit' className='primary-button'>Cập nhật</button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    );
}

export default UserInformation;