import "./styles.css";
import React, { useState } from "react";

const emojisWeHave = {
  "❤️️": "Heart",
  "🤳": "Selfie",
  "🦴": "Bone",
  "👀": "Eyes",
  "🐎": "Horse",
  "🐶": "Dog",
  "🐵": "Monkey",
  "🍉": "Watermelon",
  "🍋": "Lemon",
  "🍌": "Banana"
};

var emojisWeHaveArray = Object.keys(emojisWeHave);

export default function App() {
  var [Meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var emojiInput = event.target.value;
    var Meaning = emojisWeHave[emojiInput];
    if (Meaning === undefined) {
      Meaning = "We Dont have this Emoji";
    }

    setMeaning(Meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojisWeHave[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji App Using React</h1>
      <input
        onChange={emojiInputHandler}
        style={{
          width: "50%",
          height: "5vh",
          borderRadius: "2rem",
          border: "bold"
        }}
      />

      <h2>{Meaning}</h2>

      <h3> Emojis We Have </h3>

      {emojisWeHaveArray.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: "0.3rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
