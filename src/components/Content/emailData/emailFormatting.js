    
import React from 'react';
import Styles from './emailFormatting.module.css'

const emailFormatting = (Props) => {
    let space = '\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0'
    return (
    <div className={Styles.content} >
    <p > {space.repeat(parseInt(Props.id)) + 'On:' } {Props.date} By : {Props.user} email: {Props.email} 
       </p>
        <p>&emsp; &emsp;  {space.repeat(parseInt(Props.id)) + Props.content}</p>
    </div>
    )

};

export default emailFormatting;