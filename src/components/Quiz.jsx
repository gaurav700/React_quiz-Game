import { useState } from "react";
export default function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [userAnsers, setUserAnswers] = useState([]);
  return <p>Currently active questions</p>;
}
