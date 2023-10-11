import { Modal, Form, Input, Button, DatePicker, Select, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GENDER, STATUS, FORM_MESSAGE } from "../../../configs/constants";
import { createStaff } from "../../../redux/actions/Staffs";
import moment from "moment";

const { Option } = Select;
const { Password } = Input;

const ModalAdd = ({ open, closeModal }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const roles = useSelector(state => state.roles.roles);
    const handleCreateStaff = async(values) => {
        let rs = await dispatch(createStaff({
            ...values,
            birthday: values.birthday ? moment(new Date(values.birthday)).format('YYYY-MM-DD') : null,
            roles: [1]
        }))
        if(rs.payload.action) {
            form.resetFields();
            closeModal();
        }
    }
    return ( 
        <Modal
            title='Tạo mới nhân viên'
            open={open}
            onCancel={closeModal}
            footer={null}
        >
            <Form form={form} layout="vertical" onFinish={handleCreateStaff} initialValues={{ roles: [] }}>
                <Row gutter={10}>
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
                            <Input placeholder="Số điện thoại"/>
                        </Form.Item>
                    </Col>
                    <Col md={12}>
                        <Form.Item label='Họ và tên' name={'name'} rules={[
                            {
                                required: true,
                                message: FORM_MESSAGE.NAME.REQUIRED
                            }
                        ]}>
                            <Input placeholder="Họ và tên"/>
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
                            <Input placeholder="Email"/>
                        </Form.Item>
                    </Col>
                    <Col md={12}>
                        <Form.Item label='Ngày sinh' name={'birthday'}>
                            <DatePicker placeholder="Ngày sinh" style={{ width: '100%' }}/>
                        </Form.Item>
                    </Col>
                    <Col md={12}>
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
                            <Password placeholder="Mật khẩu"/>
                        </Form.Item>
                    </Col>
                    <Col md={12}>
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
                            <Password placeholder="Nhập lại mật khẩu"/>
                        </Form.Item>
                    </Col>
                    <Col md={12}>
                        <Form.Item label='Giới tính' name={'gender'}>
                            <Select placeholder='Giới tính'>
                                {GENDER.map(item => (
                                    <Option key={item.id} value={item.id}>{item.name}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col md={12}>
                        <Form.Item label='Trạng thái' name={'active'}>
                            <Select placeholder='Trạng thái'>
                                {STATUS.map(item => (
                                    <Option key={item.id} value={item.id}>{item.name}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item label='Vai trò' name={'roles'} rules={[
                            {
                                required: true,
                                message: FORM_MESSAGE.ROLES.REQUIRE
                            }
                        ]}>
                            <Select placeholder='Vai trò' mode="multiple" maxTagCount={'responsive'}>
                                {roles.map(item => (
                                    <Option key={item.id} value={item.id}>{item.name}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col md={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">Tạo mới</Button>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
}

export default ModalAdd;