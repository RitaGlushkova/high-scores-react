import React, { useState } from "react";
import HighScoreCard from "./HighScoreCard";
import Scores from "./scores";

const HighScoreTable = (props) => {
  props = Scores.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
  const [sorted, setSorted] = useState(props);
  // const [sortDirection, setSortDirection] = useState(1);

  const descending = () => {
    const newSorted = [...sorted].map((el) => ({
      ...el,
      scores: el.scores.sort((a, b) => (a.s > b.s ? 1 : b.s > a.s ? -1 : 0)),
    }));
    setSorted(newSorted);
  };

  const ascending = () => {
    const newSorted = [...sorted].map((el) => ({
      ...el,
      scores: el.scores.sort((a, b) => (a.s > b.s ? -1 : b.s > a.s ? 1 : 0)),
    }));
    setSorted(newSorted);
  };

  return (
    <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header">
        High Scores per Country
        <button onClick={ascending}>Highest score</button>
        <button onClick={descending}>Lowest score</button>
      </div>
      {props.map((prop, index) => {
        return (
          <HighScoreCard key={index} name={prop.name} scores={prop.scores} />
        );
      })}
    </div>
  );
};

export default HighScoreTable;
