import React from "react";
import classes from './Offers.module.css'
import classesContainer from '../Command/Styles/container.module.css'



export const Offers = () => {
    return (
        <div className={classes.offersBlock}>
            <div className={`${classesContainer.container} ${classes.offersContainer}`}>
                <h2 className={classes.title}>I am considering options for remote work</h2>
                <div className={classes.links}>
                    <a href="">hire me</a>
                </div>
            </div>
        </div>
    )
}