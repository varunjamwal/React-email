import React from 'react';
import {  Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';


 const LoginForm = (props) =>  {


  const handleFormSubmit = (event) => {
    event.preventDefault();
  if(event.target.username.value ==="vj@gmail.com" && event.target.pass.value ==="pass"){
    props.history.push('./main/');
    }
    else{
alert('Invalid email or password');
    }
    console.log("FORM SUBMIT!");
  };
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: -100
  };
  const buttonStyle = {
    marginBottom: 0
  };

    return (
      <div style={divStyle}>
        
          <Form className="LoginForm" id="loginForm" onSubmit={handleFormSubmit}>
            <FormGroup controlId="formEmail">
              <FormControl type="email" placeholder="Email Address" name="username"/>
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl type="password" placeholder="Password" name="pass" />
            </FormGroup>
            <FormGroup style={buttonStyle} controlId="formSubmit">
              <Button bsstyle="primary" type="submit">
                Login
              </Button>
            </FormGroup>
          </Form>
         
       <p id="p"></p>
      </div>
    );
  
}

export default withRouter(LoginForm);
