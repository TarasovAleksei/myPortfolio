import React from "react";
import classes from './Project.module.css'


export const Project = (props) => {
    return (
        <div className={classes.project}>
            <div className={classes.links}>
                <a href="https://tarasovaleksei.github.io/tasks_by_Ignat/#/pre-junior">view</a>
            </div>
            <div className={classes.descriptionProject}>
                <div className={classes.item}>{props.title}</div>
                <div className={classes.item}>{props.description}</div>
            </div>

        </div>
    )
}