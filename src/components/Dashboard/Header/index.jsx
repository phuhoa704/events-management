import { useSelector } from "react-redux";

const DashboardHeader = () => {
    const { user } = useSelector(state => state.auth);
    return ( 
        <section className="dashboard-header">
            <h2>My Account</h2>
            <span>{user.name}</span>
        </section>
    );
}

export default DashboardHeader;