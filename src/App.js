import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';


export default function App() {
  return (
    <main>
      <Route render={props => {
        return <Header {...props} />
      }}>
      </Route>
      <Route
        exact
        path="/"
        render={() => {
          return <WelcomePage />;
        }}
      />
      <Route
        exact
        path="/characters"
        render={() => {
          return <CharacterList />;
        }}
      />
    </main>
  );
}
