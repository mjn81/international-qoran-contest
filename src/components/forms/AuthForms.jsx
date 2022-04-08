import { Formik } from 'formik';

import faIR from '@constants/fa-IR';
import { LOGIN_INITIAL , LOGIN_NAMES } from '@constants/values';
import {Input} from '@components/core';

export const LoginForm = () => {
    return <Formik initialValues={LOGIN_INITIAL} onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
        }, 400)
    }}>
        {({ isSubmitting }) => (
            <form>
                <Input name={LOGIN_NAMES.ncode} placeholder={faIR["auth.nationalCode"]} />
                <Input name={LOGIN_NAMES.password} placeholder={faIR["auth.phoneNumber"]} />

            </form>
        )}
    </Formik>

}