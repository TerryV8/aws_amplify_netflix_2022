import "./watch.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIcon />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://amplify-amplifynetflix2022-dev-142455-deployment.s3.eu-west-3.amazonaws.com/Spirited+Away+2m27.mp4"
      ></video>
    </div>
  );
}
