import React from "react";

const LanguageCard = ({ language }) => {
  console.log("language in card", typeof language[1]);
  return (
    <div>
      {/* <div>why?</div> */}
      <div>
        Code Language: {language[0]} and Number of Repos: {language[1]}
      </div>
    </div>
  );
};

export default LanguageCard;
