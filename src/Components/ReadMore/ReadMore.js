import React, {useEffect, useState, memo, useContext} from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './ReadMore.css'

import { dataContext } from '../../App';

function ReadMore() {

   const {data} = useContext(dataContext)
    
   const [comments, setComments] = useState([])
   // useEffect(()=>{
   //    axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10')
   //    .then((response)=> {
   //       console.log(response.data);
   //       const coment = response.data.map((el) => ({
   //          id: el.id.toString(),
   //          email: el.email,
   //          text: el.body,
   //          postid: el.postid
   //       }))
   //       setComments(coment)
   //    })
   // },[])
   const {id} = useParams()

   const [info, infosrtinfo] = useState([]);
   const navigate = useNavigate()
   useEffect(() =>{
     if (data.filter((el) => el.id === id)[0]) {
       infosrtinfo(data.filter((el) => el.id === id)[0])
    }else{
      navigate('/shop')
    }  

   }, [])
  return (
   <>
   <article className="container">
   
      <section>
         <div className="block">
           <div className="img-doc">
             <img src={info.img} alt ='' />
             
           </div>
           <div className="name-info">
             <p>{info.cent} $</p>
             <h2>
               <NavLink to=''>{info.names}</NavLink>
               <NavLink to=''>{info.info}</NavLink>
             </h2>
           </div>
         </div>
      </section>
   
 </article>
   
   <div>
      {
         comments.map(el => <div key={el.id}>
            <div>

            </div>
            <h1>{el.email}</h1>
         </div>)
      }
   </div>
 </>
  )
}

export default memo(ReadMore, (prev, next) => JSON.stringify(prev) === JSON.stringify(next))