import "./home.scss";
import Navbar from "../components/navbar/Navbar";
import Featured from "../components/featured/Featured";
import List from "../components/list/List";
import Welcome from "../components/welcome/Welcome";
import { useState } from "react";

const Home = () => {
  const [welcomePage, setWelcomePage] = useState(true);

  return (
    <div className="home">
      <Navbar />

      {welcomePage && (
        <>
          <Welcome />
        </>
      )}

      {welcomePage === false && (
        <>
          <Featured type="movies" />

          <List title="Trending now" />
          <List title="Popular on Netflix" />
          <List title="Blockbuster Movies" />
          <List title="Top 10 Movies Today" />
        </>
      )}
    </div>
  );
};

export default Home;
