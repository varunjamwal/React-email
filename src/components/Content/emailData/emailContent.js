    
import React from 'react'
import EmailFormatting from './emailFormatting';
const emailContent = (props) => props.data.map((data , key) => {
        return  <EmailFormatting
        key= {key}
        id = {data.id} 
        date={data.date} 
        by={data.user}
        email ={data.email}
       content={data.content} />
});
       export default emailContent;