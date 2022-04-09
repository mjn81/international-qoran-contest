import { useState } from "react";

import faIR from "@constants/fa-IR";
import { QuizForm } from "@components/forms";
import './Quiz.scss';


const Quiz = () => {
    const [question, setQuestion] = useState({
      question:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.  چیست؟',
      answers: ['گزینه ۱', 'گزینه ۲', 'گزینه ۳', 'گزینه ۴'],
    });

    return ( 
        <div className="quiz">
            <h2>{faIR["quiz.title"]}</h2>
            <h2 className="question">{question.question}</h2>
            <QuizForm answers={question.answers} />
        </div>
     );
}
 
export default Quiz;