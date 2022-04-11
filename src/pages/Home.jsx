
import './Home.scss';
import faIR from '@constants/fa-IR';
import Header from '@assets/images/header.png';
import Rank from '@components/rank/Rank';

const Home = () => {

    const dummyData = [
        { 
            id: 1,
            name: "امیرحسین مویدی نیا",
        },
        { 
            id: 2,
            name: "2امیرحسین مویدی نیا",
        },
        { 
            id: 1,
            name:"3امیرحسین مویدی نیا"
        },
    ];
    return (<div className="home-container">
        <img src={Header} alt="header" className="title" />
        <h2>{faIR["home.title"]}</h2>
        <h3>{faIR["home.description"]}</h3>
        <div className="top-container">
            {dummyData.map((item, index) => (
                <Rank rank={item} key={index} />
            ))}
        </div>
    </div>  );
}
 
export default Home;