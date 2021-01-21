import React from "react";
import "./styles.css";
import { useState } from "react";

const moviesDB = {
  Leonardo: [
    { movie: "Wolf of the wall street", rating: "IMDB: 8.2" },
    { movie: "Catch me if you can", rating: "IMDB: 8.1" }
  ],

  TomCruise: [
    {
      movie: "The Mummy",
      rating: "IMDB: 5.4"
    },
    {
      movie: "Mission: Impossible – Rogue Nation",
      rating: "IMDB: 7.4"
    }
  ],
  TomHolland: [
    {
      movie: "Spiderman-Far from home",
      rating: "IMDB: 7.5"
    },
    {
      movie: "The Impossible",
      rating: "IMDB: 7.6"
    }
  ]
};

export default function App() {
  const [selectedActor, setActor] = useState("Leonardo");
  function genreClickHandler(name) {
    setActor(name);
  }
  return (
    <div className="App">
      <h1>Movies Recommendation based on Actor Name </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favourite Actor's movies which I like{" "}
      </p>

      <div>
        {Object.keys(moviesDB).map((name) => (
          <button
            onClick={() => genreClickHandler(name)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {name}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesDB[selectedActor].map((name) => (
            <li
              key={name.movie}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {name.movie} </div>
              <div style={{ fontSize: "smaller" }}> {name.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
