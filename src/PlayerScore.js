import React from "react";

const PlayerScore = (props) => {
return (
  <tr>
    <td className="name-text">{props.n}</td>
    <td className="score-text">{parseInt(props.s)}</td>
  </tr>
);
}

export default PlayerScore;