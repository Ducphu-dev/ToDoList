import React from "react";
import Content from "../Content";
import FormHeader from "../FormHeader";

export default function Home(props) {
  const {
    isEdit,
    changeContent,
    changeLevel,
    
    changeQueryLevel,
    changeQueryDate
  } = props;
  return (
    <>
      <FormHeader
        
      />
      <Content
      />
    </>
  );
}
