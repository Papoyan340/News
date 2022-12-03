import { useEffect, useState } from "formik";
import {  Route, Routes, Nav, NavLink, useNavigate } from "react-router-dom";

import './Footer.css'

function Footer() {
  return (

      <div>

         <section className="sing">
            <div className="container flex">
              <div className="text">
                <h2>Sign up for newsletter</h2>
                <p>Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,
                  <br />
                  homero alterum.
                </p>
              </div>
              <div className="emali-sub">
                <form action="">
                  <input className="email" type="email" placeholder="Your email address" />
                  <button>Subscribe</button>
                </form>
              </div>
            </div>
         </section>



        <footer>
          <div className="list container flex">
            <div className="about max-with25">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor
                incididunt ut labore dolore magna.
              </p>
              <ul className="flex">
                <li><NavLink to=''><i className="fa-brands fa-facebook-f" /></NavLink></li>
                <li><NavLink to=''><i className="fa-brands fa-google-plus-g" /></NavLink></li>
                <li><NavLink to=''><i className="fa-brands fa-twitter" /></NavLink></li>
                <li><NavLink to=''><i className="fa-brands fa-vimeo-v" /></NavLink></li>
                <li><NavLink to=''><i className="fa-brands fa-pinterest-p" /></NavLink></li>
              </ul>
            </div>
            <div className="links max-with25">
              <h2>Quick Links</h2>
              <div className="left">
                <ul>
                  <li><NavLink to=''><i className="fa fa-caret-right" aria-hidden="true" />Home</NavLink></li>
                  <li><NavLink to=''><i className="fa fa-caret-right" aria-hidden="true" />About Us</NavLink></li>
                  <li><NavLink to=''><i className="fa fa-caret-right" aria-hidden="true" />Services</NavLink></li>
                  <li><NavLink to=''><i className="fa fa-caret-right" aria-hidden="true" />Our Cases</NavLink></li>
                  <li><NavLink to=''><i className="fa fa-caret-right" aria-hidden="true" />Other Links</NavLink></li>
                </ul>
              </div>
              <div className="right">
                <ul>
                  <li><NavLink to=''><i className="fa fa-caret-right" aria-hidden="true" />Consuling</NavLink></li>
                  <li><NavLink to=''><i className="fa fa-caret-right" aria-hidden="true" />Finance</NavLink></li>
                  <li><NavLink to=''><i className="fa fa-caret-right" aria-hidden="true" />Testimonials</NavLink></li>
                  <li><NavLink to=''><i className="fa fa-caret-right" aria-hidden="true" />FAQ</NavLink></li>
                  <li><NavLink to=''><i className="fa fa-caret-right" aria-hidden="true" />Contact Us</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="open max-with25">
              <h2>Open Hours</h2>
              <p>
                Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod
                tempor incididunt.
              </p>
              <ul>
                <li>Monday - Fridayp <span>8.00-20.00</span></li>
                <li>Saturday <span>9.00-18.30</span></li>
                <li>Monday - Thusday <span>9.00-15.00</span></li>
                <li />
              </ul>
            </div>
            <div className="newsletter max-with25">
              <h2>Newsletter</h2>
              <p>subscribe to our newsletter to get allour news in your inbox.. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit,
              </p>
              <div className="mail-button">
                <form action=''>
                  <input type="email" placeholder="Your email address" />
                  <button>
                    <i className="fa fa-paper-plane" aria-hidden="true" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </footer>
        <div className="bootm">
          <p>Designed and Developed by
            <NavLink to=''>WpthemesGrid</NavLink>
          </p>
        </div>
        <div className="fiqset">
          <NavLink to='' target="_blank">
            <img src="./img/wp-icon.png" alt='' />
            Looking for WP version?
          </NavLink>
        </div>
      </div>

  )
}

export default Footer