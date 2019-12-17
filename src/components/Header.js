import React from "react";

export default function Header(props) {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <h2 onClick={() => props.history.push("/")}>Home</h2>
      <h2 onClick={() => props.history.push("/characters")}>Characters</h2>
    </header>
  );
}
