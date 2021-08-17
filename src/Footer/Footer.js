import React from "react";
import classes from './Footer.module.css'
import classesContainer from '../Command/Styles/container.module.css'


export const Footer = () => {
    const date = new Date().toLocaleDateString()
    const all = 'all rights reserved'.toUpperCase()
    return (
        <div className={classes.footerBlock}>
            <div className={`${classesContainer.container} ${classes.footerContainer}`}>
                <h2 className={classes.title}>Tarasov Aleksey</h2>
                <div className={classes.containerForSocial}>
                    <div className={classes.item}> </div>
                    <div className={classes.item}> </div>
                    <div className={classes.item}> </div>
                    <div className={classes.item}> </div>
                </div>
                <div className={classes.copyRight}>© {date} {all}</div>
            </div>
        </div>
    )
}