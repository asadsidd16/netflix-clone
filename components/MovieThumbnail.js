import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";
import { useRouter } from "next/navigation";

const MovieThumbnail = ({ poster, movieData, movieId }) => {
  const router = useRouter();
  const handleNavigation = () => {};
  return (
    <div className={styles.moviePoster}>
       <Link
        href={{
          pathname: '/movie/details',
          query: {
            movieId: movieId
          }
        }}
      >
        <Image
          src={poster}
          height={300}
          width={200}
          onClick={handleNavigation}
          alt="movie poster"
        ></Image>
      </Link>
    </div>
  );
};

export default MovieThumbnail;
