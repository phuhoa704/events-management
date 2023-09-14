import { Form, Button, DatePicker, Select, Row, Col, Typography, InputNumber } from 'antd';
import { Icon } from '@blueprintjs/core';
import { SearchOutlined } from '@ant-design/icons';
import moment from 'moment';
import 'moment/locale/vi'
import './style.scss';

const { Text } = Typography;
const { Option } = Select;

const selectOptions = [
    {
        value: 1,
        label: <Row>
            <Col span={2} style={{ display: 'flex', alignItems: 'center' }}>
                <Icon icon='map-marker' />
            </Col>
            <Col span={22}>
                <Row>
                    <Col span={24}>
                        <Text strong>Đà Nẵng</Text>
                    </Col>
                    <Col span={24}>
                        <Text strong>Việt Nam</Text>
                    </Col>
                </Row>
            </Col>
        </Row>
    },
    {
        value: 2,
        label: <Row>
            <Col span={4} style={{ display: 'flex', alignItems: 'center' }}>
                <Icon icon='map-marker' />
            </Col>
            <Col span={20}>
                <Row>
                    <Col span={24}>
                        <Text strong>Đà Lạt</Text>
                    </Col>
                    <Col span={24}>
                        <Text strong>Lâm Đồng (tỉnh), Việt Nam</Text>
                    </Col>
                </Row>
            </Col>
        </Row>
    },
    {
        value: 3,
        label: <Row>
            <Col span={4} style={{ display: 'flex', alignItems: 'center' }}>
                <Icon icon='map-marker' />
            </Col>
            <Col span={20}>
                <Row>
                    <Col span={24}>
                        <Text strong>Quận Đống Đa</Text>
                    </Col>
                    <Col span={24}>
                        <Text strong>Hà Nội, Việt Nam</Text>
                    </Col>
                </Row>
            </Col>
        </Row>
    },
]

const SearchBar = () => {
    const [form] = Form.useForm();
    return (
        <div className="search-bar">
            <Form form={form} layout='vertical'>
                <Row gutter={15}>
                    <Col span={24}>
                        <Form.Item name={'place'} label={<Text strong>Thành phố, địa điểm hoặc tên khu vực</Text>}>
                            <Select placeholder='Địa điểm' size='large' options={selectOptions} style={{ textAlign: 'left', fontWeight: 500 }} />
                        </Form.Item>
                    </Col>
                    <Col span={9}>
                        <Form.Item name={'checkin'} label={<Text strong>Thời gian nhận chỗ</Text>}>
                            <DatePicker placeholder='Thời gian nhận chỗ' className='weight500' style={{ width: '100%', fontFamily: 'Inter sans-serif' }} size='large' />
                        </Form.Item>
                    </Col>
                    <Col span={9}>
                        <Form.Item name={'range'} label={<Text strong>Số ngày</Text>}>
                            <InputNumber placeholder='Số ngày' className='weight500' style={{ width: '100%' }} size='large' />
                        </Form.Item>
                    </Col>
                    <Col md={6} style={{ textAlign: 'left' }}>
                        <Form.Item name={'checkout'} label={<Text strong>Thời gian trả chỗ</Text>}>
                            <Text strong>{moment().locale('vi').format('dddd, DD MMMM YYYY')}</Text>
                        </Form.Item>
                    </Col>
                    <Col span={18}>
                        <Form.Item name={'type'} label={<Text strong>Loại địa điểm</Text>}>
                            <Select placeholder='Loại' style={{ textAlign: 'left', fontWeight: 500 }} size='large'>
                                <Option value={1}>Buổi hòa nhạc</Option>
                                <Option value={2}>Blah blah</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Button type='primary' htmlType='submit' size='large' icon={<SearchOutlined />} style={{ marginTop: 30 }}>Tìm kiếm</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default SearchBar;