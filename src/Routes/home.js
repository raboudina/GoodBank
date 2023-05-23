import { useContext } from 'react';
import {Card} from 'react-bootstrap'
import { currentUserContext } from "../userContext";

function Home(){
  const user =useContext(currentUserContext);
  return (
    <Card >
      <Card.Header className="home" as="h4">       
      BadBank Home
      </Card.Header>
      <br/>
      <Card.Body as="h5" className="home" >
      Welcome, {user.name}, to the bank!
      </Card.Body>
      <Card.Img variant="bottom" src="../imgs/bank3.png" />
      <br/>
      </Card>
  );  
}

export default Home;
