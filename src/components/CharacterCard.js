import React from "react";
import { Card, CardHeader, CardBody, CardText, Col } from "reactstrap";

export default function CharacterCard({character}) {
  return (
    <Col xs="6" md="4" lg="3">
      <Card>
        <CardHeader>{character.name}</CardHeader>
        <CardBody>
          <CardText>Status: {character.status}</CardText>
          <CardText>Species: {character.species}</CardText>
        </CardBody>
      </Card>
    </Col>
  )
}
