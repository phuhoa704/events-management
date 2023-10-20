import { Modal, Form, Input, Button, DatePicker, Select, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GENDER, STATUS, FORM_MESSAGE } from "../../../configs/constants";
import { updateStaff } from "../../../redux/actions/Staffs";
import moment from "moment";
import { useEffect } from "react";

const { Option } = Select;

const ModalEdit = ({ open, closeModal }) => {
    const dispatch = useDispatch();
    const staff = useSelector(state => state.staffs.staffById);
    const roles = useSelector(state => state.roles.roles);
    const [form] = Form.useForm();
    const handleUpdateStaff = async(values) => {
        let rs = await dispatch(updateStaff({
            id: staff.id,
            data: {
                ...values,
                birthday: moment(new Date(values.birthday)).format('YYYY-MM-DD'),
            }
        }));
        if(rs.payload.action) {
            closeModal();
        }
    }
    useEffect(() => {
        if(staff) {
            form.setFieldsValue({
                phone: staff.phone,
                name: staff.name,
                email: staff.email,
                birthday: moment(staff.birthday, 'YYYY-MM-DD'),
                gender: staff.gender,
                active: staff.active,
                roles: staff?.roles?.map(item => item.id)
            })
        }
    }, [staff])
    return ( 
        <Modal
            title='Tạo mới nhân viên'
            open={open}
            onCancel={closeModal}
            footer={null}
        >
            <Form form={form} layout="vertical" onFinish={handleUpdateStaff} initialValues={{ roles: [] }}>
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

export default ModalEdit;