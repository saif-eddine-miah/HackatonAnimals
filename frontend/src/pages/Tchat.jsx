import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./Tchat.css";

function Tchat() {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const [response, setResponse] = useState("...");

  const [question, setQuestion] = useState("");

  const handleQuestion = (event) => {
    setQuestion(event.target.value);
  };

  const openai = new OpenAIApi(configuration);
  async function ask(event) {
    event.preventDefault();
    const myresponse = await openai.createCompletion("text-davinci-002", {
      prompt: question,
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
    });
    setResponse(myresponse.data.choices[0].text);
    console.log(myresponse.data.choices[0].text);
  }
  console.log(response);
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
