import React from 'react'
import house from '../assets/images/house2.svg'
import phone from '../assets/images/callcalling.svg'

const Footer = () => {
  return (
    <div>
        <hr />
        <footer className='footer'>
            <div className='footer-address'>
                <span><img src={house} alt="" /></span>
                <p>2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos, Nigeria.</p>
            </div>
            <div><p>Loyalbaze is almost here.</p></div>
            <div className='footer-phone'>
                <span><img src={phone} alt="" /></span>
                <p>+234 903 618 9485</p>
            </div>

        </footer>
    </div>
  )
}

export default Footer