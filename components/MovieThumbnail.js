import React from "react";
import Link from "next/link";
import main from "@/app/main.module.scss";

const MovieThumbnail = ({ poster, movieId }) => {

  return (
    <div className={main.moviePoster}>
      <Link
        href={{
          pathname: "/movie/details",
          query: { 
            movieId: movieId
          },
        }}
      >
        <img
          src={poster}
          height={300}
          width={200}
          alt="movie poster"
        ></img>
      </Link>
    </div>
  );
};

export default MovieThumbnail;
