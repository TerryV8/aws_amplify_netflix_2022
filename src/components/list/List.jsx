import "./list.scss";

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";

function List(props) {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    //let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber < 0) {
      //const slideNumberTo = slideNumber + 1;
      //const translateXto = 205 * slideNumberTo;

      listRef.current.style.transform = `translateX(${
        205 * (slideNumber + 1)
      }px)`;

      console.log("A: ", slideNumber);
      //console.log("B: ", translateXto);
      setSlideNumber(slideNumber + 1);
    } else if (direction === "right" && -5 < slideNumber) {
      //const slideNumberTo = slideNumber - 1;
      //const translateXto = 205 * slideNumberTo;

      console.log("A: ", slideNumber);
      //console.log("B: ", translateXto);

      listRef.current.style.transform = `translateX(${
        205 * (slideNumber - 1)
      }px)`;
      setSlideNumber(slideNumber - 1);
    }
  };

  return (
    <div className="list">
      <span className="listTitle">{props.title}</span>
      <div className="wrapper">
        {slideNumber !== 0 && (
          <ArrowBackIosNewOutlinedIcon
            className="sliderArrow left"
            onClick={() => handleClick("left")}
          />
        )}
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        {slideNumber > -5 && (
          <ArrowForwardIosOutlinedIcon
            className="sliderArrow right"
            onClick={() => handleClick("right")}
          />
        )}
      </div>
    </div>
  );
}

export default List;
