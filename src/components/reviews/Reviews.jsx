import React, { useState } from "react";
import "./reviews.css";

const reviewdata = [
  {
    id: 1,
    stars: 5,
    content:
      "Excellent service! They rebuilt my trailer starter quickly and it works better than new.",
    name: "Mark R.",
  },
  {
    id: 2,
    stars: 5,
    content:
      "Great quality parts and fast shipping. My alternator has been running strong for months without issues. I’ve already recommended them to colleagues who also run heavy equipment.",
    name: "Jessica L.",
  },
  {
    id: 3,
    stars: 4,
    content:
      "Solid experience overall. Took a bit longer than expected, but the rebuilt unit is performing perfectly.",
    name: "Brian W.",
  },
  {
    id: 4,
    stars: 5,
    content:
      "Customer support was top-notch. They helped me find a discontinued cable I thought I’d never replace. That saved me hundreds of dollars on a replacement unit.",
    name: "Laura P.",
  },
  {
    id: 5,
    stars: 5,
    content:
      "Reliable and professional. The team really knows their stuff and stands behind their products.",
    name: "Daniel H.",
  },
  {
    id: 6,
    stars: 4,
    content:
      "Battery works well for my utility trailer. Would have liked more shipping options, but product quality is excellent.",
    name: "Chris M.",
  },
  {
    id: 7,
    stars: 5,
    content:
      "Fast turnaround and great workmanship. My equipment is back on the job thanks to these guys.",
    name: "Angela T.",
  },
  {
    id: 8,
    stars: 5,
    content:
      "I’ve bought both starters and alternators here, and every unit has been dependable. Definitely trust this company.",
    name: "Kevin S.",
  },
  {
    id: 9,
    stars: 4,
    content:
      "Very good experience. A little pricey compared to generic options, but the reliability makes it worth it.",
    name: "Rachel D.",
  },
  {
    id: 10,
    stars: 5,
    content:
      "Hands down the best shop for rebuilds. They brought my old tractor back to life with a custom cable solution.",
    name: "Thomas G.",
  },
  {
    id: 11,
    stars: 5,
    content:
      "Outstanding! They explained everything clearly before the repair, and I felt confident leaving my equipment in their hands.",
    name: "Evelyn P.",
  },
  {
    id: 12,
    stars: 4,
    content:
      "Starter works well, but shipping took longer than expected. Still satisfied overall.",
    name: "Miguel A.",
  },
  {
    id: 13,
    stars: 5,
    content:
      "Top-notch quality. I run a small fleet, and these guys keep us moving with reliable parts and quick service.",
    name: "John S.",
  },
  {
    id: 14,
    stars: 5,
    content:
      "Couldn’t be happier! They diagnosed my alternator problem quickly and had me back on the road within two days.",
    name: "Olivia M.",
  },
  {
    id: 15,
    stars: 4,
    content:
      "Good quality rebuild. Took a little longer than I thought, but it’s been running strong since.",
    name: "Derek F.",
  },
  {
    id: 16,
    stars: 5,
    content:
      "Exceptional service! They even followed up a week later to make sure the unit was working properly. That’s rare these days.",
    name: "Heather N.",
  },
  {
    id: 17,
    stars: 5,
    content:
      "Super easy process from ordering to delivery. I’ll be buying all my trailer electrical parts from them moving forward.",
    name: "Anthony R.",
  },
  {
    id: 18,
    stars: 4,
    content:
      "Product quality is solid, but I wish they had weekend support hours. Otherwise, very dependable.",
    name: "Sophie K.",
  },
  {
    id: 19,
    stars: 5,
    content:
      "Amazing! They sourced a rare alternator for my classic truck that I couldn’t find anywhere else. Worth every penny.",
    name: "George D.",
  },
  {
    id: 20,
    stars: 5,
    content:
      "Quick, reliable, and professional. My go-to place for all trailer electrical needs.",
    name: "Natalie J.",
  },
];

const Reviews = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [reviews, setReviews] = useState([]);
  const placeId = 'YOUR_PLACE_ID'; // Replace with your actual Place ID
  const apiKey = 'YOUR_GOOGLE_API_KEY'; // Replace with your API Key

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };
  const handleShowLess = () => {
    setVisibleCount(6);
  };

  const navigateToShop = () => {
    window.open("https://madisoncables.com/", "_blank", "noopener,noreferrer");
  };



  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
  //       );
  //       const data = await response.json();
  //       if (data.result && data.result.reviews) {
  //         setReviews(data.result.reviews);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching Google reviews:', error);
  //     }
  //   };

  //   fetchReviews();
  // }, [placeId, apiKey]);

  return (
    <div className="reviews">
      <div className="reviews-container">
        <div className="reviews">
          <h1>Feedback from our Clients</h1>
          <div className="reviews-cards-container">
            {reviewdata.slice(0, visibleCount).map((review) => (
              <div
                className="reviews-card"
                key={review.id}
              >
                <div className="reviews-card-top">
                  <div className="reviews-star">
                    {"⭐".repeat(review.stars)}
                  </div>
                  <div className="reviews-content">
                    <p>{review.content}</p>
                  </div>
                </div>
                <div className="reviews-card-bottom">
                  <h1>{review.name}</h1>
                </div>
              </div>
            ))}
          </div>
          {visibleCount < reviewdata.length && (
            <div className="reviews-button" onClick={handleLoadMore}>
              <p>Show More</p>
            </div>
          )}
          {visibleCount >= reviewdata.length && (
            <div className="reviews-button" onClick={handleShowLess}>
              <p>Show Less</p>
            </div>
          )}
        </div>
        <div className="review-cta">
          <h1>Need Durable Cables and Power Systems You Can Trust?</h1>
          <div className="review-cta-button" onClick={navigateToShop}>
            <p>Shop Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
