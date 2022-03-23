import React from "react";

const PlayerScore = (props) => {
return (
  <tr>
    <td className="name-text">{props.n}</td>
    <td className="score-text">{props.s}</td>
  </tr>
);
}

export default PlayerScore;