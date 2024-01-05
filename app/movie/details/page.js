"use client";
import Image from 'next/image'
import styles from './../../page.module.css'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header';

export default function MovieDetail() {
  const searchParams = useSearchParams()
  console.log("CHECK",searchParams.get('movieId'))
  return (
    <main className={styles.main}>
      <Header />

    </main>
  )
}
