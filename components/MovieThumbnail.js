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
          style={{ height: 'auto', width: '100%', maxWidth: '250px' }}
          alt="movie poster"
        ></img>
      </Link>
    </div>
  );
};

export default MovieThumbnail;
