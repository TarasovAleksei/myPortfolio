import React from "react";
import classes from './Main.module.css'
import classesContainer from '../Command/Styles/container.module.css'


export const Main = () => {

    return (
        <div className={classes.main}>
            <div className={classesContainer.container}>
                <div className={classes.text}>
                    <span>Hi There</span>
                    <h1> I am Alexey Tarasov</h1>
                    <p> Frontend developer</p>
                </div>
                <div className={classes.photo}> </div>
            </div>

        </div>
    )
}