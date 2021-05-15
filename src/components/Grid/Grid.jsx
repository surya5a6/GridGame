import React from "react";
import "./styles.css";



const Grid = (props) => {
  const { sequence, handleChange } = props;
  let sequenceArray = sequence.split(',');

  const number = sequenceArray[0]/1;
  sequenceArray = sequenceArray.slice(1);

  const gridItems = sequenceArray.map(num => num/number);



  return (
    <div className="parent">
      <input type="text" className="text-input" onChange={handleChange}/>
      <div className="container">
        {
          [1,2,3,4,5,6,7,8,9].map(number => (
            gridItems.includes(number) ? <article style={{background: "pink"}}/> : <article style={{background: "blue"}}/>
          )
          )
        }
        {/* <article className="item-1"></article>
        <article className="item-2"></article>
        <article className="item-3"></article>
        <article className="item-4"></article>
        <article className="item-5"></article>
        <article className="item-6"></article>
        <article className="item-7"></article>
        <article className="item-8"></article>
        <article className="item-9"></article> */}
      </div>
    </div>
  )
  
}

export default Grid;