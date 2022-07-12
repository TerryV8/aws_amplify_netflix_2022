import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

function ListItem() {
  const trailer = "https://youtu.be/QQKXhTBKleY";
  return (
    <div className="listItem">
      <img
        src="https://wwwflickeringmythc3c8f7.zapwp.com/q:i/r:0/wp:0/w:1/u:https://cdn.flickeringmyth.com/wp-content/uploads/2017/08/spirited-away.jpg"
        alt=""
      />

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia velit
          repellat porro, repudiandae quam suscipit, inventore enim a reiciendis
          quod exercitationem
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
}

export default ListItem;
