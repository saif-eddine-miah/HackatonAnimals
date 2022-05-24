import React, { useState } from "react";
import "./Tchat.css";

function Tchat() {
  const [response, setResponse] = useState("...");

  const [question, setQuestion] = useState("");

  const handleQuestion = (event) => {
    setQuestion(event.target.value);
  };

  async function ask(event) {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${String(import.meta.env.VITE_API_KEY)}`,
      },
      body: JSON.stringify({
        prompt: question,
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6,
        stop: ['"""'],
      }),
    };
    fetch(
      "https://api.openai.com/v1/engines/text-davinci-002/completions",
      requestOptions
    )
      .then((r) => r.json())
      .then((data) => {
        if (data) {
          setResponse(data.choices[0].text);
          setQuestion("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="Tchat">
      <h1>Chat</h1>
      <div className="Tchat__Bot">
        <div>{response}</div>
      </div>
      <form action="tchat" className="form-container" onSubmit={ask}>
        <textarea
          placeholder="Type message.."
          name="msg"
          size="225"
          rows="2"
          cols="33"
          required
          value={question}
          onChange={handleQuestion}
        />

        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </div>
  );
}

export default Tchat;
