"use client";
import styles from './../../page.module.css'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header';
import movie from './movie.module.scss'
import { useRouter } from "next/navigation";


export default function MovieDetail() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <main className={styles.main}>
      <Header />
      <div>
        <h1 style={{ color: movie.primaryColor }}>Hi</h1>
      </div>
    </main>
  )
}
