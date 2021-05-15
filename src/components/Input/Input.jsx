import React from "react";
import "./styles.css";

const Input = (props) => {
  const { handleChange } = props;
  return (
    <>
      <form>
        <input type="text" onChange={handleChange} className="formControl"/>
      </form>
    </>
  )
}

export default Input;
