import React, { useState, useRef, useEffect } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  /*
  let [ms, setMs] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(0);
  */

  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current)
      }, 10)
    }

    return () => {
      clearInterval(intervalIdRef.current);
    }
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    console.log(startTimeRef.current);
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`
    
  }

  /*
  function startStopwatch(event) {
    if (event === "start" && !intervalId) {
      const id = setInterval(() => {
        setMs((ms) => {
          const newMs = ms + 1;
          if (newMs > 90) {
            setMs(0);
            setSeconds((s) => {
              const newS = s + 1;
              if (newS >= 60) {
                setSeconds(0);
              }
              return newS;
            });
          }
          return newMs;
        });
      }, 10);
      setIntervalId(id);
    } else if (event === "stop") {
      clearInterval(intervalId);
      setIntervalId(null);
    } else if (event === "reset") {
      setMs(0);
      setSeconds(0);
      setMinutes(0);
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }*/

  return (
    <div className="main-div">
      <div className="stopwatch-main">
        <div>
          <span className="time">{formatTime()}</span>
          <br />
        </div>
        <div className="buttons-div">
          <button className="start-button" onClick={start}>
            Start
          </button>
          <button className="stop-button" onClick={stop}>
            Stop
          </button>
          <button className="reset-button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
