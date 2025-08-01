import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import styles from './Result.module.css';

export default function Result({ maxQuizLen, correctNumLen }) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className={styles.result}>
        あなたの正解数は...
        <span className={styles.resultHighlight}>
          {`全${maxQuizLen}問中${correctNumLen}問正解`}
        </span>
        でした！
      </div>
      <Confetti width={windowSize.width} height={windowSize.height} />
    </>
  );
}
