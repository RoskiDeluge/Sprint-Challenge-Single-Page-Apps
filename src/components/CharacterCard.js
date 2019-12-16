import React from "react";
import { Card, CardHeader, CardBody, CardText, Col } from "reactstrap";

export default function CharacterCard({characters}) {
  return (
    <div>
      {characters.map(character => (
        <div
          key={character.id}
          style={character.isHidden ? { display: "none" } : { display: "block" }}
        >
          <Col xs="4" md="8" lg="10">
            <Card>
              <CardHeader>{character.name}</CardHeader>
              <CardBody>
                <CardText>Status: {character.status}</CardText>
                <CardText>Species: {character.species}</CardText>
              </CardBody>
            </Card>
          </Col>
        </div>
      ))}
    </div>
  );
}
