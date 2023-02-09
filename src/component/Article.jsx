import React from 'react'
import star from '../assets/images/bluestar.svg'
import bstar from '../assets/images/bstar.svg'
import sstar from '../assets/images/sstar.svg'


import line from '../assets/images/line.svg'
const Article = () => {
  return (
    <div className='article'>
        <span className='article-star1'><img src={star} alt="" /></span>
        <span className='article-star2'><img src={star} alt="" /></span>
        <span className='article-line'><img src={line} alt="" /></span>
        <span className='article-bstar1'><img src={bstar} alt="" /></span>
        <span className='article-bstar2'><img src={bstar} alt="" /></span>
        <span className='article-sstar'><img src={sstar} alt="" /></span>



        <section className='section-1'>
            <div className='article-text'>
            <h2 >What we do</h2>
         <p>Loyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers.
             With our AI Powered platform, you can easily create and manage custom loyalty and 
             rewards programs, track customer engagement, and gain valuable insights to 
             improve your business.</p>
            </div>
           

        </section>
    
        <section className='section-2'>
            <div className='side-box'>
            <h2 className='articleform-title'>Book a Consultation with us</h2>
            <form action=" " className='article-form'>
                <input  type="text" placeholder='Enter your full name' />
                <input type="text" placeholder='Enter your work email'/>
                <input type="text" placeholder='Mobile number' />
                <input type="text" placeholder='Company Name'/>
                <select name="" id="">
                    <option value="">Select Country</option>
                    <option value="">Nigeria</option>

                </select>
               <textarea name="" id="" cols="30" rows="10" placeholder='Drop a message...' className='article-textarea'></textarea>
               <button className='article-btn'>Send Request</button>
            </form>
            </div>
           
        </section>

    </div>
  )
}

export default Article