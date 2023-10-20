import { useEffect, useState } from 'react';
import { Row, Col, Button, Table, Tooltip, Tag, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { getListStaffs, deleteStaff, showStaff } from '../../../../../redux/actions/Staffs';
import { QuestionCircleOutlined } from '@ant-design/icons';
import ModalAdd from '../../../../Modals/Staffs/Add';
import moment from 'moment';
import ModalEdit from '../../../../Modals/Staffs/Edit';
import { getListRoles } from '../../../../../redux/actions/Roles';
import { checkPermissions } from '../../../../../utils/helper';
import { PERMISSION_KEYS } from '../../../../../configs/constants';

const UserManagement = () => {
    const dispatch = useDispatch();
    const staffs = useSelector(state => state.staffs.staffs);
    const permissions = useSelector(state => state.auth.permissionKeys);
    const [modalAdd, setModalAdd] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            render: (_, __, index) => index + 1
        },
        {
            title: 'Họ và tên',
            dataIndex: 'name'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone'
        },
        {
            title: 'Trạng thái',
            dataIndex: 'active',
            render: (_, record) => <Tag color={(record.active === 1) ? '#87d068' : '#f50'}>{(record.active === 1) ? 'Hoạt động' : 'Khóa'}</Tag>
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
                    {checkPermissions(permissions, PERMISSION_KEYS.UPDATE_STAFF) && (
                        <Button type='primary' icon={<EditOutlined />} style={{ marginRight: 5 }} onClick={async () => {
                            let rs = await dispatch(showStaff(record.id));
                            if (rs.payload.action) {
                                setModalEdit(true);
                            }
                        }}></Button>
                    )}
                    {checkPermissions(permissions, PERMISSION_KEYS.DELETE_STAFF) && (
                        <Popconfirm
                            title='Xóa người dùng ?'
                            description='Bạn có chắc chắn muốn xóa người dùng này ?'
                            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                            okText='Có'
                            cancelText='Không'
                            onConfirm={() => dispatch(deleteStaff(record.id))}
                        >
                            <Button type='primary' icon={<DeleteOutlined />} danger></Button>
                        </Popconfirm>
                    )}
                </>
            )
        }
    ]
    useEffect(() => {
        dispatch(getListStaffs([]));
        dispatch(getListRoles([]));
    }, [])
    return (
        <>
            <ModalAdd open={modalAdd} closeModal={() => setModalAdd(false)} />
            <ModalEdit open={modalEdit} closeModal={() => setModalEdit(false)} />
            <Row gutter={[10, 10]}>
                <h3>Quản lý nhân viên</h3>
                <Col md={24} style={{ textAlign: 'right' }}>
                    <Tooltip title='Xuất dữ liệu' placement='bottom'>
                        <Button type='default' style={{ marginRight: 10 }}>Export</Button>
                    </Tooltip>
                    {checkPermissions(permissions, PERMISSION_KEYS.CREATE_STAFF) && (
                        <Tooltip title='Tạo mới' placement='bottom'>
                            <Button type='primary' onClick={() => setModalAdd(true)}>Tạo mới</Button>
                        </Tooltip>
                    )}
                </Col>
                <Col md={24}>
                    <Table columns={columns} dataSource={staffs?.data} bordered />
                </Col>
            </Row>
        </>
    );
}

export default UserManagement;