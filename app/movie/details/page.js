"use client";
import movie from "./movie.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function MovieDetail({ searchParams }) {
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetail, setMovieDetail] = useState({});
  const [movieRating, setMovieRating] = useState([]);

  useEffect(() => {
    grabMovieDetails();
  }, []);

  const grabMovieDetails = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${searchParams.movieId}&apikey=d6d95cbf&r=json`
      );

      if (response.ok) {
        const movieDetails = await response.json();
        console.log("Movie Details:", movieDetails);
        setMovieDetail(movieDetails);
        setMovieRating(movieDetails.Ratings);
        setIsLoading(false);
      } else {
        console.error("Error fetching movie details");
        setIsLoading(false);
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
      {isLoading ? (
        <span className={movie.loader}></span>
      ) : (
        <section>
          <section className={movie.container}>
            <div>
              <Image
                src={movieDetail?.Poster}
                height={350}
                width={250}
                alt="movie poster"
              ></Image>
            </div>
            <section className={movie.description_container}>
              <div>
                <h1 className={movie.movie_text}>{movieDetail?.Title}</h1>
                <p className={movie.container_secondary_text}>
                  {movieDetail?.Year}
                </p>
              </div>
              <div>
                <div className={movie.container}>
                  <p className={movie.container_main_text}>Genre:</p>
                  <p className={movie.container_secondary_text}>
                    {movieDetail?.Genre}
                  </p>
                </div>
                <div className={movie.container}>
                  <p className={movie.container_main_text}>Runtime:</p>
                  <p className={movie.container_secondary_text}>
                    {movieDetail?.Runtime}
                  </p>
                </div>
                <div className={movie.container}>
                  <p className={movie.container_main_text}>Cast:</p>
                  <p className={movie.container_secondary_text}>
                    {movieDetail?.Actors}
                  </p>
                </div>
              </div>
            </section>
          </section>
          <section>
            <div className={movie.container}>
              <p className={movie.container_main_text}>Maturity Rating:</p>
              <p className={movie.rating_box}>{movieDetail?.Rated}</p>
            </div>
            <p className={movie.description}>
              {movieDetail?.Plot}
            </p>
          </section>
        </section>
      )}
      <footer className={movie.footer}>
        <p style={{ color: movie.whiteColor }}>&copy; 2024 Netflix Clone</p>
      </footer>
    </main>
  );
}
