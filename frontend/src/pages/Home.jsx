import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import { banners } from "../data/mockData";
import "../styles/home.css";
import "../styles/heroBanner.css";

const Home = () => {
  return (
    <main className="home-page">
      <Navbar />
      <HeroBanner banners={banners} />
    </main>
  );
};

export default Home;
