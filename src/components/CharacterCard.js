import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';




export default function CharacterCard(props) {

  console.log("waefawefa",props.name)
  return (
   
    <Row>
    <Col sm="10">
      <Card body>
        <CardTitle>Name: {props.name}</CardTitle>
        <CardText>Status: {props.status}.</CardText>
       
      </Card>
    </Col>
    <Col sm="6">
      <Card body>
        <CardTitle>Species: {props.species}</CardTitle>
        <CardText>Type: {props.type}</CardText>
       
      </Card>
    </Col>
  </Row>
    );
  
}
