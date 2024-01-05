"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import MovieThumbnail from "@/components/MovieThumbnail";

export default function Home() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    grabMovie();
  }, []);

  const grabMovie = async (numberOfMovies = 5) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=movie&type=movie&apikey=d6d95cbf&r=json`
      );

      if (!response.ok) {
        // Check if the request was successful
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Assuming you expect JSON data, use response.json() to parse the JSON
      const data = await response.json();

      if (data.Search && data.Search.length > 0) {
        const movies = data.Search.slice(0, numberOfMovies);
        console.log("Movies:", movies);
        setMovieList(movies);
      } else {
        console.log("No movies found.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.movieList}>
        {movieList.map((movie) => (
          <MovieThumbnail key={movie.imdbID} poster={movie.Poster} movieId={movie.imdbID} movieData={movie} />
        ))}
      </section>

      <footer>
        <p>&copy; 2024 Netflix Clone</p>
      </footer>
    </main>
  );
}
