import './Home.scss';
import faIR from '@constants/fa-IR';
import Header from '@assets/images/header.webp';
import Logo from '@assets/images/logo.png';
import Rank from '@components/rank/Rank';

const Home = () => {
  const date = '۱۴شهریور ۱۳۹۷';
  const dummyData = [
    {
      id: 1,
      name: 'امیرحسین مویدی نیا',
    },
    {
      id: 2,
      name: 'امیرح مویدی نیا',
    },
    {
      id: 1,
      name: 'امیرحسین مویا',
    },
  ];
  return (
      <div className="home-container">
      <img src={Header} alt="header" className="title" />
      <h2>{faIR['home.title']}</h2>
      <h3>{faIR['home.description']}</h3>
      <div className="top-container">
        <div className="data-container">
          <h2 className="date">{date}</h2>
          <div className="rankings">
            {dummyData.map((item, index) => (
              <Rank rank={item} key={index} index={index} />
            ))}
          </div>
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
