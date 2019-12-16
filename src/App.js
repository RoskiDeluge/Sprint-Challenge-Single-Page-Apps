import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';


export default function App() {
  return (
    <main>
      <Header />
      <Route
        exact
        path="/"
        render={routeProps => {
          return <WelcomePage />;
        }}
      />
      <Route
        exact
        path="/characters"
        render={routeProps => {
          return <CharacterList />;
        }}
      />
    </main>
  );
}
