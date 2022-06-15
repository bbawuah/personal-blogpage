import React from 'react'
import { ProjectListItem } from '../ProjectListItem/ProjectListItem'
import projectsListStyle from './Project.module.scss'

export const Projects: React.FC = () => (
  <div className={projectsListStyle.list}>
    <h4>Some of my projects</h4>
    <ProjectListItem
      url={'https://coritas-dream.herokuapp.com/'}
      cls={projectsListStyle.listItem}
      title={"Corita's dream"}
      desc={
        'An immersive social experience that puts a magnifying glass on the ideals of Corita Kent.'
      }
    />
    <ProjectListItem
      url={'https://www.thenext.gallery/'}
      cls={projectsListStyle.listItem}
      title={'The Next Gallery'}
      desc={
        'The Next Gallery is an immersive digital experience that showcases a selection of creatives and talents.'
      }
    />
  </div>
)
