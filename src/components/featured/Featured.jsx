import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import React from "react";

function Featured() {
  return (
    <div className="featured">
      <img
        width="100%"
        src="https://flixchatter.files.wordpress.com/2021/02/lupin-featuredimg.jpg?w=1200"
        alt="trend"
      />
      <div className="info">
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/68/Lupin_Dans_l%27Ombre_d%27Ars%C3%A8ne_Logo.svg/1200px-Lupin_Dans_l%27Ombre_d%27Ars%C3%A8ne_Logo.svg.png?20210218155048"
          alt="lupin"
        />
        <span className="desc">
          Inspired by the adventures of Arsène Lupin, gentleman thief Assane
          Diop sets out to avenge his father for an injustice inflicted by a
          wealthy family.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
