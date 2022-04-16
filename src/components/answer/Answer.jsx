import { Field } from 'formik';

import { RadioButton } from "@components/core";
import './Answer.scss';

const AnswerItem = ({ answer, value , setValue , name }) => {
  
  return <div className="answer"  onClick={() => setValue(name , answer.id)}>
     
    <RadioButton checked={value === answer.id} />
   <p>
    {answer.text}
    </p>
  </div>;
};

const Answer = ({ answer, name, setValue , value }) => {
  return (
    <Field
      type="radio"
      name={name}
      as={AnswerItem}
      answer={answer}
      value={value}
      setValue={setValue}
    />
  );
};

export default Answer;
