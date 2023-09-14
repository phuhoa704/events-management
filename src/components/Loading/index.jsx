import './style.scss';

const Loading = () => {
    return (
        <div className="loading">
            <div className="loading-comp">
                <div className="loading-hourglass"></div>
                <span>Đang tải, vui lòng đợi...</span>
            </div>
        </div>
    );
}

export default Loading;