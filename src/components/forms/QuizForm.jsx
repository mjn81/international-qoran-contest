import { Formik , Form } from "formik";

import {QUIZ_INITIAL} from '@constants/values';
import Answer from '@components/answer/Answer';

export const QuizForm = ({answers}) => {
    return ( 
        <Formik initialValues={QUIZ_INITIAL} onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
        }}>
            {({ setFieldValue , isSubmitting }) => (
                <Form>
                
                    {answers.map((answer, index) => (
                        <Answer name="answer" answer={{ answer: answer, id: index }} key={index} setValue={setFieldValue} />
                    ))}
                </Form>
            )}
        </Formik>
    );
}
