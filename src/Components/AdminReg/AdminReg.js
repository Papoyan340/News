import { Formik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'

import { dataContext } from "../../App";

function AdminReg(){

  const {setAdmin} = useContext(dataContext)

   const navigate = useNavigate()

   const schema = yup.object().shape({
      name: yup.string().typeError('Necessarily text').required('Necessarily'),
      email: yup.string().typeError('Necessarily text').email('Email Unknown').required('Necessarily'),
      password: yup.string().typeError('Necessarily text').required('Necessarily'),
      confirmPassword: yup.string().typeError('Necessarily text').oneOf([yup.ref('password')], 'Mismatch').required('Necessarily')
    })
  
    return(
      <Formik
        initialValues={{
          id: new Date().getTime().toString(),
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
  
        onSubmit={(values) => {
         setAdmin([
           values
         ])
         navigate('/admin/adminlog')
        }}
        
        validateOnBlur
        
        validationSchema={schema}
      >
        {
          ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
            <form className='form' onSubmit={handleSubmit}>
               <div className="top">
                  <div className="title">Admin Registration</div>

                  <div className="inputHome">

                     {touched.name && errors.name && <span className='error'>{errors.name}</span>}
                    <input
                      className='input'
                      type={`text`}
                      name={`name`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      placeholder=' '
                    />

                    <label htmlFor="name" className="label">First name</label>

                  </div>

                  <div className="inputHome">

                     {touched.email && errors.email && <span className='error'>{errors.email}</span>}
                    <input
                      className='input'
                      type={`text`}
                      name={`email`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder=' '
                    />

                    <label htmlFor="email" className="label">Email</label>

                  </div>

                  <div className="inputHome">

                      {touched.password && errors.password && <span className='error'>{errors.password}</span>}
                    <input
                      className='input'
                      type={`password`}
                      name={`password`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder=' '
                    />

                    <label htmlFor="password" className="label">Password</label>

                  </div>

                  <div className="inputHome">

                      {touched.confirmPassword && errors.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}
                    <input
                      className='input'
                      type='password'
                      name={`confirmPassword`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      placeholder=' '
                    />

                    <label htmlFor="confirmPassword" className="label"> ConfirmPassword</label>

                  </div>

                  <button
                    className='submit'
                    disabled={!isValid && !dirty}
                    type={`submit`}
                  >Registration</button>

               </div>   
            </form>
          )
        }
      </Formik>
      
    )
  }

export default AdminReg