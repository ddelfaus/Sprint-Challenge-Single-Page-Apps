import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';




export default function EpisodeCard(props) {

  
  return (
   
    <Row>
    <Col sm="10">
      <Card body>
        <CardTitle>Name: {props.name}</CardTitle>
        <CardText>Status: {props.air_date}.</CardText>
        <CardTitle>Species: {props.episode}</CardTitle>
       
      </Card>
    </Col>
    <Col sm="10">
      <Card body>
      
       
      </Card>
    </Col>
  </Row>
    );
  
}
