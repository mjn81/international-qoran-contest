import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import faIR from '@constants/fa-IR';
import codes from '@constants/codes';
import { QuizForm } from '@components/forms';
import './Quiz.scss';
import { context } from '../context/context';
import { useContext } from 'react';
import { useGetData } from '../hooks/useFetch';
import { toast, ToastContainer } from 'react-toastify';

const Quiz = () => {
  const { gp } = useParams();
  const navigator = useNavigate();
  const { state } = useContext(context);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!state?.token && !token) {
      navigator(`/auth/login/${gp}`, { replace: true });
    }
  }, []);

  let num = -1;
  for (let i = 0; i < 20; i++) {
    if (gp === codes[i]) {
      num = i + 1;
      break;
    }
  }
  useEffect(() => {
    if (num === -1) {
      navigator('/', { replace: true });
    }
  }, []);
  const random = num * 2 - Math.floor(Math.random()*2);

  const [data,error ,  isLoading] = useGetData(
    `contest/group/${num}/questions/${random}`, 
    localStorage.getItem('token')
  );
    
  useEffect(() => {
    
    if (error.code === 401) {
      toast.error(error.msg);
      navigator('/auth/login', { replace: true });
    }
    if (error.code === 403) {
      toast.error(error.msg);
      navigator('/user/finished/quiz.answered', { replace: true });
    }
  }, [error])
  
  const e2p = (s) => s.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);

  return (
    <>
      {isLoading && <div>{faIR['quiz.isLoading']}</div>}
      {data && (
        <div className="quiz">
          <h2>{faIR['quiz.title'] +' '+ e2p(String(num))}</h2>
          <h2 className="question">{data.text}</h2>
          <div className="form">
            <QuizForm answers={data.answers} group={num} token={localStorage.getItem('token')} />
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default Quiz;
