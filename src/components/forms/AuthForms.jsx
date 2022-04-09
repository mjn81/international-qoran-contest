import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

import faIR from '@constants/fa-IR';
import { LOGIN_INITIAL, LOGIN_NAMES , REGISTER_INITIAL , REGISTER_NAMES } from '@constants/values';
import { Input, TextLink, Button, CheckBox } from '@components/core';


export const LoginForm = () => {
  const navigator = useNavigate();
  return (
    <Formik
      initialValues={LOGIN_INITIAL}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);

        navigator('/user/quiz');
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form>  
          <Field
            name={LOGIN_NAMES.ncode}
            type="text"
            placeholder={faIR['auth.nationalCode']}
            as={Input}
          />
          <Field
            name={LOGIN_NAMES.password}
            type="phone"
            placeholder={faIR['auth.phoneNumber']}
            as={Input}
          />
          <TextLink to="/auth/forget-password" margin="1rem 0">
            {faIR['auth.forgotPassword']}
          </TextLink>
          <CheckBox
            name={LOGIN_NAMES.isRemember}
            value={values.rememberMe}
            setValue={setFieldValue}
            text={faIR['auth.rememberMe']}
          />
          <Button type="submit" disabled={isSubmitting} margin='20px 0  0  0 '>
            {faIR['auth.login']}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export const RegisterForm = () => {
  const navigator = useNavigate();
  return (
    <Formik
      initialValues={REGISTER_INITIAL}
      onSubmit={(values, { setSubmitting }) => {
        // authorization
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);

        navigator('/user/quiz');
        
        
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form>  
          <Field
            name={REGISTER_NAMES.fname}
            type="text"
            placeholder={faIR['auth.firstName']}
            as={Input}
          />
          <Field
            name={REGISTER_NAMES.lname}
            type="text"
            placeholder={faIR['auth.lastName']}
            as={Input}
          />
          <Field
            name={REGISTER_NAMES.phoneNumber}
            type="phone"
            placeholder={faIR['auth.phoneNumber']}
            as={Input}
          />
          <Field
            name={REGISTER_NAMES.ncode}
            type="text"
            placeholder={faIR['auth.nationalCode']}
            as={Input}
          />
          <CheckBox
            name={REGISTER_NAMES.isRemember}
            value={values.rememberMe}
            setValue={setFieldValue}
            text={faIR['auth.rememberMe']}
            margin='15px auto'
          />
          <Button type="submit" disabled={isSubmitting} margin='20px 0  0  0 '>
            {faIR['auth.login']}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
