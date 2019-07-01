import React,{useState} from 'react'
import { Nav,Tab,Row,Col,Button,ButtonToolbar} from 'react-bootstrap';
import Styles from './Content.module.css'
import Compose from './compose';
import Emailpanel from './EmailPanel'
const Content = (props) =>{
  const [compose,openModal ] = useState(
    {
      modalShow: false
    }
  )
  let modalClose = () => openModal({ modalShow: false });
    return( 
      
      <React.Fragment>
          {console.log(compose.modalShow)}
        <div className={Styles.compose} >
  <ButtonToolbar>
    <Button variant="primary" size="lg" onClick={() => openModal({ modalShow: true })}>
      Compose
    </Button>
    {console.log(openModal.modalShow)}
    <Compose
     show={compose.modalShow}
     onHide={modalClose}
     />
  </ButtonToolbar>
        </div>
        <div className={Styles.side}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="inbox">
<Row >
  <Col sm={3}>
    <Nav variant="pills" className="flex-column">
      <Nav.Item>
        <Nav.Link eventKey="inbox" >Inbox</Nav.Link>

      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="sent">Sent</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="drafts">drafts</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Trash">Trash</Nav.Link>
      </Nav.Item>
    </Nav>
  </Col>
  <Col sm={9}>
    <Tab.Content>
      <Tab.Pane eventKey="inbox">
        <Emailpanel />
      </Tab.Pane>
      <Tab.Pane eventKey="second">
      
      </Tab.Pane>
    </Tab.Content>
  </Col>
</Row>
</Tab.Container>
            </div>
            </React.Fragment>
    );
}
export default Content;