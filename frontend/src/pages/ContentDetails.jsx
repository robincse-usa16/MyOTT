import { Play, Plus } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getContentById } from "../data/mockData";
import "../styles/details.css";

const ContentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const content = getContentById(id);

  if (!content) {
    return (
      <div className="details-page">
        <Navbar />
        <h2 className="not-found">Content not found</h2>
      </div>
    );
  }

  return (
    <main className="details-page">
      <Navbar />

      <section
        className="details-hero"
        style={{ backgroundImage: `url(${content.landscape})` }}
      >
        <div className="details-overlay">
          <div className="details-info">
            <h1>{content.title}</h1>
            <p>{content.description}</p>

            <div className="details-actions">
              <button
                className="play-btn"
                onClick={() => navigate(`/watch/${content.id}`)}
              >
                <Play size={18} fill="white" />
                Play
              </button>

              <button className="secondary-btn">
                <Plus size={18} />
                My List
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContentDetails;
