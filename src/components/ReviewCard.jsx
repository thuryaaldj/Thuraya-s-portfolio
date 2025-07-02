const ReviewCard = ({project ,clientName , review}) => {
  return (
    <div className="review-card">
      <div className="review-image"></div>

      <div className="review-content">
        <div>
          <p className="review-category">{project}</p>
          <h3 className="review-title">{clientName}</h3>
          <p className="review-description">
            {review}
          </p>
        </div>
        {/* <button className="review-button">Button</button> */}
      </div>
    </div>
  );
};

export default ReviewCard;
