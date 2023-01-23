import React from 'react';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <LinkedInIcon />
            <GithubIcon />
            <FacebookIcon />
            <TwitterIcon />
        </div>
        <p>
            &copy; 2023 portfolio.com
        </p>

    </div>
  )
}

export default Footer