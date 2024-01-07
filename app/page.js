"use client";
import { useState, useEffect } from "react";
import MovieThumbnail from "@/components/MovieThumbnail";
import main from "./main.module.scss";

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    grabMovie();
  }, []);

  const grabMovie = async (numberOfMovies = 10) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?s=movie&type=movie&apikey=d6d95cbf&r=json`
      );

      if (!response.ok) {
        // Check if the request was successful
        setIsLoading(false);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Assuming you expect JSON data, use response.json() to parse the JSON
      const data = await response.json();

      if (data.Search && data.Search.length > 0) {
        const movies = data.Search.slice(0, numberOfMovies);
        console.log("Movies:", movies);
        setMovieList(movies);
        setIsLoading(false);
      } else {
        console.log("No movies found.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={main.main}>
      <header>
        <h1 style={{ color: main.secondaryColor }}>Netflix Clone</h1>
      </header>
      {isLoading ? (
        <span className={main.loader}></span>
      ) : (
        <section className={main.movieList}>
          {movieList.map((movie) => (
            <MovieThumbnail
              key={movie.imdbID}
              poster={movie.Poster}
              movieId={movie.imdbID}
              movieData={movie}
            />
          ))}
        </section>
      )}

      <footer className={main.footer}>
        <p style={{ color: main.whiteColor }}>&copy; 2024 Netflix Clone</p>
      </footer>
    </main>
  );
}
