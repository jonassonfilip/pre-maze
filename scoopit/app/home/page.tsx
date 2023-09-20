import Head from "next/head";
import PieChart from "../components/PieChart";
import SearchBar from "../components/SearchBar";
import SubscriptionPreviewCard from "../components/SubscriptionPreviewCard";
import styles from "./home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <section className={styles.headerSection}>
          <h1>Välkommen Gabralda!</h1>
        </section>

        <SearchBar></SearchBar>

        <PieChart></PieChart>

        <section className={styles.totalCostSection}>
          <p>Totalkostnad/mån</p>
          <p>1200 KR</p>
        </section>

        <section className={styles.showInactiveSection}></section>

        <section className={styles.categorySection}>
          <h4>Kategorier</h4>
          <div className={styles.categoryThumbnailsBar}>
            <div className={`${styles.categoryThumbnail} ${styles.music}`}>
              <Image
                src="./images/home/note.svg"
                width={17}
                height={30}
                alt="music"
              />
            </div>
            <div className={`${styles.categoryThumbnail} ${styles.book}`}>
              <Image
                src="./images/home/book.svg"
                width={30}
                height={23.82}
                alt="book"
              />
            </div>
            <div className={`${styles.categoryThumbnail} ${styles.movie}`}>
              <Image
                src="./images/home/movie.svg"
                width={30}
                height={30}
                alt="movie"
              />
            </div>
            <div className={`${styles.categoryThumbnail} ${styles.webb}`}>
              <Image
                src="./images/home/webb.svg"
                width={30}
                height={27}
                alt="webb"
              />
            </div>
          </div>
        </section>
        
        <section className={styles.musicSection}>
          <section className={styles.previewTitleBar}>
            <h2>MUSIK</h2>
            <h2>367KR/MÅN</h2>
          </section>
          <SubscriptionPreviewCard></SubscriptionPreviewCard>
          <SubscriptionPreviewCard></SubscriptionPreviewCard>
          <SubscriptionPreviewCard></SubscriptionPreviewCard>
        </section>


        <section className={styles.booksAndMediaSection}>
          <section className={styles.previewTitleBar}>
            <h2>MUSIK</h2>
            <h2>367KR/MÅN</h2>
          </section>
          <SubscriptionPreviewCard></SubscriptionPreviewCard>
        </section>
        <section className={styles.moviesAndTvSection}>
          <section className={styles.previewTitleBar}>
            <h2>MUSIK</h2>
            <h2>367KR/MÅN</h2>
          </section>
          <SubscriptionPreviewCard></SubscriptionPreviewCard>
        </section>
        <section className={styles.otherSection}>
          <section className={styles.previewTitleBar}>
            <h2>MUSIK</h2>
            <h2>367KR/MÅN</h2>
          </section>
          <SubscriptionPreviewCard></SubscriptionPreviewCard>
        </section>
      </div>
    </>
  );
}
