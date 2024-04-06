import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Suns from "./Suns";
import Section from "./Section";
import { items } from "./items";

function App() {
  return (
    <div>
      {items.map((item, index) => (
        <Section
          key={index}
          title={item.title}
          description={item.description}
          featureImage={item.featureImage}
          sunCount={item.sunCount}
          waterCount={item.waterCount}
        />
      ))}
    </div>
  );
}

export default App;
