import React, { useState, useRef, useEffect } from 'react';
import './Stopwatch.css';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Start or pause the stopwatch
  const handleStartPause = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    } else {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  // Reset stopwatch
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
    setIsRunning(false);
  };

  // Clear interval when component unmounts
//   useEffect(() => {
//     return () => clearInterval(intervalRef.current);
//   }, []);

  // Format time as hh:mm:ss
  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return `${hrs.toString().padStart(2, '0')}:
            ${mins.toString().padStart(2, '0')}:
            ${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch-container">
      <h1 className="title">⏱ Stopwatch</h1>
      <div className="time-display">{formatTime(seconds)}</div>
      <div className="button-group">
        <button onClick={handleStartPause} className="btn">
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={handleReset} className="btn reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
