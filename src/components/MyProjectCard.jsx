const MyProjectCard = ({ image, title, description }) => {
  return (
    <div className="my-project-card">
      <img
        src={image}
        alt={title}
        className="my-project-card-image"
      />
      <div className="p-6">
        <h3 className="my-project-card-title">
          {title}
        </h3>
        <p className="my-project-card-description">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MyProjectCard;
