import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getContentById } from "../data/mockData";
import "../styles/player.css";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const content = getContentById(id);

  if (!content) {
    return <h2 className="player-error">Video not found</h2>;
  }

  return (
    <main className="player-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={22} />
        Back
      </button>

      <video
        className="video-player"
        controls
        autoPlay
        src={content.videoUrl}
      />

      <div className="player-title">
        <h2>{content.title}</h2>
      </div>
    </main>
  );
};

export default Player;
