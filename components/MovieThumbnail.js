import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";

const MovieThumbnail = ({ poster }) => {
    const handleNavigation = () => {

    }
  return (
    <div className={styles.moviePoster}>
        {/* <Link> */}
        <Image src={poster} height={300} width={200} onClick={handleNavigation} alt="movie poster"></Image>
        {/* </Link> */}
    </div>
  );
};

export default MovieThumbnail;
