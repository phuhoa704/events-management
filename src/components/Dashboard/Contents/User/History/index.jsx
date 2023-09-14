import { Row, Col, Table, Badge, Image, Button } from 'antd';
import { userHistory } from '../../../../../configs/data';
import { formatNumberToMoney } from '../../../../../utils/number';

const UserHistory = () => {
    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            render: (_, __, index) => index + 1
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'image',
            render: (_, record) => (
                <Badge count={record.rating}>
                    <Image src={record.image} alt='' width={60} height={60}/>
                </Badge>
            )
        },
        {
            title: 'Địa điểm',
            dataIndex: 'name'
        },
        {
            title: 'Loại địa điểm',
            dataIndex: 'type'
        },
        {
            title: 'Giá đã đặt',
            dataIndex: ['price', 'value'],
            render: (_, record) => (
                formatNumberToMoney(record.price.value)
            )
        },
        {
            title: '',
            render: (_, record) => (
                <Button type='primary'>Đặt lại</Button>
            )
        }
    ]
    return ( 
        <Row>
            <h2>Lịch sử đặt sự kiện</h2>
            <Col md={24}>
                <Table columns={columns} dataSource={userHistory} bordered/>
            </Col>
        </Row>
    );
}

export default UserHistory;