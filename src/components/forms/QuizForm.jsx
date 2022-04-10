import {useNavigate} from 'react-router-dom';
import { Formik, Form } from "formik";

import faIR from "@constants/fa-IR";
import {QUIZ_INITIAL} from '@constants/values';
import { Button } from "@components/core";
import Answer from '@components/answer/Answer';

export const QuizForm = ({answers}) => {
    const navigator = useNavigate();
    return ( 
        <Formik initialValues={QUIZ_INITIAL} onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                
                setSubmitting(false);
            }, 1000);
            console.log(values)
            navigator('/' , {replace: true});
          
        }}>
            {({ setFieldValue , values , isSubmitting }) => (
                <Form>
                    {answers.map((answer, index) => (
                        <Answer name="answer_id" answer={answer} key={index} value={values["answer_id"]} setValue={setFieldValue} />
                    ))}

                    <Button type="submit" disabled={isSubmitting} margin='3rem 0  0  0 ' radius='2rem'>
                        {faIR['quiz.submit']}
                    </Button>    
                </Form>
            )}
        </Formik>
    );
}
