import React, { Component } from 'react'
import Header from './components/header/Header';
import Info from './components/Info/Info';
import Skills from './components/Skills/Skills';
import Languages from './components/Languages/Languages';
import Section from './components/Section/Section';
import Profile from './components/Profile/Profile';
import './Resume.css'

class Resume extends Component {

  info = [
    {
      header: 'ADDRESS',
      information: 'Radwanska 40/42, Lodz, Poland'
    },
    {
      header: 'PHONE',
      information: '+ (48) 692 567275'
    },
    {
      header: 'EMAIL',
      information: 'ekanimba3@gmail.com'
    },
    {
      header: 'PLACE OF BIRTH',
      information: 'kigali'
    },
    {
      header: 'NATIONALITY',
      information: 'Rwandan'
    }
  ];
  skills = ['React', 'Html', 'css', 'Firebase', 'Android Studio', 'Github', 'Adobe XD', 'Agile Methodology', 'SQL and Database Systems', 'react bootstrap'];
  languages = [
    {
      language: 'English',
      level: 4
    },
    {
      language: 'French',
      level: 3
    },
    {
      language: 'Kinyarwanda',
      level: 5
    }
  ];
  profile = "I am an energetic, ambitious person that has developed a mature and responsible approach to any task presented to me. Having an experience in teamwork, I possess an ability to motivate and communicate comfortably at all levels. Team working is my strength and that makes me work with or without supervision to achieve the set goals and objectives.";
  education = [
    {
      headerLeft: "Computer Science",
      headerRight: "Lodz university of technology",
      location: "lodz",
      extraInfo: "Faculty of Electrical, Electronic, Computer and Control Engineering",
      bulletPoints: ["Introduction to CS in C","Scripting Languages","Algorithms and Data Structures","Java Fundamentals","Intensive course Big Data","Programming and Data Structures","Database","Object Oriented Programming in C++","Computer Architecture","Interactive Web Applications","Software Engineering","Operating Systems","Computer Networks","Embedded Systems","GUI Programming","Computer Aided Design","Computer Graphics"],
      start: "Sep 2016",
      end: "Mar 2020",
    },
    {
      headerLeft: "Computer Science",
      headerRight: "Jönköping University",
      location: "Jönköping",
      extraInfo: "Jönköping School of Engineering",
      bulletPoints: ["Agile Project","Android Development","Interaction Design"],
      start: "Jan 2019",
      end: "Jun 2019"
    }
  ]
  projects = [
    {
      headerLeft: "Team Project course",
      headerRight: "Design thinking",
      location: "Lodz, Poland",
      bulletPoints: [
        "worked with a car service company called SIS auto using Design thinkingprocess to analyze and provide solution to exiting problems.",
        "I wrote meetings minutes",
        "I designed the poster for our final presentation."
      ],
      start: "Feb 2018",
      end: "Jun 2018"
    },
    {
      headerLeft: "Android app",
      headerRight: "Android development course",
      location: "Jönköping , Sweden",
      bulletPoints: [
        "We created a Restaurant App using android studio and Firebase as ourdatabase",
        "Restaurants create account and add tables.",
        "Clients book table Date, hour and number of people on the table ."
      ],
      start: "Jan 2019",
      end: "Jan 2019"
    },
    {
      headerLeft: "Android App",
      headerRight: "Agile Project course",
      location: "Jönköping , Sweden",
      bulletPoints: [
        "Create toll payment system and integrate it with our application",
        "My role is front’end Developer, UI and UX design.",
        "We are working with `Kapsch company` using the agile methods."
      ],
      start: "Jan 2019",
      end: "Jun 2019"
    },
    {
      headerLeft: "Project and implementation of Toll Managmen System",
      headerRight: "Thesis",
      location: "Lodz , Poland",
      bulletPoints: [
        "The Toll System App application is used to display an ongoing entry and exit of a Toll whereby users can perform payment within the app while exiting the road.",
        "The Toll Management System web app can add a tag to a specific userqs car and can retrieve, manage and delete current users that have registered within the Android app.",
        "The main objective of this thesis was to develop a full cycle system of an entry and exit of a toll in order to facilitate a smooth and fast entry and a smooth transaction payment while exiting the road. It can be used to generate periodic statistical reports on charges and traffic"
      ],
      start: "Jan 2019",
      end: "Jun 2019"
    }
  ]
  employmentHistory = [
    {
      headerLeft: "Software Engineer",
      headerRight: "Axiros",
      location: "Warsaw",
      bulletPoints: [
        "Development and maintenance of an internal front-end framework with NodeJS, JavaScript, CSS, and handlebars.",
        "Direct product testing activities throughout the software testing life cycle and software development life cycle.",
        "3+ yrs working experience working with Javascript, Nodejs, Selenium, Jira, AWS, Bamboo, and Docker.",
        "work in collaboration with developers to establish and reinforce automation development processes.",
        "Establish and improve testing standards and guidelines and ensure that the standards are followed in the QA review process.",
        "Exposure to Agile development methodologies e.g. test-driven development, continuous integration, code analysis, etc"
      ],
      start: "Jul 2018",
      end: "Sep 2019"
    },
    {
      headerLeft: "Data Analyst",
      headerRight: "Asseco",
      location: "Warsaw",
      bulletPoints: [
        "My Role was to do a research about African countries in the power industry. the main focus was about gas and water metering system and analyse potential tenders that correlate with our market. by doing so I was able to acquire different skills which Ability to work effectively with management and part of a team to meet targets and Strong attention to detail.",
      ],
      start: "Jul 2018",
      end: "Sep 2019"
    },
    {
      headerLeft: "Full-stack Developer intern",
      headerRight: "Welcome | Digital Services",
      location: "Lodz",
      bulletPoints: [
        "I worked on canvas for an animation",
        "Websockect by building a build in chatbot"
      ],
      start: "Aug 2019",
      end: "Sep 2019"
    },
  ]
  render() {
    return (
      <div className="ResumeContainer" id="the_canvas_element_id">
          <div className="ResumeTitle">
            <div>
              <h1>Kanimba Eric</h1>
              <h3>Computer Science</h3>
            </div>
            
          </div>
          <div className="row">
            <div className="column-left">
              <Header header='INFO'/>
              <Info info={this.info}/>
              <Header header='SKILLS'/>
              <Skills skills={this.skills}/>
              <Header header='LANGUAGES'/>
              <Languages languages={this.languages}/>
              <Header header='LINKS'/>
            </div>
            <div className="column-right">
              <Header header='PROFILE'/>
              <Profile profile={this.profile}/>
              <Header header='EMPLOYMENT HISTORY'/>
              <Section section={this.employmentHistory}/>
              <Header header='EDUCATION'/>
              <Section section={this.education}/>
              <Header header='PROJECT EXPERIENCE'/>
              <Section section={this.projects}/>
            </div>
          </div>
      </div>
    )
  }
}

export default Resume