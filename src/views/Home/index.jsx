import SearchBar from "../../components/SearchBar";
import FastMarquee from "../../components/Marquee";
import Popular from "../../components/Popular";
import './style.scss';
import About from "../../components/About";

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
                <Popular />
            </div>
            <div className="homepage-about">
                <About />
            </div>
        </>
    );
}

export default Homepage;