import { useEffect, useState } from "react";

export default function Timer({ timeout, onTimeOut }) {
  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeout);
    return () => {
      clearInterval(timer);
    };
  }, [timeout, onTimeOut]);

  const [remainTime, setRemainTime] = useState(timeout);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainTime((prevRemainTime) => prevRemainTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remainTime} />;
}
