import SearchBar from "../../components/SearchBar";
import FastMarquee from "../../components/Marquee";
import Popular from "../../components/Popular";
import About from "../../components/About";
import Types from "../../components/Types";
import './style.scss';

const Homepage = () => {
    return (
        <>
            <div className="homepage-header">
                <div className="search-container">
                    <SearchBar />
                </div>
                <div className="marquee">
                    <FastMarquee />
                </div>
            </div>
            <div className="homepage-content">
                <Types />
                <Popular />
            </div>
            <div className="homepage-about">
                <About />
            </div>
        </>
    );
}

export default Homepage;