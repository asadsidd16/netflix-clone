"use client";
import styles from "./../../page.module.css";
import { useSearchParams } from "next/navigation";
import movie from "./movie.module.scss";
import { useRouter } from "next/navigation";

export default function MovieDetail() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <main className={styles.main}>
      <header>
        <h1>Netflix Clone</h1>
      </header>
      <div>
        <h1 style={{ color: movie.primaryColor }}>Hi</h1>
      </div>
    </main>
  );
}
