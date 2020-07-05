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
      <div>
        {jsonData.map((text, i) => {
          return (
            <div key={i} className="eachMessage">
              <p>{text.from}</p>
              <p>{text.text}</p>
            </div>
          );
        })}
      </div>
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
    </div>
  );
};

export default ChatBody;
