import { Row, Col, Typography } from 'antd';
import SignupForm from '../../components/Forms/Signup';
import './style.scss';

const { Title } = Typography;

const Signup = () => {
    return ( 
        <div className="signup-page-container">
            <Row style={{ height: '100%' }}>
                <Col md={11}>
                    <Title level={4}>Signup and come on in</Title>
                    <small>&#169; Care Center</small>
                </Col>
                <Col md={13} style={{ backgroundColor: '#C7F3D3', padding: '20px 10px 0 10px' }}>
                    <SignupForm />
                </Col>
            </Row>
        </div>
    );
}

export default Signup;