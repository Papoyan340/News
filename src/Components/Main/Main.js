import { useNavigate, NavLink, Link } from "react-router-dom";
import { memo, useEffect, useState} from "react";


import './Main.css'

function Main() {


   const navigate = useNavigate()
   return (
     <div>
 
       <main >
          <div className="met-our">
             <h1>Meet Our Qualified Doctors</h1>
             <ul>
               <li><NavLink to=''>Home</NavLink></li>
               <li><i className="fa fa-chevron-right" aria-hidden="true" /></li>
               <li>Doctors</li>
             </ul>
            <div className="navigateMain">   
               <ul className="navigate">
                  <li onClick={() => navigate(-1)}><NavLink className="buttOn" to="#">Prev</NavLink></li>
                  <li onClick={() => navigate(1)}><NavLink className="buttOn" to="#">Next</NavLink></li>
               </ul>
            </div>
          </div>
       </main>
 
     </div>
   )
 }

 export default memo(Main, (prev, next) => JSON.stringify(prev) === JSON.stringify(next))