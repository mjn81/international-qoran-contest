import {useNavigate} from 'react-router-dom';
import { Formik, Form } from "formik";

import faIR from "@constants/fa-IR";
import {QUIZ_INITIAL} from '@constants/values';
import { Button } from "@components/core";
import Answer from '@components/answer/Answer';
import { answerq } from '../../api';
import { toast, ToastContainer } from 'react-toastify';
export const QuizForm = ({answers , group , token}) => {
    const navigator = useNavigate();
    return ( 
        <Formik initialValues={QUIZ_INITIAL} onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            answerq(group, values, token).then(() => {
                toast.success('با موفقیت ثبت شد');
            }).then(() => {
                navigator('/user/finished/quiz.quizFinish', { replace: true });
            }).catch((error) => {
                navigator('/', { replace: true });
                console.error(error);
            }).finally(() => {
                setSubmitting(false);
            });
        }}>
            {({ setFieldValue , values , isSubmitting }) => (
                <Form>
                    {answers.map((answer, index) => (
                        <Answer name="answer_id" answer={answer} key={index} value={values["answer_id"]} setValue={setFieldValue} />
                    ))}

                    <Button type="submit" disabled={isSubmitting} margin='3rem 0  0  0 ' radius='2rem'>
                        {faIR['quiz.submit']}
                    </Button>
                    <ToastContainer />
                </Form>
            )}
        </Formik>
    );
}
