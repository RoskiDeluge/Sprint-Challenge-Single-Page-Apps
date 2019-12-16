import React from "react";

export default function SearchForm(props) {

  const handleChange = event => {
    props.search(event.target.value);
  };
 
  return (
    <section className="search-form">
     <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Search characters"
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
