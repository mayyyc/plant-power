import React from "react";
import Suns from "./Suns";
import { SectionProps } from "./items";
import "./Section.css";

const Section: React.FC<SectionProps> = ({
  title,
  description,
  featureImage,
  sunCount,
  waterCount,
}) => {
  return (
    <div className="section">
      <img height="200px" src={featureImage} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <Suns emoji="🌞" count={sunCount} />
      <Suns emoji="💧" count={waterCount} />
    </div>
  );
};

export default Section;
