"use client";
import movie from "./movie.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function MovieDetail({searchParams}) {
  console.log("SEARCH", searchParams)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    grabMovieDetails()
  },[])

  const grabMovieDetails = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?i=${searchParams.movieId}&apikey=d6d95cbf&r=json`
      );
      
      if (response.ok) {
        const movieDetails = await response.json();
        console.log('Movie Details:', movieDetails);
      } else {
        console.error('Error fetching movie details');
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={movie.main}>
      <header>
        <h1 style={{ color: movie.secondaryColor }}>Netflix Clone</h1>
      </header>
      <section>
      {/* <div>
        <h1 style={{ color: movie.whiteColor }}>{searchParams.title}</h1>
        <Image
          src={searchParams.image}
          height={300}
          width={200}
          alt="movie poster"
        ></Image>
      </div> */}
      </section>
    </main>
  );
}
