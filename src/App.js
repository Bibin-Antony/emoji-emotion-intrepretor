import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love"
};

const emojiCollection = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setemoji] = useState("");
  const [userMeaning, setUsermeaning] = useState("");

  function inputChangehandler(event) {
    var initialValue = event.target.value;
    setemoji(initialValue);

    if (initialValue in emojiDictionary) {
      setUsermeaning(emojiDictionary[initialValue]);
    } else {
      setUsermeaning("Invalid Input");
    }
  }

  function clickhandler(initialValue) {
    setUsermeaning(emojiDictionary[initialValue]);
  }

  return (
    <div className="App">
      <h1>Inside Out!</h1>
      <input
        type="emoji"
        placeholder="Enter your Emoji here!"
        onChange={inputChangehandler}
      ></input>
      <h2>{userMeaning}</h2>
      <h2>{emoji}</h2>

      {emojiCollection.map((emojis) => (
        <span
          onClick={() => clickhandler(emojis)}
          style={{ cursor: "pointer", padding: "0.5rem", fontSize: "1.4rem" }}
        >
          {""}
          {emojis}
          {""}
        </span>
      ))}
    </div>
  );
}
