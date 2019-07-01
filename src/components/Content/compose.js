import React,{useState} from 'react'
import { Modal,Button,Form} from 'react-bootstrap';
const Compose = (props) =>{
    const [fields,setfields ] = useState(
        {
            inputs: [0]
        }
      );
     const addfield = () =>{
            setfields({inputs : [...fields.inputs,""]})
     }
    const handleFormSubmit = (event) => {
       
      if(event.target.username.value === " " ){
    alert('Enter atleast one user');    
        }
        else{
    alert('Invalid email or password');
        }
        console.log("FORM SUBMIT!");
      };
    return( 
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form onSubmit={handleFormSubmit}>
       
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Compose Email :
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
  <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>To:</Form.Label>
        {
            fields.inputs.map((index)=>{
                return(
                    <div key={index}>
                        <Form.Control type="email" placeholder="name@example.com" name="username" required/>
                    </div>
                )
            })
        }   
       
    <Button variant="outline-light" onClick={addfield}>
    Add Recipients
  </Button>
    <Form.Text className="text-muted">
     You can enter Multiple users,but one is required
    </Form.Text>
  </Form.Group>
  <Form.Control type="text" placeholder="Subject" />
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label> </Form.Label>
    <Form.Control placeholder="Content" as="textarea" rows="3" />
  </Form.Group>

        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" type="submit">
    Submit
  </Button>
        </Modal.Footer>
      </Form>
      </Modal>
      
    );
}
export default Compose;