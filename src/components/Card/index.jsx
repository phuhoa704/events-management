import { Row, Col } from 'antd';
import { Icon } from '@blueprintjs/core';
import { formatNumberToMoney } from '../../utils/number';
import './style.scss';

const Card = ({ props }) => {
    return (
        <div className="card-container">
            <Row gutter={10}>
                <Col md={6}>
                    <div className="card-image" style={{ backgroundImage: `url(${props.image})`}}></div>
                </Col>
                <Col md={10} style={{ textAlign: 'left' }}>
                    <div className="card-header">
                        <h2>{props.name}</h2>
                        <Icon icon='star-empty' size={21} style={{ cursor: 'pointer' }}/>
                    </div>
                    <p style={{ fontSize: 17 }}>{props.distance}</p>
                    <p style={{ fontSize: 17 }}><b>{props.rating}</b> ({props.comments} comments)</p>
                </Col>
                <Col md={8}>
                    <Row gutter={[10, 10]} style={{ padding: 10 }}>
                        {props.price.map(item => (
                            <Col md={24} style={{ backgroundColor: '#C7F3D3', padding: 10, borderRadius: 10 }}>
                                <h3 style={{ margin: 7, color: '#073313' }}>{item.name}</h3>
                                <div className="card-actions">
                                    <p style={{ color: '#073313', fontWeight: 500, fontSize: 16 }}>{formatNumberToMoney(item.value)}</p>
                                    <button className='primary-button'>View Deal &gt;</button>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Card;