import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';
import { Container, Row } from "reactstrap";
import SearchForm from "./SearchForm";

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
    <Container>
      <Row><SearchForm /></Row>
      <Row>
        {characters.map(character => {
            return <CharacterCard character={character} key={character.id} />;
          })}
        {/* <div>
          <ul>
            {searchResults.map(character => {
              return <li key={character}>{character}</li>;
            })}
          </ul>
        </div> */}
      </Row>
    </Container>
  );
}
