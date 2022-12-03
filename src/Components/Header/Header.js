
import { memo, useContext} from "react";
import { NavLink, Link } from "react-router-dom";

import { dataContext } from "../../App";

import './Header.css'

function Header() {
   
  const {admin} = useContext(dataContext)

  return (
   <div>
    <header>
  <div>
    <div className="contact container flex">
      <div className="left-menu">
        <ul className="flex">
          <li><NavLink to="#">About</NavLink></li>
          <li><NavLink to="#">Doctors</NavLink></li>
          <li><NavLink to="#">Contact</NavLink></li>
          <li><NavLink to="#">FAQ</NavLink></li>
        </ul>
      </div>
      <div className="right-menu">
        <ul className="flex">
          <li><i className="fa fa-phone" aria-hidden="true" />  +880 1234 56789</li>
          <li><a href=""><i className="fa fa-comment" aria-hidden="true" />support@yourmail.com</a></li>
        </ul>
      </div>
    </div>  
  </div>
  <div className="static">
    <nav className="container flex">
      <div className="logo">
        <NavLink to={'/shop'}><img src={require('../Header/images logo.png')} alt='' /></NavLink>
      </div>
      <div className="middle-menu">
        <ul className="flex ">
          <li className="active"><a href="">Home<i className="fa fa-chevron-down" aria-hidden="true" /></a>
            <ul className="home-non-menu">
              <li><NavLink to="#">Default Homepage</NavLink></li>
              <li><NavLink to="#">Animation Homepage</NavLink></li>
            </ul>
          </li>
         
          <li><a href="">Services<i className="fa fa-chevron-down" aria-hidden="true" /></a>
            <ul className="home-non-menu">
              <li><NavLink to="#">Default Homepage</NavLink></li>
              <li><NavLink to="#">Animation Homepage</NavLink></li>
            </ul>
          </li>
          <li><a href="">Pages<i className="fa fa-chevron-down" aria-hidden="true" /></a>
            <ul className="home-non-menu">
              <li><NavLink to="#">Default Homepage</NavLink></li>
              <li><NavLink to="#">Animation Homepage</NavLink></li>
              <li><NavLink to="#">Sign Up</NavLink></li>
              <li><NavLink to="#">Our Pricing</NavLink></li>
              <li><NavLink to="#">Testimonials</NavLink></li>
              <li><NavLink to="#">Time Table</NavLink></li>
              <li><NavLink to="#">Appointment</NavLink></li>
              <li><NavLink to="#">About Us</NavLink></li>
            </ul>
          </li>
          <li><a href="">Blogs<i className="fa fa-chevron-down" aria-hidden="true" /></a>
            <ul className="home-non-menu">
              <li><NavLink to="#">Default Homepage</NavLink></li>
              <li><NavLink to="#">Animation Homepage</NavLink></li>
            </ul>
          </li>
          <li><a href>Contact US</a></li>
        </ul>
      </div>
      <div className="right-bottom">
         <Link to = {admin[0] ? '/admin/add' : '/admin'}>Admin</Link>
      </div>
    </nav>
  </div>
  
</header>


</div>

  )
  
}





export default memo(Header, (prev, next) => JSON.stringify(prev) === JSON.stringify(next) )