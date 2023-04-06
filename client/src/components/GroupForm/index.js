import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { createGroup } from '../../store/groupsSlice';

const initialValues = {
  name: '',
  image: ''
}
const GroupForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, formikBag) => {
    values.userId = 1;
    // console.log(values);
    dispatch(createGroup(values));
    // formikBag.resetForm();
  }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formikProps) => {
        return (
          <Form >
            <Field type="text" name="name" placeholder="name" />
            <label>
              <input 
              type="file" 
              name="image" 
              onChange={({target})=>
              formikProps.setFieldValue('image',target.files[0])}/>
            </label>
            <button type="submit">add new group</button>
          </Form>)
      }}

    </Formik>
  );
}

export default GroupForm;
