import React from "react";
import Markdown from "react-markdown";

const ClaudeRecipe = (props) => {
  return (
    <section id="suggested-recipe-container">
      <h2>Chef Claude Recommends:</h2>
      <Markdown>{props.recepie}</Markdown>
    </section>
  );
};

export default ClaudeRecipe;
