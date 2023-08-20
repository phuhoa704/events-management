import { Row, Col, Typography, Button } from 'antd';
import { footerIcons } from '../../configs/data';
import { footerShortcutFirstCol, footerShortcutSecondCol } from '../../configs/data';
import './style.scss';

const { Title } = Typography;

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <Row>
                    <Col md={8}>
                        <h2 style={{ fontWeight: 600, textAlign: 'left' }}>Care Center</h2>
                    </Col>
                    <Col md={16} style={{ paddingTop: 20 }}>
                        <div className="footer-icon">
                            {footerIcons.map(item => (
                                <img src={item.icon} alt='' />
                            ))}
                        </div>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col md={6}>
                        <div className="footer-shortcut">
                            {footerShortcutFirstCol.map(item => (
                                <a href={item.url} key={item.id}>{item.title}</a>
                            ))}
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="footer-shortcut">
                            {footerShortcutSecondCol.map(item => (
                                <a href={item.url} key={item.id}>{item.title}</a>
                            ))}
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="footer-shortcut">
                            <Title level={4}>Subscribe to our newsletter</Title>
                            <div className='inputBox relative'>
                                <input
                                    type={'email'}
                                    autoComplete='off'
                                />
                                <span className='absolute left-0 text-sm'>{'Email'}</span>
                            </div>
                            <Button>Subcribe</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Footer;