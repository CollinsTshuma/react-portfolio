import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/collins-tshuma-4b9015151/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/CollinsTshuma' target='_blank'><FaGithub/></a>
        <a href='https://twitter.com/crazzy_koolcat' target='_blank'><FaTwitter/></a>
    </div>
  )
}

export default HeaderSocials