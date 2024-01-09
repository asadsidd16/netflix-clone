"use client";
import { useState, useEffect } from "react";
import MovieThumbnail from "@/components/MovieThumbnail";
import main from "./main.module.scss";

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    grabMovie();
  }, []);

  const grabMovie = async (numberOfMovies = 8) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?s=movie&type=movie&apikey=${process.env.NEXT_PUBLIC_MOVIE_API}&r=json`
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

        setMovieList(movies);
        setIsLoading(false);
      } else {
        setErrorMessage("No movies found.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={main.main}>
      <header>
        <h1 className={main.header_text}>Netflix Clone</h1>
      </header>
      {isLoading ? (
        <span className={main.loader}></span>
      ) : (
        <section className={main.movieList}>
          {movieList ? (
            movieList.map((movie) => (
              <MovieThumbnail
                key={movie.imdbID}
                poster={movie.Poster}
                movieId={movie.imdbID}
              />
            ))
          ) : (
            <h1 className={main.error_message}>{errorMessage || "Oops an error occurred. Please try again!"}</h1>
          )}
        </section>
      )}

      <footer className={main.footer}>
        <p className={main.footer_text}>&copy; 2024 Netflix Clone</p>
      </footer>
    </main>
  );
}
