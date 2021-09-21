import React, { useState } from "react";
import "./App.css";

function App() {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [blur, setBlur] = useState(1);
  const [grayScale, setGrayScale] = useState(false);
  const [ref, setRef] = useState("https://picsum.photos/200/200");

  function getPicture() {
    if (grayScale) {
      setRef(
        "https://picsum.photos/" +
          width +
          "/" +
          height +
          "?grayscale" +
          "&blur=" +
          blur
      );
    } else {
      setRef(
        "https://picsum.photos/" + width + "/" + height + "/?blur=" + blur
      );
    }
  }

  return (
    <div className="div">
      <div className="parameter">
        <label className="parameterText">Width</label>
        <input
          value={width}
          onChange={(e) => {
            setWidth(e.target.value);
          }}
        />
      </div>

      <div className="parameter">
        <label className="parameterText">Height</label>
        <input
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
      </div>

      <div className="parameter">
        <label className="parameterText">Blur</label>
        <input
          type="number"
          min="1"
          max="10"
          value={blur}
          onChange={(e) => {
            setBlur(e.target.value);
          }}
        />
      </div>

      <div className="parameter">
        <label className="parameterText">Grayscale</label>
        <input
          type="checkbox"
          onClick={() => {
            setGrayScale(!grayScale);
          }}
        />
      </div>

      <button
        onClick={() => {
          getPicture();
        }}
        className="button"
      >
        <label className="buttonText">Get picture</label>
      </button>

      <div className="button">
        <img
          src={ref}
          className="center"
          alt="Error, try using valid parameters (Width and height must have a positive value and blur must be between 1 and 10)"
        />
      </div>
    </div>
  );
}

export default App;
