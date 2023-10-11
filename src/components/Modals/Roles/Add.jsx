import { Modal, Row, Col, Form, Button, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createRole } from "../../../redux/actions/Roles";


const ModalAdd = ({ open, closeModal }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const permissions = useSelector(state => state.permissons.listPermissions);
    const handleCreate = async(values) => {
        let rs = await dispatch(createRole({
            ...values
        }))
        if(rs.payload.action) {
            form.resetFields();
            closeModal();
        }
    }
    return (
        <Modal
            title='Thêm vai trò'
            open={open}
            onCancel={closeModal}
            footer={null}
        >
            <Form form={form} layout="vertical" onFinish={handleCreate}>
                <Row>
                    <Col md={24}>
                        <Form.Item label='Tên' name={'name'} rules={[
                            {
                                required: true
                            }
                        ]}>
                            <Input placeholder="Tên" />
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item label='Mô tả' name={'desc'} rules={[
                            {
                                required: true
                            }
                        ]}>
                            <Input placeholder="Mô tả" />
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item label='Danh sách quyền' name={'permissions'} rules={[
                            {
                                required: true
                            }
                        ]}>
                            <Select
                                placeholder='Danh sách quyền'
                                mode="multiple"
                                maxTagCount={'responsive'}
                                options={permissions.map(item => {
                                    return {
                                        label: item.name,
                                        options: item.childrens.map(it => {
                                            return {
                                                label: it.name,
                                                value: it.id
                                            }
                                        })
                                    }
                                })}
                            />
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