import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { router } from "../../configs/router";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Result
            status={'404'}
            title={'404'}
            subTitle={'Không tìm thấy trang, vui lòng quay về trang chủ.'}
            extra={<Button onClick={() => navigate(router.HOME)}>Trang chủ</Button>}
        />
    );
}

export default NotFound;