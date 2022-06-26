import React from 'react';
import Scoreboard from './Scoreboard.js';
import { useState } from 'react';
import './style.css';
const Quiz = () => {
  let val = 0;
  const [currscore, setscore] = useState(0);
  const [final, setfinal] = useState(0);
  const onCheck = (e) => {
    if (e.target.value == 'windows') {
      setscore(currscore + 1);
    }
  };
  console.log(currscore);
  const showScore = () => {
    setfinal(currscore);
  };

  return (
    <>
      <div>
        <ul>
          <li>
            <input
              type="radio"
              value="windows"
              name="option"
              onChange={onCheck}
            />
            <label>Windows</label>
          </li>
          <li>
            <input
              type="radio"
              value="macos"
              name="option"
              onChange={onCheck}
            />
            <label>MacOS</label>
          </li>
          <li>
            <input
              type="radio"
              value="linux"
              name="option"
              onChange={onCheck}
            />
            <label>Linux</label>
          </li>
        </ul>
        <input type="submit" value="submit" onClick={showScore} />
      </div>
      <div className="score">
        <Scoreboard scoreval={final} />
      </div>
    </>
  );
};

export default Quiz;
