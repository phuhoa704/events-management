const TypeItem = ({ item }) => {
    return (
        <div className="type-item">
            <div className="type-container">
                <div className="type-item-icon">
                    <img src={item.icon} alt="" />
                </div>
                <div className="type-item-label">
                    <span>{item.name}</span>
                </div>
            </div>
        </div>
    );
}

export default TypeItem;