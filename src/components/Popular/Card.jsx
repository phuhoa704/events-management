import { formatNumberToMoney } from '../../utils/number';
import { useNavigate } from 'react-router-dom';
import { router } from '../../configs/router';

const PopularCard = ({ record }) => {
    const navigate = useNavigate();
    return (
        <div className="popular-card"style={{ backgroundImage: `url(${record.url})` }} onClick={() => navigate(router.DEALS)}>
            {/* <div className="bg-1" ></div>
            <div className="bg-2" style={{ backgroundImage: `url(${record.hoverUrl})` }}></div> */}
            <h4>{record.name}</h4>
            <h5>{record.numPlaces} sự kiện</h5>
            <h5>Avg - {formatNumberToMoney(record.avg)}</h5>
        </div>
    );
}

export default PopularCard;