import "./home.scss";
import Navbar from "../components/navbar/Navbar";
import Featured from "../components/featured/Featured";
import List from "../components/list/List";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <Featured type="movies" />

      <List title="Trending now" />
      <List title="Popular on Netflix" />
      <List title="Blockbuster Movies" />
      <List title="Top 10 Movies Today" />
    </div>
  );
};

export default Home;
