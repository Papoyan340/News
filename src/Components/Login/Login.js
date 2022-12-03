import { Formik } from "formik";
import { memo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'

import { dataContext } from "../../App";

import './Login.css'

function Login(){
    
   const {login} = useContext(dataContext)
 
   const navigate = useNavigate()

   const islogin =  yup.object().shape({
      email: yup.string().email('petq e lini email').required('partadir e'),
      password: yup.string().typeError('petq e lini text').required('partadier e')
   })
   return(
      <>
         <div>
            <Formik 
               initialValues={{
                  email: '',
                  password: ''
               }}

               onSubmit = {(values) =>{
                  
                  if (values.password === login.password && values.email === login.email) {
                     
                     navigate('/shop')
                 }
               }}

               validateOnBlur

               validationSchema={islogin}
            >  
               {
                   ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) =>

                   <form className='form Login' onSubmit={handleSubmit}>
                   <div className="top">
                      <div className="title">Login</div>
    
                      
    
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
    
                      
    
                      <button
                        className='submit'
                        disabled={!isValid && !dirty}
                        type={`submit`}
                      >Registration</button>
    
                   </div>   
                </form>
               }
         


            </Formik>
         </div>
      </>
   )
}

export default memo(Login, (prev, next) => JSON.stringify(prev) === JSON.stringify(next) ) 