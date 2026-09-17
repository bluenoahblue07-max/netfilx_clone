import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/assets/youtube_icon.png'
import twitter_icon from '../../assets/assets/twitter_icon.png'
import instagram_icon from '../../assets/assets/instagram_icon.png'
import facebook_icon from '../../assets/assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="YouTube" />
        <img src={twitter_icon} alt="Twitter" />
        <img src={instagram_icon} alt="Instagram" />
        <img src={facebook_icon} alt="Facebook" />
      </div>
      <ul>
        <li>Audio and Subtitles</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">Netflix Clone &copy; 2029</p>
    </div>
  )
}


export default Footer
