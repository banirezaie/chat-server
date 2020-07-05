import React, { useState, useEffect } from "react";

const ChatBody = () => {
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    fetch("https://immense-basin-46859.herokuapp.com/messages")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJsonData(data);
      });
  }, []);

  return (
    <div>
      <h2>Send a message</h2>
      <form
        action="https://immense-basin-46859.herokuapp.com/messages"
        method="post"
      >
        <p>
          Name: <input type="text" name="from" placeholder="Your Name" /> <br />
          Message:{" "}
          <input type="text" name="text" placeholder="The message..." />
          <br />
        </p>
        <button type="submit">Send</button>
      </form>
      <a className="App-link" href={jsonData}>
        See all messages
      </a>
    </div>
  );
};

export default ChatBody;
