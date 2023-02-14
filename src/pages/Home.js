import React from 'react'
import '../styles/Home.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useSelector } from 'react-redux';

function Home() {
  const urlGithub = `https://github.com/Imanebln`;
  const urlLinkedIn = `https://www.linkedin.com/in/imane-boulouane-0ba280199/`;
  const urlEmail = `mailto:boulouane.imane@gmail.com`;

  const userInfo = useSelector((state) => state.user);
  console.log(userInfo);

  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Imane Boulouane</h2>
        <div className='prompt'> 
        <p>A software developer with passion for learning and creating.</p>
        <LinkedInIcon onClick={() => window.open(urlLinkedIn,'_blank')} />
        <EmailIcon onClick={() => window.open(urlEmail,'_blank')}/>
        <GithubIcon onClick={() => window.open(urlGithub,'_blank')}/>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, NPM, Yarn,
              Ionic, BootStrap, MaterialUI.
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              .NET, ASP.NET Core, EF Core, Java Spring, MS SQL,
              MySQL, MongoDB, Firebase
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>
              JavaScript, TypeScript, C#, Java, C/C++, PHP, Python
            </span>
          </li>
        </ol>

      </div>
      
    </div>
  )
}

export default Home