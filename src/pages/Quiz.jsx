import { useState } from 'react';

import faIR from '@constants/fa-IR';
import { QuizForm } from '@components/forms';
import './Quiz.scss';

const Quiz = () => {
  const [question, setQuestion] = useState({
    id: 1,
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.  چیست؟',
    answers: [
      {
        id: 1,
        answer: 'سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استل',
      },
      {
        id: 2,
        answer:
          'سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است دوم',
      },
      {
        id: 3,
        answer: 'جواب سوم',
      },
      {
        id: 4,
        answer: 'جواب چهارم',
      },
    ],
  });

  return (
    <div className="quiz">
      <h2>{faIR['quiz.title']}</h2>
      <h2 className="question">{question.text}</h2>
      <div className="form">
        <QuizForm answers={question.answers} />
      </div>
    </div>
  );
};

export default Quiz;
