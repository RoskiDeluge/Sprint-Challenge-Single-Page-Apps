import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';
import { Container, Row, CardColumns } from "reactstrap";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);


  useEffect(() => {

    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });

  }, []);

  const searchCharacters = name => {

    if (name) {
      setCharacters(
      
        characters.map(character => {
         
          if (character.name.includes(name)) {
            
            character.isHidden = false;
          } else {
            
            character.isHidden = true;
          }
          
          return character;
        })
      );
    } else {
      setCharacters(characters.map(character => ({ ...character, isHidden: false })));
    }
  };

  return (
    <Container>
      <Row><SearchForm search={searchCharacters} /></Row>
      <CardColumns>
        <CharacterCard characters={characters} />
      </CardColumns>
    </Container>
  );
}
