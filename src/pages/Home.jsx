import { useEffect, useState } from 'react';
import './Home.scss';
import faIR from '@constants/fa-IR';
import Header from '@assets/images/header.webp';
import Logo from '@assets/images/logo.png';
import Rank from '@components/rank/Rank';
import { ToastContainer } from 'react-toastify';
import { useGetWinners } from '../hooks/useFetch';
import { api } from '../api';
const Home = () => {
  const [data, isLoading, error] = useGetWinners();
  const [date, setDate] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [select, setSelect] = useState(null);

  useEffect(() => {
    api
      .get('/contest/uwinners')
      .then((res) => res.data)
      .then((data) => {
         setDate(
          data.map((item) => {
            return {
              date: new Intl.DateTimeFormat('fa-IR', {
                dateStyle: 'medium',
              }).format(Date.parse(item.won_at.replaceAll('-', '/'))),
              won: item.won_at,
            };
          })
        );
      })
      .then(() => {
        data && setFiltered(data.filter(item => item.won_at === date.at(-1).won));
      });
  }, [data]);

  const [isOpen, setIsOpen] = useState(false);
  const onOpen = (e) => {
    setIsOpen((s) => !s);
  };

  const onDatePick = (index) => {
    setSelect(index);
    setFiltered(data.filter((item) => item.won_at === index));
    setIsOpen(false);
  };

  return (
    <div className="home-container">
      <img src={Header} alt="header" className="title" />
      <h2>{faIR['home.title']}</h2>
      <h3>{faIR['home.description']}</h3>
      <div className="top-container">
        <div className="data-container">
          <div className="date">
            <h2 onClick={onOpen}>
              {select && !!date && date.find(item => item.won === select).date}
              {!select && date?.at(-1)?.date}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </h2>

            {isOpen && (
              <ul>
                {date &&
                  date.map((d, index) => (
                    <li
                      key={index}
                      className="picker"
                      onClick={() => onDatePick(d.won)}
                    >
                      {d.date}
                    </li>
                  ))}
              </ul>
            )}
          </div>
          <div className="rankings">
            {!filtered &&
              data &&
              data.map((item, index) => (
                <Rank rank={item} key={index} index={index} />
              ))}
            {filtered &&
              filtered.map((item, index) => (
                <Rank rank={item} key={index} index={index} />
              ))}
          </div>
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
