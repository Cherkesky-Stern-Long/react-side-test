import React from "react";
import LanguageCard from "./LanguageCard";

const LanguageList = ({ languages }) => {
    console.log("typeof languages in list", typeof languages)
    console.log("languages in list", languages)
  const renderedList = languages.map((language) => {
    return <LanguageCard key={language[0]} language={language} />;
  });

  if (renderedList.length !== 0) {
    return (
      <div>
        {/* <div>Language List</div> */}
        <div>{renderedList}</div>
      </div>
    );
  } else return <div>nuttin to see here</div>
};

export default LanguageList;
