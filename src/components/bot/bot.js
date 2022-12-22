import React from 'react';

const Messenger = () => {
  return (
    <>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <df-messenger
        intent="WELCOME"
        chat-title="Paw Agent"
        agent-id="f9cb2db6-4d08-4bbd-8d3c-c7ce76b5ede3"
        language-code="en"
        chat-icon="https://freesvg.org/img/paw-print.png"

      ></df-messenger>
    </>
  );
};
export default Messenger;