import { Row, Col, Button, Table, Tooltip } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { usersManagement } from '../../../../../configs/data';

const UserManagement = () => {
    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            render: (_, __, index) => index + 1
        },
        {
            title: 'Họ và tên',
            dataIndex: 'fullname'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        },
        {
            title: 'Loại người dùng',
            dataIndex: 'type'
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone'
        },
        {
            title: '',
            dataIndex: 'index',
            render: (_, record) => (
                <>
                    <Button type='primary' icon={<EditOutlined />} style={{ marginRight: 5 }}></Button>
                    <Button type='primary' icon={<DeleteOutlined />} danger></Button>
                </>
            )
        }
    ]
    return (
        <Row gutter={[10, 10]}>
            <h3>Quản lý người dùng</h3>
            <Col md={24} style={{ textAlign: 'right' }}>
                <Tooltip title='Xuất dữ liệu' placement='bottom'>
                    <Button type='default'>Export</Button>
                </Tooltip>
            </Col>
            <Col md={24}>
                <Table columns={columns} dataSource={usersManagement} bordered />
            </Col>
        </Row>
    );
}

export default UserManagement;