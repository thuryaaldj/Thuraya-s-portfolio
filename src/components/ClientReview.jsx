import ReviewCard from "./ReviewCard";

const ClientReview = () => {
  const reviews = [
    {
      project: "e-commerce0",

      clientName: "test",
      review: "test",
    },
    {
      project: "e-commerce0",

      clientName: "test",
      review: "test",
    },
    {
      project: "e-commerce0",

      clientName: "test",
      review: "test",
    },
    {
      project: "e-commerce0",

      clientName: "test",
      review: "test",
    },
    {
      project: "e-commerce0",

      clientName: "test",
      review: "test",
    },
    {
      project: "e-commerce0",

      clientName: "test",
      review: "test",
    },
  ];
  return (
    <section className="client-review-section" id="reviews">
      <div className="client-review-header">
        <h2 className="client-review-title">Client Review</h2>
        <p className="client-review-subtitle">Some client word</p>
      </div>

      <div className="client-review-cards">
    {reviews.map((review ,index)=>(<ReviewCard 
    key={index}
    project={review.project} clientName={review.clientName} review={review.review} 
    // key={review.clientName}
       />))}
      </div>
    </section>
  );
};

export default ClientReview;
