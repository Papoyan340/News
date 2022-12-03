
import { Route, Routes, useNavigate  } from 'react-router-dom';
import { createContext, useState } from 'react';


import './App.css';

import Article from './Components/Article/Article';
import AdminAdd from './Components/AdminAdd/AdminAdd';
import ReadMore from './Components/ReadMore/ReadMore';
import ShopWraper from './Components/ShopWraper/ShopWraper'
import AdminWrapper from './Components/AdminWrapper/AdminWrapper';
import AdminReg from './Components/AdminReg/AdminReg';
import AdminLog from './Components/AdminLog/AdminLog';

const dataContext = createContext()

function App() {


   const navigaten = useNavigate()
   const [login, setLogin] = useState(null)
   const [admin, setAdmin] = useState([])

   const [data, setData] = useState([])
   const [page, setPage] = useState(1)
   const [maxCaunt, setMaxCaunt] = useState(0)
   

  return (
    <div className="App">
      <dataContext.Provider value={{data , setData, maxCaunt, setMaxCaunt, admin, setAdmin, page, setPage, setLogin, login}}>
         
         <Routes>
   
            <Route path='shop' element={<ShopWraper/>} >
                 <Route index element={<Article />} />
                 <Route path=':id'element={<ReadMore />} />
            </Route>
            <Route path='admin' element={<AdminWrapper/>} >
               <Route index element={<AdminReg/>} />
               <Route path='adminlog' element={<AdminLog />} />
               <Route path='add' element={<AdminAdd/>}/>
            </Route>
   
             <Route path='*' element ={<div style={{margin: '100px'}}>
               <h1>Error 404</h1>
               <button style={{padding: '5px', margin: '20px'}} onClick={() => navigaten('/shop')}>Home</button>
            </div>}/>
   
         </Routes> 

      </dataContext.Provider>
       
    </div>
  );
}
export {dataContext}
export default App;
