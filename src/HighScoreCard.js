import React from "react";
import PlayerScore from "./PlayerScore";

const HighScoreCard = (props) => {
  return (
    <div className="card-body" style={{ maxWidth: "20rem" }}>
      <h5 class="card-title">HIGH SCORES: {props.name}</h5>
      <table className="table table-striped">
        <tbody>
          {props.scores.map((player) => {
            return <PlayerScore n={player.n.toUpperCase()} s={player.s} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default HighScoreCard;
