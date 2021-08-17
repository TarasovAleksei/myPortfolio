import React from "react";
import classes from './Projects.module.css'
import classesContainer from '../Command/Styles/container.module.css'
import {Project} from "./Project/Project";


export const Projects = () => {
    return (
        <div className={classes.projectsBlock}>
            <div className={`${classesContainer.container} ${classes.projectsContainer}`}>
                <h2 className={classes.title}>Projects</h2>
                <div className={classes.projects}>
                    <Project title='Todolist'
                             description='description for Todolist'/>
                    <Project title='Social Network'
                             description='description for Social Network'/>
                </div>
            </div>
        </div>
    )
}