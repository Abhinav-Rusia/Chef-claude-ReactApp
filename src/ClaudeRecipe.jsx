import React from "react";
import Markdown from "react-markdown";
import { ColorRing } from "react-loader-spinner";

const ClaudeRecipe = ({ recepie, isLoading }) => {
  return (
    <section className="container" id="suggested-recipe-container">
      <h2>Chef Claude Recommends:</h2>
      {isLoading ? (
        <div className="color-ring-wrapper">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px" }}
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <Markdown>{recepie}</Markdown>
      )}
    </section>
  );
};

export default ClaudeRecipe;
