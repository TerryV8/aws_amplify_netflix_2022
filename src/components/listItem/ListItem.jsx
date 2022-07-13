import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { useState, useRef, useEffect } from "react";

function ListItem() {
  const [isHoverItem, setIsHoverItem] = useState(false);
  const elementVideoDisplay = useRef(null);
  const elementAudioWithVideoDisplay = useRef(null);

  const [elementVideoDisplayIsLoaded, setElementVideoDisplayIsLoaded] =
    useState(false);
  const [
    elementAudioWithVideoDisplayIsLoaded,
    setElementAudioWithVideoDisplayIsLoaded,
  ] = useState(false);

  useEffect(() => {
    console.log("B", elementVideoDisplay);

    if (
      elementVideoDisplayIsLoaded === true &&
      elementVideoDisplay &&
      elementVideoDisplay.current !== null
    ) {
      elementVideoDisplay.current.muted = false;
      elementVideoDisplay.current.play();
      //elementVideoDisplay.current.muted = false;

      //const audio = new Audio(
      //  "https://amplify-amplifynetflix2022-dev-142455-deployment.s3.eu-west-3.amazonaws.com/spirited_away.mp3"
      //);
      //console.log(audio);

      //audio.play();
      //console.log(audio);

      //console.log(elementAudioWithVideoDisplay);
      //elementAudioWithVideoDisplay.current.play();
    }
  }, [
    elementVideoDisplayIsLoaded,
    //    elementVideoDisplay,
    //elementVideoDisplay.current,
  ]);

  /*useEffect(() => {
    console.log("AA1", elementVideoDisplay);
    console.log("AA2", elementAudioWithVideoDisplayIsLoaded);

    if (
      elementVideoDisplayIsLoaded === true ||
      (elementVideoDisplay && elementVideoDisplay.current !== null)
    ) {
      //elementVideoDisplay.current.play();
      //elementVideoDisplay.current.muted = false;

      //const audio = new Audio(
      //  "https://amplify-amplifynetflix2022-dev-142455-deployment.s3.eu-west-3.amazonaws.com/spirited_away.mp3"
      //);
      //console.log(audio);

      //audio.play();
      //console.log(audio);

      //console.log(elementAudioWithVideoDisplay);
      //elementAudioWithVideoDisplay.current.play();
      //elementAudioWithVideoDisplay.current.stop();
      //elementAudioWithVideoDisplay.current.load();
      elementAudioWithVideoDisplay.current.muted = false;
      elementAudioWithVideoDisplay.current.play();
    }
  }, [elementAudioWithVideoDisplayIsLoaded]);

  useEffect(() => {
    console.log("BB1", elementVideoDisplay);
    console.log("BB2", elementAudioWithVideoDisplayIsLoaded);

    if (
      elementAudioWithVideoDisplayIsLoaded === true ||
      (elementAudioWithVideoDisplay &&
        elementAudioWithVideoDisplay.current !== null)
    ) {
      //elementVideoDisplay.current.play();
      //elementVideoDisplay.current.muted = false;

      //const audio = new Audio(
      //  "https://amplify-amplifynetflix2022-dev-142455-deployment.s3.eu-west-3.amazonaws.com/spirited_away.mp3"
      //);
      //console.log(audio);

      //audio.play();
      //console.log(audio);

      //console.log(elementAudioWithVideoDisplay);
      //elementAudioWithVideoDisplay.current.play();
      //elementAudioWithVideoDisplay.current.stop();
      elementAudioWithVideoDisplay.current.muted = false;
      elementAudioWithVideoDisplay.current.play();
    }
  }, [elementVideoDisplayIsLoaded]);
*/
  /*useEffect(() => {
    console.log("B", elementAudioWithVideoDisplay);

    if (
      elementAudioWithVideoDisplayIsLoaded === true &&
      elementAudioWithVideoDisplay &&
      elementAudioWithVideoDisplay.current !== null
    ) {
      elementAudioWithVideoDisplay.current.play();
      //elementVideoDisplay.current.muted = false;

      //const audio = new Audio(
      //  "https://amplify-amplifynetflix2022-dev-142455-deployment.s3.eu-west-3.amazonaws.com/spirited_away.mp3"
      //);
      //console.log(audio);

      //audio.play();
      //console.log(audio);

      console.log(elementAudioWithVideoDisplay);
    }
  }, [
    elementAudioWithVideoDisplayIsLoaded,
    //    elementVideoDisplay,
    //elementVideoDisplay.current,
  ]);*/

  //const trailer =
  //  "https://amplify-amplifynetflix2022-dev-142455-deployment.s3.eu-west-3.amazonaws.com/spirited_away.mp4";
  return (
    <div
      className="listItem"
      onMouseEnter={() => {
        setIsHoverItem(true);
        //console.log("C", elementVideoDisplay.current);
      }}
      onMouseLeave={() => {
        setIsHoverItem(false);
        setElementAudioWithVideoDisplayIsLoaded(false);
        setElementVideoDisplayIsLoaded(false);
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

          <audio
            loop
            control
            ref={(el) => (elementAudioWithVideoDisplay.current = el)}
            onLoadedData={() => {
              setElementAudioWithVideoDisplayIsLoaded(true);
              console.log("audio loaded");
            }}
          >
            <source
              src="https://amplify-amplifynetflix2022-dev-142455-deployment.s3.eu-west-3.amazonaws.com/spirited_away.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>

          <div className="itemInfo">
            <div className="icons">
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
