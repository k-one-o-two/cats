import React from "react";
import Breeds from "./components/breeds";
import BreedsSort from "./components/breedsSort";
import BreedSearch from "./components/breedSearch";
import "./App.css";

function App() {
  return (
    <>
      <div className="mb-3 p-3">
        <BreedsSort />
        <BreedSearch />
      </div>
      <Breeds />
    </>
  );
}

export default App;
