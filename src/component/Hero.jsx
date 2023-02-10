import React from 'react'
import profile from '../assets/images/profilecircle.svg'
import mail from '../assets/images/mail-01.svg'
import circle1 from '../assets/images/circle1.svg'
import circle2 from '../assets/images/circle2.svg'
import circle3 from '../assets/images/circle3.svg'
import arrow from '../assets/images/arrows.svg'
import bstar from '../assets/images/bstar.svg'
import sstar from '../assets/images/sstar.svg'



const Hero = () => {
  return (
    <div >
        <span className='circle1'><img src={circle1} alt="" /></span>
        <span className='circle2'><img src={circle2} alt="" /></span>
        <span className='circle3'><img src={circle3} alt="" /></span>
        <span className='arrow'><img src={arrow} alt="" /></span>
        <span className='hero-star1'><img src={bstar} alt="" /></span>
        <span className='hero-star3'><img src={bstar} alt="" /></span>
        <span className='hero-star2'><img src={sstar} alt="" /></span>
        <span className='hero-star4'><img src={sstar} alt="" /></span>



        <h1 className='hero-title'>Turn your best customers into <span className='purple'>Loyal fans</span></h1>
        <p className='hero-text'>Get ready to revolutionize the way you interact with your customers and drive sales with Loyalbaze.
             Join the waiting list now to be among the first to experience the future of customer loyalty.</p>
             <form action="" className='form'>
                <div className='heroinput-box'>
                    <span><img src={profile} alt="user" /></span>
                    <input type="text" placeholder='Tell us your name' className='heroinput'/>
                </div>
                <div className='heroinput-box'>
                    <span><img src={mail} alt="email" /></span>
                    <input type="text" placeholder='Enter your email address' className='heroinput'/>
                </div>
                <button className='hero-btn'>Get early access</button>
             </form>
             <div className='users'>
                <div className='circle-box'>
                <span><p>G</p></span>
                <span><p>O</p></span>
                <span><p>U</p></span>
                <span><p>M</p></span>
                </div>
             <p>+57 Joined</p>

             </div>
    </div>
  )
}

export default Hero