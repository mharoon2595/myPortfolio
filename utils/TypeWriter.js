import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ text, delay, style }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);



  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

 

  return <div className={style} >{currentText}</div>;
};

export default Typewriter;