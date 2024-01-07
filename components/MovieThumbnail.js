import React from "react";
import Image from "next/image";
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
        <Image
          src={poster}
          height={300}
          width={200}
          alt="movie poster"
        ></Image>
      </Link>
    </div>
  );
};

export default MovieThumbnail;
