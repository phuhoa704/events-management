import { useState } from 'react';
import { Row, Col, Tooltip, Button, Table, Popconfirm, Tabs } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListRoles, showRole, deleteRole, getTrashList, restoreTrash, deleteTrash } from '../../../../../redux/actions/Roles';
import { EditOutlined, QuestionCircleOutlined, DeleteOutlined, UndoOutlined } from '@ant-design/icons';
import moment from 'moment';
import ModalAdd from '../../../../Modals/Roles/Add';
import ModalEdit from '../../../../Modals/Roles/Edit';
import { RESTORE_POPCONFIRM, DELETE_POPCONFIRM } from '../../../../../configs/constants';

const RolesManagement = () => {
    const dispatch = useDispatch();
    const [modalAdd, setModalAdd] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const { roles, trashBin } = useSelector(state => state.roles);
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
                        onClick={async () => {
                            let rs = await dispatch(showRole(record.id));
                            if (rs.payload.action) {
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
    const trashColumns = [
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
            render: (_, record) => (
                <>
                    <Tooltip title='Hoàn tác' placement="bottom">
                        <Popconfirm
                            okText={RESTORE_POPCONFIRM.OKTEXT}
                            cancelText={RESTORE_POPCONFIRM.CANCELTEXT}
                            title={RESTORE_POPCONFIRM.TITLE}
                            onConfirm={() => dispatch(restoreTrash(record.id))}
                        >
                            <Button icon={<UndoOutlined />} style={{ marginRight: 5 }}></Button>
                        </Popconfirm>
                    </Tooltip>
                    <Tooltip title='Xóa' placement="bottom">
                        <Popconfirm
                            okText={DELETE_POPCONFIRM.OKTEXT}
                            cancelText={DELETE_POPCONFIRM.CANCELTEXT}
                            title={DELETE_POPCONFIRM.TITLE}
                            onConfirm={() => dispatch(deleteTrash(record.id))}
                        >
                            <Button icon={<DeleteOutlined />} type="primary" danger></Button>
                        </Popconfirm>
                    </Tooltip>
                </>
            )
        }
    ]
    useEffect(() => {
        dispatch(getListRoles([]));
        dispatch(getTrashList([]));
    }, [])
    const tabItems = [
        {
            key: '1', label: 'Danh mục', children: <Row gutter={[10, 10]}>
                <Col md={24} style={{ textAlign: 'right' }}>
                    <Tooltip title='Xuất dữ liệu' placement='bottom'>
                        <Button type='default' style={{ marginRight: 10 }}>Export</Button>
                    </Tooltip>
                    <Tooltip title='Tạo mới' placement='bottom'>
                        <Button type='primary' onClick={() => setModalAdd(true)}>Tạo mới</Button>
                    </Tooltip>
                </Col>
                <Col md={24}>
                    <Table bordered columns={columns} dataSource={roles}></Table>
                </Col>
            </Row>
        },
        {
            key: '2', label: 'Thùng rác', children: <Row gutter={[10, 10]}>
                <Col md={24}>
                    <Table bordered columns={trashColumns} dataSource={trashBin}></Table>
                </Col>
            </Row>
        }
    ]
    return (
        <>
            <ModalAdd open={modalAdd} closeModal={() => setModalAdd(false)} />
            <ModalEdit open={modalEdit} closeModal={() => setModalEdit(false)} />
            <h3 style={{ textAlign: 'left' }}>Quản lý vai trò</h3>
            <Tabs defaultActiveKey='1' items={tabItems} style={{ width: '100%' }}/>
        </>
    );
}

export default RolesManagement;