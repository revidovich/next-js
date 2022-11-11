import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';

const socket = io('http://localhost:8000/', { transports: ['websocket'] });

const Chat = () => {
  const [nameValue, setNameValue] = useState('');
  const [msgValue, setMsgValue] = useState('');
  const [history, setHistory] = useState([]);

  const handleSend = (event) => {
    event.preventDefault();
    socket.emit('handleSend', { client: nameValue, post: msgValue })
  };

  useEffect(() => {
    socket.emit('openChat');
  }, []);

  // socket.on('openChat', (data) => {
  //   setHistory([...history, data]);
  // });

  socket.on('getHistory', (data) => {
    setHistory([...history, data]);
  });

  socket.on('pull', (data) => {
    setHistory([...history, data]);
    // console.log(history);
  });

  return (
    <>
      <form id='messageForm' onSubmit={handleSend}>
        <label htmlFor="pet-select">Choose nick:</label>

        <select name="pets" id="pet-select" onChange={(e) => setNameValue(e.target.value)} value={nameValue} >
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>

        <input type="text" name='msg' onChange={(e) => setMsgValue(e.target.value)} value={msgValue} />

        <input type="submit" value='Send' />
      </form>
      <ul>
        {history && history.map((el, index) => (
          <li key={index}>{`${el.client} said: ${el.post}`}</li>
        ))}
      </ul>
    </>
  );
};

export default Chat;