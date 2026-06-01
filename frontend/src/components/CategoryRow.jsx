import ContentCard from "./ContentCard";
import "../styles/home.css";

const CategoryRow = ({ category }) => {
  return (
    <section className="category-section">
      <div className="section-header">
        <h2>{category.title}</h2>
      </div>

      <div className={`content-row ${category.layoutType}`}>
        {category.contents.map((content, index) => (
          <ContentCard
            key={content.id}
            content={content}
            layoutType={category.layoutType}
            rank={category.isTop10 ? index + 1 : null}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryRow;
