import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

import faIR from '@constants/fa-IR';
import { LOGIN_INITIAL, LOGIN_NAMES , REGISTER_INITIAL , REGISTER_NAMES } from '@constants/values';
import { Input, Button, CheckBox } from '@components/core';
import './Forms.scss';

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
          <div className="icon-wrapper">
            <Field
              name={LOGIN_NAMES.ncode}
              type="text"
              placeholder={faIR['auth.nationalCode']}
              as={Input}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div className="icon-wrapper">
            <Field
              name={LOGIN_NAMES.password}
              type="phone"
              placeholder={faIR['auth.phoneNumber']}
              as={Input}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          {/* <TextLink to="/auth/forget-password" margin="1rem 0">
            {faIR['auth.forgotPassword']}
          </TextLink> */}
          <CheckBox
            name={LOGIN_NAMES.isRemember}
            value={values.rememberMe}
            setValue={setFieldValue}
            text={faIR['auth.rememberMe']}
            margin="1rem auto"
          />
          <Button type="submit" disabled={isSubmitting} margin="20px 0  0  0 ">
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
          <div className="icon-wrapper">
            <Field
              name={REGISTER_NAMES.fname}
              type="text"
              placeholder={faIR['auth.firstName']}
              as={Input}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <Field
            name={REGISTER_NAMES.lname}
            type="text"
            placeholder={faIR['auth.lastName']}
            as={Input}
          />
          <div className="icon-wrapper">
            <Field
              name={REGISTER_NAMES.phoneNumber}
              type="phone"
              placeholder={faIR['auth.phoneNumber']}
              as={Input}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>

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
            margin="15px auto"
          />
          <Button type="submit" disabled={isSubmitting} margin="20px 0  0  0 ">
            {faIR['auth.register']}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
