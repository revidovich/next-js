import { useState, useEffect } from 'react';
import styles from '../styles/List.module.scss';

export default function StatusBar() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {  // в нетворке если сделать офлайн
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return <p className={styles.form__status}>{isOnline ? 'Online' : 'Disconnected'}</p>;
}
