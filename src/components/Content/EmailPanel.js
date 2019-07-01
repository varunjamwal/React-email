import React,{useState} from 'react'
import { Button,Collapse} from 'react-bootstrap';
import EmailData from './emailData/EmailData'
import Styles from './EmailPanel.module.css'
const Emailpanel = (props) =>{
    const [openstate,toggle] = useState({
        open : false
    })
    const { open } = openstate;
    return( 
        <>
        <Button variant="outline-dark" className={Styles.but1}
          onClick={() => toggle({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
         hi, this is a sample email to test the feature...
        </Button>
        <Collapse in={openstate.open}>
          <div id="example-collapse-text">
        <EmailData />
          </div>
        </Collapse>
        
      </>
    );
}
export default Emailpanel;