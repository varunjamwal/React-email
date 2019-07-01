import React,{useState} from 'react'
import Emails from '../../emaildata.json'
import EmailContent from './emailContent';

 const EmailData = (props) =>{
    const [emailState] = useState({

        emails : Emails,
      
    });

    return(
 
        <div>
          <EmailContent
               data={emailState.emails}
              />
            </div>
            
      
        
        
    
    );

 }
 export default EmailData;