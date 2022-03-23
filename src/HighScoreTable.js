import React from "react";
import HighScoreCard from "./HighScoreCard";
import Scores from "./scores";

const HighScoreTable = (props) => {
  props = Scores;
  return (
    <div class="card bg-light mb-3" style= {{maxWidth: "18rem"}}>
      <div class="card-header">High Scores per Country</div>
      {props.map((prop) => {
        return <HighScoreCard name={prop.name} scores={prop.scores} />;
      })}
    </div>
  );
};

export default HighScoreTable;
