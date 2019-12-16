import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';
import { Container, Row } from "reactstrap";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacters(response.data.results);
        console.log(response.data);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });

  }, []);

  return (
    // <section className="character-list">
    //   {/* {characters.map(character => {
    //       return <CharacterCard character={character} key={character.id} />;
    //     })} */}
    //     {/* <h2>To do</h2> */}
    // </section>
    <Container>
      <Row>
        {characters.map(character => {
            return <CharacterCard character={character} key={character.id} />;
          })}
      </Row>
    </Container>
  );
}
