import React from 'react'
import { Link } from 'react-router-dom'

const Help = () => {
  return (
    <div>
      <container>
        <div style={{'width': '100%'}}>
          <div className='H_P'>
            <div style={{'marginLeft': '100px', 'paddingTop':'110px'}}>
              <h6 style={{'fontWeight': '600', 'fontSize': '20px' }}>The FAQ's</h6>
              <h2 style={{ 'fontSize':'70px'}}>Help  center </h2>
              <h5 style={{'fontWeight': '600', 'fontSize': '20px' }}>Everything you need to know about the website and it's services</h5>
            </div>
          </div>
          <div style={{'display': 'flex', 'width': '100%'}}>
          <div style={{'width':'40%',  'height': '700px'}}>
            <div style={{'marginLeft': '100px', 'paddingTop':'80px'}}>
              <h6 style={{'fontWeight': '600'}}>Support</h6>
              <h2>FAQs</h2>
              <h6 style={{'fontWeight': '600'}}>Everything you need to know about the product and billing. Can't find the answer you're looking for? please<span><Link> chat with our friendly team</Link></span></h6>
            </div>
          </div>

          <div style={{'width':'60%','display': 'block', 'marginTop': '80px'}}>
            <div style={{'height': '60px', 'marginBottom': '80px', 'display': 'flex', 'justifyContent': 'space-between' }}>
                <h5 style={{ 'padding': '14px', 'fontWeight': '600' }}>Is there a free trial available?</h5>
                <button style={{ 'borderRadius': '30px', 'width': '33px', 'height': '35px', 'marginRight': '90px', 'marginTop': '10px', 'backgroundColor': 'white', 'border': '2.4px solid black'}}>+</button>
            </div>
            <div style={{'height': '60px', 'marginBottom': '80px', 'display': 'flex', 'justifyContent': 'space-between' }}>
                <h5 style={{ 'padding': '14px', 'fontWeight': '600' }}>Can't I change my plans later</h5>
                <button style={{ 'borderRadius': '30px', 'width': '33px', 'height': '35px', 'marginRight': '90px', 'marginTop': '10px', 'backgroundColor': 'white', 'border': '2.4px solid black'}}>+</button>    
            </div>
            <div style={{'height': '60px', 'marginBottom': '80px', 'display': 'flex', 'justifyContent': 'space-between' }}>
                <h5 style={{ 'padding': '14px', 'fontWeight': '600' }}>What is your concealation policy?</h5>
                <button style={{ 'borderRadius': '30px', 'width': '33px', 'height': '35px', 'marginRight': '90px', 'marginTop': '10px', 'backgroundColor': 'white', 'border': '2.4px solid black'}}>+</button>    
            </div>
              <div style={{ 'height': '60px', 'marginBottom': '80px', 'display': 'flex', 'justifyContent': 'space-between' }}>
                <h5 style={{ 'padding': '14px', 'fontWeight': '600' }}>Can other info be added to an invoice?</h5>
                <button style={{ 'borderRadius': '30px', 'width': '33px', 'height': '35px', 'marginRight': '90px', 'marginTop': '10px', 'backgroundColor': 'white', 'border': '2.4px solid black'}}>+</button>
            </div>
            <div style={{ 'height': '60px', 'marginBottom': '80px', 'display': 'flex', 'justifyContent': 'space-between' }}>
                <h5 style={{ 'padding': '14px', 'fontWeight': '600' }}>How does billing work?</h5>
                <button style={{ 'borderRadius': '30px', 'width': '33px', 'height': '35px', 'marginRight': '90px', 'marginTop': '10px', 'backgroundColor': 'white', 'border': '2.4px solid black'}}>+</button>    
            </div>
            <div style={{'height': '60px', 'marginBottom': '80px', 'display': 'flex', 'justifyContent': 'space-between' }}>
                <h5 style={{ 'padding': '14px', 'fontWeight': '600' }}>How do i change my account email? </h5>
                <button style={{ 'borderRadius': '30px', 'width': '33px', 'height': '35px', 'marginRight': '90px', 'marginTop': '10px', 'backgroundColor': 'white', 'border': '2.4px solid black'}}>+</button>    
            </div>
          </div>
          </div>
        </div>

        
      </container>
    </div>
  )
}

export default Help
