import ReviewCard from "./ReviewCard";

const ClientReview = () => {
  const reviews = [
    {
      project: "Vege Store",

      clientName: "Ahmad",
      review: "......" ,
    },
    {
      project: "Bus Booking App",

      clientName: "Nour",
      review: "this is amazing",
    },
    {
      project: "e-commerce",

      clientName: "nour",
      review: "..........",
    },
    {
      project: "vege",

      clientName: "Rama",
      review: "....",
    },
     {
      project: "e-commerce",

      clientName: "nour",
      review: "..........",
    },
    {
      project: "Bus Booking App",

      clientName: "Nour",
      review: "this is amazing",
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
