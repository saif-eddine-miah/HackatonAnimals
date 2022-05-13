import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

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
    setResponse([...response, myresponse.data.choices[0].text]);
    console.log(myresponse.data.choices[0]);
  }
  console.log(response);
  return (
    <div>
      <h1>Chat</h1>
      <p>{response}</p>
      <form action="tchat" className="form-container" onSubmit={ask}>
        <label htmlFor="msg">
          <b>Message</b>
          <textarea
            placeholder="Type message.."
            name="msg"
            size="225"
            rows="5"
            cols="33"
            required
            value={question}
            onChange={handleQuestion}
          />
        </label>

        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </div>
  );
}

export default Tchat;
