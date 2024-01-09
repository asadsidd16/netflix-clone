"use client";
import movie from "./movie.module.scss";
import { useState, useEffect } from "react";
import ReviewRating from "@/components/ReviewRating";
import Link from "next/link";

export default function MovieDetail({ searchParams }) {
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetail, setMovieDetail] = useState({});
  const [movieRating, setMovieRating] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

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

        setMovieDetail(movieDetails);
        setMovieRating(movieDetails.Ratings);
        setIsLoading(false);
      } else {
        setErrorMessage("Error fetching movie details");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={movie.main}>
      <header>
        <Link
          href={{
            pathname: "/",
          }}
        >
          <h1 style={{ color: movie.secondaryColor }}>Netflix Clone</h1>
        </Link>
      </header>
      {isLoading ? (
        <span className={movie.loader}></span>
      ) : (
        <section>
          {movieDetail ? (
            <section>
              <section className={movie.main_container}>
                <div className={movie.movie_image}>
                  {movieDetail.Poster && (
                    <img
                      src={movieDetail?.Poster}
                      height={350}
                      width={250}
                      alt="movie poster"
                    ></img>
                  )}
                </div>
                <section className={movie.description_container}>
                  <div>
                    <h1 className={movie.movie_text}>{movieDetail?.Title}</h1>
                    <h2 className={movie.container_secondary_text}>
                      {movieDetail?.Year}
                    </h2>
                  </div>
                  <div>
                    {movieDetail.Genre && (
                      <div className={movie.container}>
                        <p className={movie.container_main_text}>Genre:</p>
                        <p className={movie.container_secondary_text}>
                          {movieDetail?.Genre}
                        </p>
                      </div>
                    )}
                    {movieDetail.Runtime && (
                      <div className={movie.container}>
                        <p className={movie.container_main_text}>Runtime:</p>
                        <p className={movie.container_secondary_text}>
                          {movieDetail?.Runtime}
                        </p>
                      </div>
                    )}
                    {movieDetail.Actors && (
                      <div className={movie.container}>
                        <p className={movie.container_main_text}>Cast:</p>
                        <p className={movie.container_secondary_text}>
                          {movieDetail?.Actors}
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              </section>
              <section>
                {movieDetail.Rated && (
                  <div className={movie.rating_container}>
                    <p className={movie.container_main_text}>
                      Maturity Rating:
                    </p>
                    <p className={movie.rating_box}>{movieDetail?.Rated}</p>
                  </div>
                )}
                <div className={movie.description_box}>
                  <p className={movie.description}>{movieDetail?.Plot}</p>
                </div>
              </section>
              <section>
                {movieRating[0] && (
                  <p className={movie.container_main_text}>
                    What did the reviews think?
                  </p>
                )}

                <div className={movie.rating_review_container}>
                  {movieRating.map((rating, i) => (
                    <ReviewRating key={i} rating={rating} />
                  ))}
                </div>
              </section>
            </section>
          ) : (
            <h1 className={movie.error_message}>
              {errorMessage || "Oops an error occurred. Please try again!"}
            </h1>
          )}
        </section>
      )}
      <footer className={movie.footer}>
        <p className={movie.footer_text}>&copy; 2024 Netflix Clone</p>
      </footer>
    </main>
  );
}
