import React from 'react'
import logo from '../images/icons8-books-98.png'
import facebook from "../images/icons8-facebook-48.png"
import x from "../images/icons8-twitterx-50.png"
import instagram from '../images/icons8-instagram-48.png'
import linkedin from '../images/icons8-linkedin-48.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <footer className='footer1'>
        <div className='footer'>
          <div className='upper_footer'>
            <div className='first_footer'>
              <div className='footer_img'>
                <img src={logo}  alt="books" className='logo'/> 
                <h2 className='heading'> Laylas Book Store </h2>
              </div>
              <p className='desc'> we're commited to providing our customers with the best books available ranging from both free to paid  in order to satisfy their reading pleasures and also provide customer services to ensure maximum satisfaction .
              </p>
              <div className='footer_links'>
                <Link to="/facebook" className='f_links' > <img src={facebook} alt='facebook' /></Link>
                <Link to="/twitter" className='f_links' > <img src={x}  alt='x' /></Link>
                <Link to="/instagram" className='f_links' > <img src={instagram} alt='instagram'  /></Link>
                <Link to="/linkedin" className='f_links' > <img src={linkedin}  alt='linkedin'/></Link>
              </div>
            </div>
            <div className='second_footer'>
              <div className='second_foot_link'>
                <h3 className='footer_heading'> Quick Links</h3>
                <div className='third_foot_link'>
                <Link to="/"  className='second_foot_L'>Home</Link>
                <Link to="Books" className='second_foot_L' >Books</Link>
                <Link to="Pricing"  className='second_foot_L'>Pricing</Link>
                <Link to="Authors"  className='second_foot_L'>Authors</Link>
                <Link to="/About"  className='second_foot_L'>About</Link>
                <Link to="/Resources" className='second_foot_L' >Resources</Link>
                </div>
              </div>
            </div>
            <div className='third_footer'>
            <div className='second_foot_link'>
                <h3 className='footer_heading'>Support</h3>
                <div className='third_foot_link'>
                <Link to="/Ordertrack"  className='t_second_foot_L'>Order Track</Link>
                <Link to="/ContactUs" className='tsecond_foot_L' >Contact Us</Link>
                <Link to="/F_M_P"  className='tsecond_foot_L'>Find My Product</Link>
                <Link to="/Guide"  className='tsecond_foot_L'>Guide</Link>
                <Link to="/Faq"  className='tsecond_foot_L'>FAQs</Link>
                <Link to="/F_H_R" className='tsecond_foot_L' >FAQ - Happy Return</Link>
                <Link to="/Helpdesk" className='tsecond_foot_L' >Help Desk</Link>
                <Link to="/W_P_R" className='tsecond_foot_L' >Writer/Publisher Request</Link>
                </div>
              </div>
            </div>
            <div className='fourth_footer'>
            <div className='second_foot_link'>
                <h3 className='footer_heading'> Quick Links</h3>
                <div className='third_foot_link'>
                <Link to="/T_O_U"  className='second_foot_L'>Terms Of Use</Link>
                <Link to="/Privacy_policy" className='second_foot_L' >Privacy Policy</Link>
                <Link to="/Happy_return"  className='second_foot_L'>Happy Return</Link>
                <Link to="/Return_policy"  className='second_foot_L'>Return Policy</Link>
                </div>
              </div>
            </div> 
          </div>
          <div className='lineH'>
            <hr className='line'></hr>
            <p className='lineP'>  &copy; Copyright 2024 sponsored by Oriku Olarotimi</p>
          </div>
        </div>
        </footer>
    </div>
  )
}

export default Footer
