import { io } from 'socket.io-client';
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/List.module.scss';
import StatusBar from './StatusBar';

const socket = io('http://localhost:8000/', { transports: ['websocket'] });

const Chat = () => {
  const [nameValue, setNameValue] = useState('');
  const [msgValue, setMsgValue] = useState('');
  const [history, setHistory] = useState([]);
  const nickRef = useRef('')

  const handleSend = (event) => {
    event.preventDefault();
    if (msgValue.trim() && nickRef.current.value !== '') {
      sendPing({ client: nameValue, post: msgValue });
      setMsgValue('');
    }
  };

  const sendPing = (data) => {
    socket.emit('ping', data);
  };

  const handleClear = () => {
    socket.emit('clear');
    setHistory([{ client: '', post: '' }]);
  };

  const handleChange = (e) => {
    if (e.keyCode == 13 && !e.shiftKey) {
      handleSend(e);
    }
  };

  useEffect(() => {
    socket.emit('ping', []); // пинг для начальной подгрузки
    socket.on('pong', (messages) => {
      setHistory(messages);
    });

    return () => {
      socket.off('pong');
    };
  }, []);

  return (
    <>
      <div className={styles.chat}>
        <ul className={styles.ul}>
          {history && history.map((el, index) => {
            if (el.client) {
              if (nickRef.current.value !== el.client) {
              return (
                <li key={index} className={styles.li} style={{textAlign: 'start'}}>
                  <p className={styles.p}>
                    {`${el.client} said: ${el.post}`}
                  </p>
                </li>
              )
              } else {
              return (
                <li key={index} className={styles.li} style={{textAlign: 'end'}}>
                  <p className={styles.p}>
                    {`${el.client} said: ${el.post}`}
                  </p>
                </li>
              )
              }
            }
          })}
        </ul>

      </div>
      <form id='messageForm' onSubmit={handleSend} className={styles.form}>
        <label
          className={styles.form__label}
          htmlFor="pet-select"
        >
          Choose nick:
        </label>

        <select
          name="pets"
          id="pet-select"
          onChange={(e) => setNameValue(e.target.value)}
          value={nameValue}
          ref={nickRef}
          className={styles.form__select}
        >
          <option value="">--Please choose your nick--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>

        <textarea
          className={styles.form__text}
          name='msg'
          placeholder='Your text'
          onChange={e => setMsgValue(e.target.value)} 
          value={msgValue}
          onKeyDown={handleChange}
        />

        <input
          className={styles.form__submit}
          type='submit'
          value='Enter'
          disabled={!msgValue.trim() || nickRef.current.value === ''} 
        />

        <input 
          className={styles.form__clear}
          type="button"
          value='Clear chat'
          onClick={handleClear}
          disabled={!history.length}
        />

        <StatusBar />

      </form>
    </>
  );
};

export default Chat;