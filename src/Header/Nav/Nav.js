import React from "react";
import classes from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={classes.nav}>
            <a href="#">main</a>
            <a href="#">skills</a>
            <a href="#">projects</a>
            <a href="#">contacts</a>
        </div>
    )
}