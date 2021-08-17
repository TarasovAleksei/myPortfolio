import React from "react";
import classes from './Skills.module.css'
import classesContainer from '../Command/Styles/container.module.css'
import {Skill} from "./Skill/Skill";


export const Skills = () => {
    return (
        <div className={classes.skillsBlock}>
            <div className={`${classesContainer.container} ${classes.skillsContainer}`}>
                <h2 className={classes.title}>Skills</h2>
                <div className={classes.skills}>
                    <Skill title='JS'
                           description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                    <Skill title='TS'
                           description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                    <Skill title='React'
                           description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                </div>
            </div>
        </div>
    )
}