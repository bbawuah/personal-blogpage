import React from 'react'
import projectsListStyle from './Project.module.scss'
import { ProjectListItem } from './ProjectListItem'

export const Projects: React.FC = () => (
  <div className={projectsListStyle.list}>
    <h4>Some of my projects</h4>
    <ProjectListItem
      url={'https://www.tasksy.work/'}
      cls={projectsListStyle.listItem}
      title={'Tasksy - A task management tool for achievers'}
      desc={'Fullstack taskmanagement web application.'}
    />
    <ProjectListItem
      url={'https://hope-foundation.faith/'}
      cls={projectsListStyle.listItem}
      title={'H.O.P.E. Foundation'}
      desc={'Website for the H.O.P.E. foundation.'}
    />
    <ProjectListItem
      url={'https://bawuah-chatapp.herokuapp.com/'}
      cls={projectsListStyle.listItem}
      title={'Chat app'}
      desc={
        'Real time web application where users are able to chat to one another using the Socket library.'
      }
    />
    <ProjectListItem
      url={'https://bawuah-bible-app.herokuapp.com/'}
      cls={projectsListStyle.listItem}
      title={'ASV bible app'}
      desc={
        'App that renders chapters and/or verses from the American Standard Version of the Bible.'
      }
    />
  </div>
)
