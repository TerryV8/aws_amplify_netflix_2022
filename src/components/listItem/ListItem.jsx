import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import { useState, useRef, useEffect } from "react";

function ListItem() {
  const [isHoverItem, setIsHoverItem] = useState(false);
  const elementVideoDisplay = useRef(null);

  const [elementVideoDisplayIsLoaded, setElementVideoDisplayIsLoaded] =
    useState(false);

  useEffect(() => {
    console.log("B", elementVideoDisplay);

    if (
      elementVideoDisplayIsLoaded === true &&
      elementVideoDisplay &&
      elementVideoDisplay.current !== null
    ) {
      elementVideoDisplay.current.play();
    }
  }, [elementVideoDisplayIsLoaded]);

  const [switchVolumeOffOn, setSwitchVolumeOffOn] = useState("off");

  function SwitchVolumeOffOn(e) {
    e.preventDefault();
    console.log("Volume switch off on clicked");

    if (switchVolumeOffOn === "off") {
      setSwitchVolumeOffOn("on");
      elementVideoDisplay.current.muted = false;
    } else {
      setSwitchVolumeOffOn("off");
      elementVideoDisplay.current.muted = true;
    }
  }

  return (
    <div
      className="listItem"
      onMouseEnter={() => {
        setIsHoverItem(true);
        //console.log("C", elementVideoDisplay.current);
      }}
      onMouseLeave={() => {
        setIsHoverItem(false);
        setElementVideoDisplayIsLoaded(false);
        setSwitchVolumeOffOn("off");
      }}
    >
      <img
        onloadstart="this.volume=0.5"
        src="https://wwwflickeringmythc3c8f7.zapwp.com/q:i/r:0/wp:0/w:1/u:https://cdn.flickeringmyth.com/wp-content/uploads/2017/08/spirited-away.jpg"
        alt=""
      />

      {isHoverItem && (
        <>
          <video
            height="270"
            width="480"
            poster="https://wwwflickeringmythc3c8f7.zapwp.com/q:i/r:0/wp:0/w:1/u:https://cdn.flickeringmyth.com/wp-content/uploads/2017/08/spirited-away.jpg"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
            playsinline="playsinline"
            preload="metadata"
            data-aos="fade-up"
            onLoadedData={() => {
              setElementVideoDisplayIsLoaded(true);
              console.log("loaded");
            }}
            ref={(el) => (elementVideoDisplay.current = el)}
          >
            <source src="https://amplify-amplifynetflix2022-dev-142455-deployment.s3.eu-west-3.amazonaws.com/spirited_away.mp4" />
            <source src="http://content.bitsontherun.com/videos/bkaovAYt-27m5HpIu.webm" />
            <p class="warning">Your browser does not support HTML5 video.</p>
          </video>

          <div className="itemInfo">
            <div className="icons">
              {switchVolumeOffOn === "off" && (
                <button className="volume_off" onClick={SwitchVolumeOffOn}>
                  <VolumeOffOutlinedIcon />
                </button>
              )}
              {switchVolumeOffOn === "on" && (
                <button className="volume_on" onClick={SwitchVolumeOffOn}>
                  <VolumeUpOutlinedIcon />
                </button>
              )}
              <PlayArrowIcon />
              <AddOutlinedIcon />
              <ThumbUpOutlinedIcon />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              velit repellat porro, repudiandae quam suscipit, inventore enim a
              reiciendis quod exercitationem
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
