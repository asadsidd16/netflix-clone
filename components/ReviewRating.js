import React from "react";
import main from "@/app/main.module.scss";

const ReviewRating = ({rating}) => {
  return (
    <div className={main.rating_review}>
        <p className={main.container_main_text}>{rating.Source}</p>
        <p className={main.container_secondary_text}>{rating.Value}</p>
    </div>
  );
};

export default ReviewRating;
