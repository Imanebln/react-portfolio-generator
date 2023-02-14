import React from 'react';
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='black'>
      <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2018 - 2023'
        iconStyle={{background: 'black', color: '#fff' }}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            ENSA, Oujda, Maroc
          </h3>
          <p>
          Computer engineering
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2022 - September 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full-Stack Developer Intern - SQLI
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Oujda, Maroc
          </h4>
          <p>SQLI Customers Portal: Devoloped an API for Dynamics 365</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2021 - August 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full-Stack Developer Intern - CCIS
          </h3>
          <p>Developed an employee management system website</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2016 - 2017'
        iconStyle={{background: 'black', color: '#fff' }}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Taha Hussein High school, Nador, Maroc
          </h3>
          <p>
          Bachelor of Physical Science
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience