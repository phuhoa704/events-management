import { formatNumberToMoney } from '../../utils/number';
import { Typography } from 'antd';

const { Title } = Typography;

const PopularCard = ({ record }) => {
    return (
        <div className="popular-card" style={{ backgroundImage: `url(${record.url})` }}>
            <div className="backdrop">
            </div>
            <Title level={4}>{record.name}</Title>
            <Title level={5}>{record.numPlaces} sự kiện</Title>
            <Title level={5}>Avg - {formatNumberToMoney(record.avg)}</Title>
        </div>
    );
}

export default PopularCard;