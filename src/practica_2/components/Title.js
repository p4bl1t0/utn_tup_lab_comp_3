import React from "react";

const Title = ({ title, className }) => {
  return (
    <div>
      <h1 className={className}>{title}</h1>
    </div>
  );
};

export default Title;
