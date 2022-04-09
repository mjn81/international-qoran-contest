import { Field } from 'formik';
import './Answer.scss';

const AnswerItem = ({ answer }) => {
  return <div className="answer">{answer}</div>;
};

const Answer = ({ answer, name, setValue }) => {
  return (
    <Field
      type="radio"
      name={name}
      as={AnswerItem}
      answer={answer.answer}
      onClick={() => setValue(name, answer.id)}
    />
  );
};

export default Answer;
