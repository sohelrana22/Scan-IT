import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './../styles/TimeLing.css';
import { AiFillAudio } from "react-icons/ai";



const TimeLine = () => {
    return (
        <div className='container'>
            <h2 className='title'>Our Work <span className='highlight'>Experience</span></h2>
            <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'var(--team-card-bg)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  var(--team-card-bg)' }}
    date="2022 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AiFillAudio />}
  >
    <h3 className="vertical-timeline-element-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam sed.</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'var(--team-card-bg)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  var(--team-card-bg)' }}
    date="2021 - 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AiFillAudio />}
  >
    <h3 className="vertical-timeline-element-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam sed.</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'var(--team-card-bg)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  var(--team-card-bg)' }}
    date="2020 - 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AiFillAudio />}
  >
    <h3 className="vertical-timeline-element-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam sed.</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'var(--team-card-bg)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  var(--team-card-bg)' }}
    date="2018 - 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AiFillAudio />}
  >
    <h3 className="vertical-timeline-element-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam sed.</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'var(--team-card-bg)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  var(--team-card-bg)' }}
    date="2013 - 2017"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AiFillAudio />}
  >
    <h3 className="vertical-timeline-element-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam sed.</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'var(--team-card-bg)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  var(--team-card-bg)' }}
    date="2007 - 2012"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AiFillAudio />}
  >
    <h3 className="vertical-timeline-element-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam sed.</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'var(--team-card-bg)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  var(--team-card-bg)' }}
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AiFillAudio />}
  >
    <h3 className="vertical-timeline-element-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam sed.</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
        </div>
    );
};

export default TimeLine;