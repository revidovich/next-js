import WebSocket from 'ws';
import { useState } from 'react';

const ws = new WebSocket('ws://127.0.0.1:8000');

export async function getStaticProps(context) {
  
  ws.onmessage = (message) => {
    console.log(JSON.parse(message.data));
    const messages = JSON.parse(message.data);
    // messages.forEach(element => {
      
    // });
    return (
      <div>{messages}</div>
    )
  };

  const response = await 'yy';

  return {
      props: {
          posts: response,
      },
  };
};

const Chat = () => {
  const [nameValue, setNameValue] = useState('');
  const [msgValue, setMsgValue] = useState('');


  const send = (event) => {
    event.preventDefault();
    ws.send(JSON.stringify({ nameValue, msgValue }))
  }

  return (
    <form id='messageForm' onSubmit={send}>
      <input type="text" name='name' onChange={(e) => setNameValue(e.target.value)} value={nameValue} />
      <input type="text" name='msg' onChange={(e) => setMsgValue(e.target.value)} value={msgValue} />
      <input type="submit" value='send' />
    </form>
  );
};

export default Chat;