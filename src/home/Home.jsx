import HomeMovie from "../components/homeMovie/HomeMovie";
import Navbar from "../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HomeMovie />
    </div>
  );
};

export default Home;
