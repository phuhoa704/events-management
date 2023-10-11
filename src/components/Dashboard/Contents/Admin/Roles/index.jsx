import { useState } from 'react';
import { Row, Col, Tooltip, Button, Table, Popconfirm } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListRoles, showRole, deleteRole } from '../../../../../redux/actions/Roles';
import { EditOutlined, QuestionCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import { getListPermissions } from '../../../../../redux/actions/Permissions';
import ModalAdd from '../../../../Modals/Roles/Add';
import ModalEdit from '../../../../Modals/Roles/Edit';

const RolesManagement = () => {
    const dispatch = useDispatch();
    const [modalAdd, setModalAdd] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const roles = useSelector(state => state.roles.roles);
    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            render: (_, __, index) => index + 1
        },
        {
            title: 'Tên',
            dataIndex: 'name'
        },
        {
            title: 'Mô tả',
            dataIndex: 'desc'
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'created_at',
            render: (_, record) => moment(record.created_at).format('DD-MM-YYYY')
        },
        {
            title: '',
            dataIndex: 'index',
            render: (_, record) => (
                <>
                    <Button
                        type='primary'
                        icon={<EditOutlined />}
                        style={{ marginRight: 5 }}
                        onClick={async() => {
                            let rs = await dispatch(showRole(record.id));
                            if(rs.payload.action){
                                setModalEdit(true);
                            }
                        }}
                    ></Button>
                    <Popconfirm
                        title='Xóa người dùng ?'
                        description='Bạn có chắc chắn muốn xóa vai trò này ?'
                        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                        okText='Có'
                        cancelText='Không'
                        onConfirm={() => dispatch(deleteRole(record.id))}
                    >
                        <Button type='primary' icon={<DeleteOutlined />} danger></Button>
                    </Popconfirm>
                </>
            )
        }
    ]
    useEffect(() => {
        dispatch(getListRoles([]));
        dispatch(getListPermissions([]));
    }, [])
    return (
        <>
            <ModalAdd open={modalAdd} closeModal={() => setModalAdd(false)} />
            <ModalEdit open={modalEdit} closeModal={() => setModalEdit(false)}/>
            <Row gutter={[10, 10]}>
                <h3>Quản lý vai trò</h3>
                <Col md={24} style={{ textAlign: 'right' }}>
                    <Tooltip title='Xuất dữ liệu' placement='bottom'>
                        <Button type='default' style={{ marginRight: 10 }}>Export</Button>
                    </Tooltip>
                    <Tooltip title='Tạo mới' placement='bottom'>
                        <Button type='primary' onClick={() => setModalAdd(true)}>Tạo mới</Button>
                    </Tooltip>
                </Col>
                <Col md={24}>
                    <Table columns={columns} dataSource={roles} bordered />
                </Col>
            </Row>
        </>
    );
}

export default RolesManagement;