import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export default function LocationCard(props) {
  
  
  
  
  
  return(
      <div>
   <Row>
    <Col sm="10">
      <Card body>
        <CardTitle>Name: {props.name}</CardTitle>
        <CardText>type: {props.type}.</CardText>
        <CardTitle>Species: {props.dimension}</CardTitle>
      </Card>
    </Col>
    <Col sm="10">
      <Card body>
      
    
       
      </Card>
    </Col>
  </Row>

      </div>
  )
  }