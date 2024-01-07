import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import main from "@/app/main.module.scss";

const MovieThumbnail = ({ poster, movieData, movieId }) => {
  const router = useRouter();

  const handleNavigation = () => {
    // Pass movieData as state
    router.push(
      {
        pathname: "/movie/details",
        query: { movieId },
      },
      {
        state: { movieData },
      }
    );
  };

  return (
    <div className={main.moviePoster}>
      <Link
        href={{
          pathname: "/movie/details",
          query: { data: JSON.stringify(movieData) },
        }}
      >
        <Image
          src={poster}
          height={300}
          width={200}
          // onClick={handleNavigation}
          alt="movie poster"
        ></Image>
      </Link>
    </div>
  );
};

export default MovieThumbnail;
