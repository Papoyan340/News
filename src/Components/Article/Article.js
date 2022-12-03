import axios from 'axios';
import { useEffect, memo, useState, useContext} from 'react';
import { useNavigate  } from 'react-router-dom';


import Section from '../Section/Section';
import { dataContext } from '../../App';

import './Article.css'

function Article () {
   
   const navigaten = useNavigate
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(true)
   const [feching, setFeching] = useState(true)

   const {data} = useContext(dataContext)
   const {setData} = useContext(dataContext)
   const {maxCaunt} = useContext(dataContext)
   const {setMaxCaunt} = useContext(dataContext)
   const {page} = useContext(dataContext)
   const {setPage} = useContext(dataContext)
   const {admin} = useContext(dataContext)


   

   useEffect(() => {  
      if(feching && data.length <= maxCaunt) {
   
         axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=21&_pages=${page}`)

         .then((response) => {

            setMaxCaunt(+response.headers['x-total-count'])

            const newdata = response.data.map((el) => ({
               id : el.id.toString(),
               names: el.title.slice(0, el.title.indexOf(' ')),
               cent:Math.floor((Math.random() * 10) + 1) * 100,
               img: el.url,
               info: el.title
            }))

            
             setPage(prev => prev + 1)
             setData(prev => [...prev, ...newdata])
             setLoading(false)
             
         })
         .catch((error)=> {
             console.log('data error')
             setError(false)
         })
         .finally(() => {
            setFeching(false)
         })
      }   
   },[feching])

   useEffect(() => {
      document.addEventListener('scroll' , scrollHendler)

      return () => {
         document.removeEventListener('scroll', scrollHendler)
      }
   })

   const scrollHendler = (e) => {
      
      if(e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerHeight < 1600) {
         setFeching(true)
      }

   }
   
   return (
      <>
         
            {
               error ? <article className="container"> 
                  {
                     loading ? <div className='loading'><h1>Loading<span>...</span></h1><div className='anime'></div></div> :
                     data.map(el=> <Section key={el.id} admin={admin} setData={setData} id={el.id} img ={el.img} cent={el.cent} names={el.names}/>)
                  }
                  <div>
                     
                  </div>
               </article> : <h1>No data</h1>  
            }
         
         
      </>
   )
 }

 export default memo(Article, (prev, next) => JSON.stringify(prev) === JSON.stringify(next))