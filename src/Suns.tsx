import React from "react";

interface SunsProps {
  emoji: string;
  count: number;
}

const Suns: React.FC<SunsProps> = ({ emoji, count }) => {
  return (
    <div>
      {Array(count)
        .fill("")
        .map((_, index) => (
          <div key={index}>{emoji}</div>
        ))}
    </div>
  );
};

export default Suns;
