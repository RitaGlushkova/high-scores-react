import React, { useState } from "react";
import PlayerScore from "./PlayerScore";
import Scores from "./scores";

const WorldWide = (props) => {
  props = [...Scores]
    .map((country) => country.scores)
    .flat()
    .sort((a, b) => (a.s > b.s ? -1 : b.s > a.s ? 1 : 0));
  console.log(props);
  return (
    <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header">High Scores World Wide</div>
      <table className="table table-striped">
        <tbody>
          {props.map((prop, index) => {
            return (
              <PlayerScore n={prop.n.toUpperCase()} s={prop.s} key={index} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WorldWide;
