import { Modal, Row, Col, Form, Button, Input, Select } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRole } from "../../../redux/actions/Roles";


const ModalEdit = ({ open, closeModal }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const permissions = useSelector(state => state.permissons.listPermissions);
    const roleById = useSelector(state => state.roles.roleById);
    const permissionsInRoleById = useSelector(state => state.roles.permissionsInRoleById);
    useEffect(() => {
        if(roleById) {
            let formattedPer = [];
            permissionsInRoleById.forEach(item => {
                item?.childrens?.forEach(it => {
                    if(it.checked === 1) {
                        formattedPer.push(it.id)
                    }
                })
            })
            form.setFieldsValue({
                name: roleById.name,
                desc: roleById.desc,
                permissions: formattedPer
            })
        }
    }, [roleById]);
    const handleUpdate = async(values) => {
        let rs = await dispatch(updateRole({
            id: roleById.id,
            data: {...values}
        }))
        if(rs.payload.action) {
            closeModal();
        }
    }
    return (
        <Modal
            title='Chỉnh sửa vai trò'
            open={open}
            onCancel={closeModal}
            footer={null}
        >
            <Form form={form} layout="vertical" onFinish={handleUpdate}>
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

export default ModalEdit;