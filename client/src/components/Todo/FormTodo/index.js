import { Field, Form, Formik } from 'formik';
import React from 'react';

const FormTodo = (props) => {
  const { onSubmit, initialValues } = props;
  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      <Form>
        <Field name='body' />
        <br />
        <input type='submit' value='Add task' />
      </Form>
    </Formik>
  );
}


export default FormTodo;
