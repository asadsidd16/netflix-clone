import React from "react";
import main from "@/app/main.module.scss";

const ReviewRating = ({rating}) => {
  return (
    <div className={main.rating_review}>
        <p style={{ color: main.whiteColor }}>{rating.Source}</p>
        <p style={{ color: main.whiteColor  }}>{rating.Value}</p>
    </div>
  );
};

export default ReviewRating;
