import { NavLink, Link } from "react-router-dom";
import { memo, useCallback } from "react";




function Section({admin, setData, id, img, cent, names}) {

   

  const delItem = useCallback((id) => {

    setData((prev) => {
      return [
          ...prev.filter((el) => el.id !== id)
      ]
  })

  }, [])

  return (
   <>
   {
      <section>
         <div className="block">
           <div className="img-doc">
             <img src={img} alt ='' />
             <div className="get-appointment">
               <Link to = {`/shop/${id}`}>Read more</Link>
             </div>
             <div className="get-appointmentDell">
              <p><NavLink style={{opacity: admin[0] ? '1' : '0'}} onClick={() => delItem(id)} to='#'>Delete</NavLink></p>
             </div>
           </div>
           <div className="name-info">
             <p>{cent}</p>
             <h2>
               <NavLink to=''>{names}</NavLink>
             </h2>
           </div>
         </div>
      </section>

   }
   </>
  )
}

export default memo(Section, (prev, next) => JSON.stringify(prev) === JSON.stringify(next)) 