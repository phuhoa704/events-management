import { Row, Col, Card, Progress, Dropdown, Button } from 'antd';
import { DownOutlined, MoreOutlined } from '@ant-design/icons';
import { dashboardCard, dashboardLineChart, dashboardTopDeals, dashboardCols } from '../../../../../configs/data';
import { Line, Column } from '@ant-design/plots';
import CardAdminDashboard from './Card';
import TopDeals from './TopDeals';

const AdminDashboard = () => {
    const config = {
        data: dashboardLineChart,
        xField: 'year',
        yField: 'value',
        seriesField: 'category',
        yAxis: {
            label: {
                formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
            },
        },
    };
    const configCol = {
        data: dashboardCols,
        xField: 'city',
        yField: 'value',
        seriesField: 'type',
        isGroup: true,
        columnStyle: {
            radius: [20, 20, 0, 0],
        },
    };
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Today
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    This week
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    Last week
                </a>
            ),
        },
    ];
    return (
        <Row className='admin-dashboard'>
            <Col md={24} className='dashboard-title'>
                <h2>Welcome back, Admin !</h2>
                <p>Track your book activities and deals here.</p>
            </Col>
            <Col md={24}>
                <Row gutter={[10, 10]}>
                    <Col md={24}>
                        <Card className='dashboard-target'>
                            <Row gutter={10}>
                                <Col md={18}>
                                    <h3>Your targe is imcomplete</h3>
                                    <p>You have completed 40% of the given target, you can also check your status.</p>
                                    <a href='https://google.com'>Click here</a>
                                </Col>
                                <Col md={6}>
                                    <Progress type='circle' percent={40} strokeColor={'#073313'} />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col md={24}>
                        <Row gutter={[10, 10]}>
                            {dashboardCard.map((item, idx) => (
                                <Col md={12} key={idx}>
                                    <CardAdminDashboard item={item} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col md={24}>
                        <Card title={<section className='dashboard-card-title'>
                            <h4>Revenue Analytics</h4>
                            <Dropdown menu={{ items }} placement='bottom'>
                                <span>View all <DownOutlined /></span>
                            </Dropdown>
                        </section>}>
                            <Line {...config} />
                        </Card>
                    </Col>
                    <Col md={10}>
                        <Card title={<section className='dashboard-card-title'>
                            <h4>Top Deals</h4>
                            <Dropdown menu={{ items }} placement='bottom'>
                                <Button icon={<MoreOutlined />} className='dashboard-card-more'></Button>
                            </Dropdown>
                        </section>}>
                            <Row gutter={[5, 5]}>
                                {dashboardTopDeals.map((item, idx) => (
                                    <Col md={24} key={idx}>
                                        <TopDeals item={item} />
                                    </Col>
                                ))}
                            </Row>
                        </Card>
                    </Col>
                    <Col md={14}>
                        <Card title={<section className='dashboard-card-title'>
                            <h4>Provinces</h4>
                            <Dropdown menu={{ items }} placement='bottom'>
                                <Button icon={<MoreOutlined />} className='dashboard-card-more'></Button>
                            </Dropdown>
                        </section>}>
                            <Column {...configCol} />
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default AdminDashboard;