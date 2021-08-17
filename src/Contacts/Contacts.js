import React from "react";
import classes from './Contacts.module.css'
import classesContainer from '../Command/Styles/container.module.css'


export const Contacts = () => {
    return (
        <div className={classes.contactsBlock}>
            <div className={`${classesContainer.container} ${classes.contactsContainer}`}>
                <h2 className={classes.title}>Contacts</h2>
                <form className={classes.form} action="">
                    <input className={classes.formItem} type="text"/>
                    <input className={classes.formItem} type="text"/>
                    <textarea className={classes.formItem}> </textarea>
                </form>
                <button className={classes.button}>Send</button>
            </div>
        </div>
    )
}