import React from 'react';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

import '../styles/Footer.css';

function Footer() {

  const urlGithub = `https://github.com/Imanebln`;
  const urlLinkedIn = `https://www.linkedin.com/in/imane-boulouane-0ba280199/`;
  const urlFacebook = `https://web.facebook.com/imane.bln.5`;
  const urlTwitter = `https://twitter.com/IBoulouane`;
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <LinkedInIcon onClick={() => window.open(urlLinkedIn,'_blank')}/>
            <GithubIcon onClick={() => window.open(urlGithub,'_blank')}/>
            <FacebookIcon onClick={() => window.open(urlFacebook,'_blank')}/>
            <TwitterIcon onClick={() => window.open(urlTwitter,'_blank')}/>
        </div>
        <p>
            &copy; 2023 portfolio.com
        </p>

    </div>
  )
}

export default Footer