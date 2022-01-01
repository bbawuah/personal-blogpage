import React from 'react'
import { ProjectListItem } from '../ProjectListItem/ProjectListItem'
import projectsListStyle from './Project.module.scss'

export const Projects: React.FC = () => (
  <div className={projectsListStyle.list}>
    <h4>Some of my projects</h4>
    <ProjectListItem
      url={'https://www.thenext.gallery/'}
      cls={projectsListStyle.listItem}
      title={'The Next Gallery'}
      desc={
        'The Next Gallery is an immersive digital experience that showcases a selection of creatives and talents.'
      }
    />
    <ProjectListItem
      url={'https://www.tasksy.work/'}
      cls={projectsListStyle.listItem}
      title={'Tasksy - A task management tool for achievers'}
      desc={'Fullstack taskmanagement web application.'}
    />
    <ProjectListItem
      url={'https://bawuah-chatapp.herokuapp.com/'}
      cls={projectsListStyle.listItem}
      title={'Chat app'}
      desc={
        'Real time web application where users are able to chat to one another using the Socket library.'
      }
    />
  </div>
)
