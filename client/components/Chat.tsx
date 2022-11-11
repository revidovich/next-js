import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';
import styles from '../styles/List.module.scss';

const socket = io('http://localhost:8000/', { transports: ['websocket'] });

const Chat = () => {
  const [nameValue, setNameValue] = useState('');
  const [msgValue, setMsgValue] = useState('');
  const [history, setHistory] = useState([]);

  const handleSend = (event) => {
    event.preventDefault();
    sendPing({ client: nameValue, post: msgValue });
    setMsgValue('');
  };

  const sendPing = (data) => {
    socket.emit('ping', data);
  };

  const handleClear = () => {
    socket.emit('clear');
    setHistory([{ client: '', post: '' }]);
  };



  useEffect(() => {
    // socket.on('connect', () => {
    //   setHistory([]);
    // });

    // socket.on('disconnect', () => {
    //   setHistory([]);
    // });

    socket.on('pong', (messages) => {
      setHistory(messages);
    });

    return () => {
      // socket.off('connect');
      // socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  // useEffect(() => {
  //   socket.on('connect', () => {
  //     setHistory([]);
  //   });
  // }, [socket.connected]);

  return (
    <>
      <div className={styles.chat}>
        <ul className={styles.ul}>
          {history && history.map((el, index) => {
            if (el.client) {
              return (
                <li key={index} className={styles.li}>
                  <p className={styles.p}>
                    {`${el.client} said: ${el.post}`}
                  </p>
                </li>
              )
            }
          })}
        </ul>

      </div>
      <form id='messageForm' onSubmit={handleSend} className={styles.form}>
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

        <input type="submit" value='Enter' />
        <input type="button" value='Clear' onClick={handleClear} />
      </form>
    </>
  );
};

export default Chat;