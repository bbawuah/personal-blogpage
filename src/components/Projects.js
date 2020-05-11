import React from "react"

import ProjectListItem from "./ProjectListItem";
import projectsListStyle from './Project.module.scss'

const Projects = () => (
  <div className={projectsListStyle.list}>
    <h4>Some of my projects</h4>
    <ProjectListItem 
    url={"https://hope-foundation.faith/"}
    cls={projectsListStyle.listItem}
    title={'H.O.P.E. Foundation'}
    desc={'Website for the H.O.P.E. foundation.'}/>
      <ProjectListItem 
    url={"https://bawuah-chatapp.herokuapp.com/"}
    cls={projectsListStyle.listItem}
    title={'Chat app'}
    desc={'Real time webapplication where users are able to chat to one another using the Socket library.'}/> 
     <ProjectListItem 
    url={"https://bawuah-weather-application.herokuapp.com/"}
    cls={projectsListStyle.listItem}
    title={'Weather app'}
    desc={'Simple weather app that gives users forecast data for a specific location.'}/>
    <ProjectListItem 
    url={"https://bawuah-flightspy.herokuapp.com/"}
    cls={projectsListStyle.listItem}
    title={'KLM flight app'}
    desc={"An app that provides information about the current location, the flight completion rate, aircraft speed, current location weather, nearest storm and more."}/>
     <ProjectListItem 
    url={"https://bawuah-bible-app.herokuapp.com/"}
    cls={projectsListStyle.listItem}
    title={'ASV bible app'}
    desc={'App that renders chapters and/or verses from the American Standard Version of the Bible.'}/>
  </div>
)

export default Projects
