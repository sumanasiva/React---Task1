import React, { useState } from "react";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

const boxStyle = {
  background: "#fff",
  border: "2px solid #fff", // Change the border color to black
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  padding: "20px",
  textAlign: "center",
  width: "80%",
  maxWidth: "500px",
  margin: "0 auto",
};

const headingStyle = {
  fontSize: "30px",
  margin: "0 0 20px",
};

const textareaStyle = {
  width: "95%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "4px",
};

const paragraphStyle = {
  fontSize: "30px",
};

function WordCounter() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    const words = inputText.trim().split(/\s+/);
    const wordCount = inputText.trim() === "" ? 0 : words.length;

    setText(inputText);
    setWordCount(wordCount);
  };

  const [wordCount, setWordCount] = useState(0);

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={headingStyle}>Responsive Paragraph Word Counter</h1>
        <textarea
          rows="10"
          cols="50"
          value={text}
          onChange={handleTextChange}
          style={textareaStyle}
          placeholder="Type your text here..."
        />
        <p style={paragraphStyle}>Word Count: {wordCount}</p>
      </div>
    </div>
  );
}

export default WordCounter;
