import SearchBar from "../components/SearchBar";
import SubscriptionPreviewCard from "../components/SubscriptionPreviewCard";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <section className={styles.headerSection}>
          <h1>Välkommen Gabralda!</h1>
        </section>
        <SearchBar></SearchBar>
        <div className={styles.pieChart}></div>
        <section className={styles.totalCostSection}>
          <p>Totalkostnad/mån</p>
          <p>1200 KR</p>
        </section>
        <section className={styles.showInactiveSection}></section>
        <section className={styles.categorySection}>
          <h4>Kategorier</h4>
          <div className={styles.categoryTumbnailsBar}>
            <div className={styles.categoryTumbnail}>
              <img alt="music"></img>
            </div>
            <div className={styles.categoryTumbnail}>
              <img alt="books-and-media"></img>
            </div>
            <div className={styles.categoryTumbnail}>
              <img alt="movies-and-tv"></img>
            </div>
            <div className={styles.categoryTumbnail}>
              <img alt="other"></img>
            </div>
          </div>
        </section>
        <section className={styles.musicSection}>
          <SubscriptionPreviewCard></SubscriptionPreviewCard>
        </section>
        <section className={styles.booksAndMediaSection}>
          <SubscriptionPreviewCard></SubscriptionPreviewCard>
        </section>
        <section className={styles.moviesAndTvSection}>
          <SubscriptionPreviewCard></SubscriptionPreviewCard>
        </section>
        <section className={styles.otherSection}>
          <SubscriptionPreviewCard></SubscriptionPreviewCard>
        </section>
      </div>
    </>
  );
}
