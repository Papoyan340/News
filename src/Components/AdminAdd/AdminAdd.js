import { Formik,useState } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'

import { dataContext } from "../../App";

import './AdminAdd.css'

function AdminAdd() {

  const {setData} = useContext(dataContext)
  const {data} = useContext(dataContext)
   const navigate = useNavigate()

   const schema = yup.object().shape({
      names: yup.string().typeError('Necessarily text').required('Necessarily'),
      cent: yup.string().typeError('Necessarily text').required('Necessarily'),
      img: yup.string().typeError('Necessarily text').required('Necessarily'),
      info: yup.string().typeError('Necessarily text').required('Necessarily')
    })
  
    return(
      <Formik
        initialValues={{
         names: '',
         cent: '',
         img: '',
         info: ''
        }}
  
        onSubmit={(values) => {
      
         setData((prev) => {
            return [
               ...prev,
               {
                  id: new Date().getTime().toString(),
                  names: values.names,
                  cent: `${values.cent} $`,
                  img: values.img,
                  info: values.info
                }
            ]
         })
          navigate('/shop')
          
        }}
  
        validateOnBlur
        
        validationSchema={schema}
      >
        {
          ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
            <form className='form' onSubmit={handleSubmit}>
               <div className="top">
                  <div className="title">Add</div>

                  <div className="inputHome">

                     {touched.names && errors.names && <span className='error'>{errors.names}</span>}
                    <input
                      className='input'
                      type={`text`}
                      name={`names`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.names}
                      placeholder=' '
                    />

                    <label htmlFor="names" className="label">Names</label>

                  </div>

                  <div className="inputHome">

                     {touched.cent && errors.cent && <span className='error'>{errors.cent}</span>}
                    <input
                      className='input'
                      type={`text`}
                      name={`cent`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.cent}
                      placeholder=' '
                    />

                    <label htmlFor="cent" className="label">cent</label>

                  </div>

                  <div className="inputHome">

                      {touched.img && errors.img && <span className='error'>{errors.img}</span>}
                    <input
                      className='input'
                      type={`text`}
                      name={`img`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.img}
                      placeholder=' '
                    />

                    <label htmlFor="img" className="label">img</label>

                  </div>

                  <div className="inputHome">

                      {touched.info && errors.info && <span className='error'>{errors.info}</span>}
                    <input
                      className='input'
                      type='text'
                      name={`info`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.info}
                      placeholder=' '
                    />

                    <label htmlFor="info" className="label"> info</label>

                  </div>

                  <button
                    className='submit'
                    disabled={!isValid && !dirty}
                    type={`submit`}
                  >Add</button>

               </div>   
            </form>
          )
        }
      </Formik>
    )
}

export default AdminAdd